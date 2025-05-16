export interface Booking {
    id?: string;
    serviceId: number;
    serviceDate: Date;
    startTime: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes?: string;
    staffId?: number;
    createdAt?: Date;
  }
  
  export interface TimeSlot {
    time: string;
    available: boolean;
  }
  
  export interface Staff {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
  }