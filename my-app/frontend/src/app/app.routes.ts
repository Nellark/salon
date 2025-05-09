
import { Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DisplayComponent } from './components/display/display.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Landing' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {path: 'display', component: DisplayComponent, title: 'Display'},
  {path: 'nav', component: NavBarComponent, title: 'Navbar'},
  {path: 'footer', component: FooterComponent, title: 'Footer'}
]; 



