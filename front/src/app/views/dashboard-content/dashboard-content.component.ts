import { Component } from '@angular/core';
import { SideBarComponent } from '../../core/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard-content',
  imports: [SideBarComponent, RouterModule],
  standalone:true,
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.css'
})
export class DashboardContentComponent {

}
