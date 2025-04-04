import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContentComponent } from "./content/content.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ContentComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
