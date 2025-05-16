import { Injectable } from '@angular/core';
import { ServiceItem } from './product-items';


@Injectable({
  providedIn: 'root'
})
export class DisplayServicesService {
  getStaff() {
    throw new Error('Method not implemented.');
  }

  private services: ServiceItem[] = [
    {
      image: 'nails/IMG_3317.JPG',
      name: 'Classic Nails',
      description: 'Elegant style for everyday wear.',
      price: 150
    },
    {
      image: 'nails/IMG_3318.JPG',
      name: 'French Tips',
      description: 'Timeless and classy French style.',
      price: 180
    },
    {
      image: 'nails/IMG_3321.jpg',
      name: 'Glitter Glam',
      description: 'Sparkly nails for special occasions.',
      price: 200
    },
    {
      image: 'nails/IMG_3322.JPG',
      name: 'Matte Finish',
      description: 'Modern matte with soft tones.',
      price: 170
    },
    {
      image: 'nails/IMG_3325.JPG',
      name: 'Floral Design',
      description: 'Hand-painted floral patterns.',
      price: 220
    },
    {
      image: 'nails/IMG_3326.JPG',
      name: 'Ombre Fade',
      description: 'Smooth gradient color blends.',
      price: 190
    },
    {
      image: 'nails/IMG_3327.JPG',
      name: 'Rhinestone Accent',
      description: 'Luxury nails with rhinestone detail.',
      price: 250
    },
    {
      image: 'nails/IMG_3328.jpg',
      name: 'Neutral Tone Set',
      description: 'Perfect for professional looks.',
      price: 160
    },
    {
      image: 'nails/IMG_3330.jpg',
      name: 'Glossy Finish',
      description: 'High-shine and durable polish.',
      price: 180
    },
    {
      image: 'nails/IMG_3331.JPG',
      name: 'Marble Style',
      description: 'Stylish marble-inspired design.',
      price: 230
    },
  
    {
      image: 'nails/IMG_3396.jpg',
      name: 'Bold Vibe',
      description: 'Bold colors and confident designs.',
      price: 210
    }
  ];

  constructor() {}

  getServices(): ServiceItem[] {
    return this.services;
  }
}
