import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();  // Obtener el año actual
  currentDay: number = new Date().getDate();  // Obtener el día actual
  currentMonth: number = new Date().getMonth() + 1;  // Obtener el mes actual (se suma 1 porque los meses en JavaScript son indexados desde 0)
  currentHour: number = new Date().getHours();  // Obtener la hora actual
  currentMinute: number = new Date().getMinutes();  // Obtener los minutos actuales
  currentSeconds: number = new Date().getSeconds();  // Obtener los minutos actuales

  // Para tener una hora con 3 dígitos (ejemplo: 09:05:02)
  formattedHour: string = this.formatTime(this.currentHour);
  formattedMinute: string = this.formatTime(this.currentMinute);
  formattedSeconds: string = this.formatTime(this.currentSeconds);
  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}
