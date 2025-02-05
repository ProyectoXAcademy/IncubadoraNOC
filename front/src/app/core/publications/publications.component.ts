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
  //this.publicationsGET()

// info harcodeada de las publicaciones
this.publications=[
  
  
    {type:"emprendimientos",
      title: "Emprendimiento domina el mercado en la ciudad de Córdoba",
      description: "Emprendimiento de desarrollo de software domina el mercado en Córdoba y sus alrededores, sus fundadores comparten sus claves",
      issue_date: "2024-05-07",
      owner_id: 112},
  
    {type:"IA",
        title: "Avances en Inteligencia Artificial",
        description: "En los últimos meses, ha crecido el debate sobre el uso ético de la inteligencia artificial, especialmente en la automatización de trabajos y la creación de sistemas de IA más avanzados. Algunas empresas están implementando IA para mejorar la experiencia del cliente, mientras que otras se enfrentan a desafíos regulatorios en torno a su uso.",
        issue_date: "2024-08-12",
        owner_id: 112
    },
    {type:"laboral",
      title: "El Futuro del Trabajo Híbrido",
      description: "Muchas empresas están adoptando modelos híbridos de trabajo, combinando días en la oficina con trabajo remoto. Esto está generando debates sobre la productividad, el equilibrio entre la vida laboral y personal, y cómo las empresas están reorganizando sus espacios de trabajo.",
      issue_date: "2024-12-09",
      owner_id: 112
  },
  {type:"IA",
    title: "La Automatización y el Futuro del Empleo",
    description: "Con el avance de la automatización, ciertos sectores laborales se están viendo amenazados por la inteligencia artificial y la robótica. Sin embargo, también hay un aumento en la demanda de nuevos trabajos tecnológicos, lo que está impulsando un cambio en la formación y educación de los trabajadores.",
    issue_date: "2025-01-02",
    owner_id: 112
}
]

}//

 publicationsGET(){
  this.serv.publicationsGet().subscribe(
    (data:any) =>  { this.publications = data},
    (error) => {console.log("error al traer publicaciones")}
  )
 }

}//