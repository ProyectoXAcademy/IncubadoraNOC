import { Component, Input } from '@angular/core';
import {NgFor} from '@angular/common'
import { Publication } from '../../models/publication.model';
import { PublicationsService } from '../../services/publications/publications.service';

@Component({
  selector: 'app-publications',
  imports: [NgFor],
  standalone: true,
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
   constructor(private serv:PublicationsService){}
  
  publications: Publication[] = [];

ngOnInit(){
  // DESCOMENTAR UNA VEZ HAYA PUBLICACIONES EN EL BACK
  this.publicationsGET()
}//

 publicationsGET(){
  this.serv.publicationsGet().subscribe(
    (data:any) =>  { this.publications = data
    },
    (error) => {console.log("error al traer publicaciones")}
  )
 }

}//