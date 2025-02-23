import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedUser } from '../../models/registeredUser.model';


@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: LoggedUser | null = null;

  ngOnInit(): void {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }


}
