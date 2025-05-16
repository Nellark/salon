import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../booking-service.service';
import { TimeSlot, Staff } from '../../booking.model';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  currentStep: any;
  selectedService: any;
  services: any;
  availableDates: Date[] = [];
  selectedDate?: Date;
  timeSlots: TimeSlot[] = [];
  selectedTimeSlot?: string;
  staffMembers: Staff[] = [];
  selectedStaff?: Staff;
  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicesService: ServicesService,
    private bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((services: any) => {
      this.services = services;
      this.route.queryParams.subscribe(params => {
        if (params['service']) {
          const serviceId = Number(params['service']);
          this.selectedService = this.services.find((s: { id: number }) => s.id === serviceId);
          if (this.selectedService) {
            this.nextStep();
          }
        }
      });
    });

    this.servicesService.getStaff().subscribe((staff: Staff[]) => {
      this.staffMembers = staff;
    });

    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.availableDates.push(date);
    }
  }

  selectService(service: any): void {
    this.selectedService = service;
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    this.selectedTimeSlot = undefined;
    this.selectedStaff = undefined;
    this.generateTimeSlots();
  }

  generateTimeSlots(): void {
    this.timeSlots = [];
    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const available = Math.random() > 0.3;
        this.timeSlots.push({ time, available });
      }
    }
  }

  selectTimeSlot(slot: TimeSlot): void {
    if (!slot.available) return;
    this.selectedTimeSlot = slot.time;
  }

  selectStaff(staff: Staff): void {
    this.selectedStaff = staff;
  }

  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
      if (this.currentStep === 2 && this.selectedService) {
        this.bookingService.getAvailableDates(this.selectedService.id).subscribe(dates => {
          this.availableDates = dates;
        });
      }
      window.scrollTo(0, 0);
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo(0, 0);
    }
  }

  isDateSelected(date: Date): boolean {
    if (!this.selectedDate) return false;
    return date.toDateString() === this.selectedDate.toDateString();
  }

  formatDatePart(date: Date, format: string): string {
    const options: any = {};
    if (format === 'EEE') {
      options.weekday = 'short';
    } else if (format === 'd') {
      return date.getDate().toString();
    } else if (format === 'MMM') {
      options.month = 'short';
    }
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  formatDateFull(date?: Date): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.bookingForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  submitForm(): void {
    if (this.bookingForm.invalid || !this.selectedService || !this.selectedDate || !this.selectedTimeSlot) {
      return;
    }

    const booking = {
      serviceId: this.selectedService.id,
      serviceDate: this.selectedDate,
      startTime: this.selectedTimeSlot,
      firstName: this.bookingForm.value.firstName,
      lastName: this.bookingForm.value.lastName,
      email: this.bookingForm.value.email,
      phone: this.bookingForm.value.phone,
      notes: this.bookingForm.value.notes,
      staffId: this.selectedStaff?.id
    };

    this.bookingService.createBooking(booking).subscribe(() => {
      this.nextStep();
    });
  }

  bookAnother(): void {
    this.selectedService = undefined;
    this.selectedDate = undefined;
    this.selectedTimeSlot = undefined;
    this.selectedStaff = undefined;
    this.bookingForm.reset();
    this.currentStep = 1;
  }
}
