import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ourServices',
    imports: [RouterLink],
    templateUrl: './ourServices.component.html',
    styleUrl: './ourServices.component.css'
})
export class OurServicesComponent {
    isMobileMenuOpen = false;

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
      }

}
