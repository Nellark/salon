import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../../footer/footer.component';
import { OurServicesComponent } from '../ourServices/ourServices.component';




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeComponent, NavBarComponent, FooterComponent, OurServicesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
