import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  showBackToTop = false;
  newsletterEmail = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  ngOnInit() {
    this.onWindowScroll();
  }

  ngOnDestroy() {
    // Clean up any subscriptions if needed
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onNewsletterSubmit(event: Event) {
    event.preventDefault();
    if (this.newsletterEmail) {
      // Here you would typically send the email to your backend
      alert('Thank you for subscribing to our newsletter!');
      this.newsletterEmail = '';
    }
  }
}