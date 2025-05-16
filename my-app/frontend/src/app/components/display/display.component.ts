import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayServicesService } from '../../display-services.service';
import { ServiceItem } from '../../product-items';


@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
addToWishlist(_t4: ServiceItem) {
throw new Error('Method not implemented.');
}
  services: ServiceItem[] = [];

  constructor(private displayService: DisplayServicesService) {}

  ngOnInit(): void {
    this.services = this.displayService.getServices();
  }
}
