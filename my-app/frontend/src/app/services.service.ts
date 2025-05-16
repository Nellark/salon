import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff, ServiceItem } from './product-items';
import { DisplayServicesService } from './display-services.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private serviceData: DisplayServicesService) {}

  getServices(): Observable<ServiceItem[]> {
    const services = this.serviceData.getServices();
    return of(services);
  }

  getStaff(): Observable<Staff[]> {
    const staff = this.serviceData.getStaff(); 
    return of(staff); 
  }
}

