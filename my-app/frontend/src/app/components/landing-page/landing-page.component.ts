import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../../footer/footer.component';
import { OurServicesComponent } from '../ourServices/ourServices.component';
import { GalleryComponent } from "../gallery/gallery.component";




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, OurServicesComponent, GalleryComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
