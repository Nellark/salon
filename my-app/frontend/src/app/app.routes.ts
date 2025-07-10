
import { Routes} from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DisplayComponent } from './components/display/display.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Landing' },
  {path: 'display', component: DisplayComponent, title: 'Display'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'nav', component: NavBarComponent, title: 'Navbar'},
  {path: 'footer', component: FooterComponent, title: 'Footer'},
  
]; 



