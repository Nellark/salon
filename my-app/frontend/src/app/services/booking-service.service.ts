import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking, TimeSlot } from '../booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  constructor() {}

  getAvailableDates(serviceId: number): Observable<Date[]> {
    const availableDates: Date[] = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      availableDates.push(this.addDays(today, i));
    }
    return of(availableDates);
  }

  getAvailableTimeSlots(date: Date, serviceId: number): Observable<TimeSlot[]> {
    const timeSlots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = 18;
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const available = Math.random() > 0.3;
        timeSlots.push({ time, available });
      }
    }
    return of(timeSlots);
  }

  createBooking(booking: Booking): Observable<Booking> {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.bookings.push(newBooking);
    return of(newBooking);
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    return of(this.bookings.find(booking => booking.id === id));
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
