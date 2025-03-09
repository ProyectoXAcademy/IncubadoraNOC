import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  ngAfterViewInit(): void {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  }
}
