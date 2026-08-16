import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="contact">
      <div class="container">
        <div class="contact-card">
          <span class="section-subtitle">Let's Connect</span>
          <h2 class="section-title">Have a Problem to Solve?</h2>
          <p class="section-description">
            Whether you need to scale your backend architecture, optimize database query performance, or integrate AI into your application—I'm ready to help.
          </p>

          <div class="contact-methods">
            <button class="contact-pill" (click)="copyEmail()">
              <i class="fa-solid fa-envelope"></i>
              <span>prince.chand.dev&#64;gmail.com</span>
              <i class="fa-solid fa-copy" style="font-size: 0.8rem; margin-left: 0.25rem;"></i>
            </button>

            <a href="tel:+919888725336" class="contact-pill">
              <i class="fa-solid fa-phone"></i>
              <span>(+91) 9888725336</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-pill">
              <i class="fa-brands fa-linkedin"></i>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private toastService = inject(ToastService);
  readonly email = 'prince.chand.dev@gmail.com';

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.toastService.show('Email address copied to clipboard!');
    }).catch(() => {
      this.toastService.show(`Direct email: ${this.email}`);
    });
  }
}
