import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  activeFilter = 'all';
  lightboxOpen = false;
  currentImageIndex = 0;
  currentImage: GalleryItem | null = null;

  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Elegant French Manicure',
      category: 'Manicures',
      image: '/nails/IMG_3423.JPG'
    },
    {
      id: 2,
      title: 'Floral Nail Art Design',
      category: 'Nail Art',
      image: '/nails/IMG_3424.JPG'
    },
    {
      id: 3,
      title: 'Professional Gel Extensions',
      category: 'Extensions',
      image: '/nails/IMG_3425.JPG'
    },
    {
      id: 4,
      title: 'Relaxing Spa Pedicure',
      category: 'Pedicures',
      image: '/nails/IMG_3426.JPG'
    },
    {
      id: 5,
      title: 'Geometric Pattern Art',
      category: 'Nail Art',
      image: '/nails/IMG_3427.JPG'
    },
    {
      id: 6,
      title: 'Classic Red Manicure',
      category: 'Manicures',
      image: '/nails/IMG_3428.JPG'
    },
    {
      id: 7,
      title: 'Glitter Accent Nails',
      category: 'Nail Art',
      image: '/nails/IMG_3429.JPG'
    },
    {
      id: 8,
      title: 'Long Acrylic Extensions',
      category: 'Extensions',
      image: '/nails/IMG_3430.JPG'
    },
    {
      id: 9,
      title: 'Luxury Pedicure Treatment',
      category: 'Pedicures',
      image: '/nails/IMG_3443.JPG'
    }
  ];

  filteredGalleryItems: GalleryItem[] = [];

  ngOnInit() {
    this.filteredGalleryItems = [...this.galleryItems];
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    
    if (filter === 'all') {
      this.filteredGalleryItems = [...this.galleryItems];
    } else {
      const categoryMap: { [key: string]: string } = {
        'manicure': 'Manicures',
        'nail-art': 'Nail Art',
        'extensions': 'Extensions',
        'pedicure': 'Pedicures'
      };
      
      this.filteredGalleryItems = this.galleryItems.filter(
        item => item.category === categoryMap[filter]
      );
    }
  }

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.currentImage = this.filteredGalleryItems[index];
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.currentImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.currentImageIndex < this.filteredGalleryItems.length - 1) {
      this.currentImageIndex++;
      this.currentImage = this.filteredGalleryItems[this.currentImageIndex];
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.currentImage = this.filteredGalleryItems[this.currentImageIndex];
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      this.closeLightbox();
    }
  }

  @HostListener('document:keydown.arrowLeft', ['$event'])
  onLeftArrow(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      this.previousImage();
    }
  }

  @HostListener('document:keydown.arrowRight', ['$event'])
  onRightArrow(event: KeyboardEvent) {
    if (this.lightboxOpen) {
      this.nextImage();
    }
  }
}