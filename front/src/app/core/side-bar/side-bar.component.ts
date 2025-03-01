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
 
  @Output() closeSidebar = new EventEmitter<void>(); // Evento para cerrar el sidebar

  onItemClick() {
    this.closeSidebar.emit(); // Emite el evento cuando un ítem es seleccionado
  }
}
