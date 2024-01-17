import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-details',
  standalone: true,
  imports: [],
  templateUrl: './ad-details.component.html',
  styleUrl: './ad-details.component.scss'
})
export class AdDetailsComponent {
  currentDate: Date = new Date();
  userRegistrationDate: Date = new Date();
}
