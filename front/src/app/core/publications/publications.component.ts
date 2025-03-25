import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common'
import { Publication } from '../../models/publication.model';
import { PublicationsService } from '../../services/publications/publications.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [NgFor],
  standalone: true,
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
  providers: [DatePipe]

})
export class PublicationsComponent {
  constructor(private serv: PublicationsService, private datePipe: DatePipe) {}

  publications: Publication[] = [];

  ngOnInit() {
    // DESCOMENTAR UNA VEZ HAYA PUBLICACIONES EN EL BACK
    this.publicationsGET();
  }

  publicationsGET() {
    this.serv.publicationsGet().subscribe(
      (data: any) => {
        this.publications = data;
      },
      (error) => {
        console.log("error al traer publicaciones");
      }
    );
  }

  // Método para formatear la fecha
  formatDate(date: string | undefined): string {
    if (!date) {
      return ''; // Retorna un string vacío si la fecha es indefinida o nula
    }
    return this.datePipe.transform(date, 'dd/MM/yyyy') || ''; // Devuelve el formato de la fecha
  }
  
}