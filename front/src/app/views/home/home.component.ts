import { Component } from '@angular/core';
import { PublicationsComponent } from "../../core/publications/publications.component";

@Component({
  selector: 'app-home',
  imports: [PublicationsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
