import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuItem } from '../../models/menu-item.model';
import { LoggedUser } from '../../models/registeredUser.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit, OnInit {
  isDarkMode = false;
  private platformId: Object;
  private resizeListener: () => void;
  private authSubscription: Subscription = new Subscription();
  
  isAuthenticated: boolean = false;
  menuItems: MenuItem[] = [];

  loggedUserString: string | null = null
  loggedUser: LoggedUser| null = null


  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private darkModeService: DarkModeService,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.platformId = platformId;
    this.resizeListener = this.onResize.bind(this);
  }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((mode) => {
      this.isDarkMode = mode;
    });

    // Verifica el estado de autenticación al iniciar el componente
    this.checkAuthentication();
    this.getRegisteredUser()

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeListener);
    }
    this.authSubscription.unsubscribe();
  }

  private onResize() {
    if (isPlatformBrowser(this.platformId)) {
      const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      if (window.innerWidth >= 600 && mobileMenu) {
        mobileMenu.style.display = 'none';
      }
    }
  }
 
  getRegisteredUser(){
    this.loggedUserString=localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.loggedUserString!)
  }


  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  updateMenuItems() {
    if (this.isAuthenticated) {
      this.menuItems = [
        { text: 'Logout', event: () => this.logout(), class: 'btn logout-btn' }
      ];
    } else {
      this.menuItems = [
        { text: 'Iniciar Sesión', route: '/login', class: 'btn login-btn' },
        { text: 'Registrarse', route: '/register', class: 'btn register-btn' },
      ];
    }
  }

  checkAuthentication() {
    this.authSubscription = this.loginService.authenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.updateMenuItems(); // Llama a la función para actualizar el menú cuando el estado cambia
    });
  }

  logout() {
    this.loginService.logout(); // Llama al método de logout del servicio
    Swal.fire({
      icon: 'info',
      title: 'Sesión cerrada',
      text: 'Has cerrado sesión correctamente.',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    }).then(() => {
      this.router.navigate(['/login']); // Redirige al usuario a la página de login
    });
  }
}
