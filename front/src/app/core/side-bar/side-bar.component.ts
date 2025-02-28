import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
 
}
