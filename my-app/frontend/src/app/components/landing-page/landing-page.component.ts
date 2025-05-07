import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomeComponent } from '../home/home.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
