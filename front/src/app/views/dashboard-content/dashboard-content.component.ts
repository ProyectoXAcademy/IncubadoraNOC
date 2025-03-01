import { Component } from '@angular/core';
import { SideBarComponent } from '../../core/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-content',
  imports: [SideBarComponent, RouterModule, CommonModule],
  standalone:true,
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {
  sidebarOpen = false; // Estado inicial del sidebar
  

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
}
