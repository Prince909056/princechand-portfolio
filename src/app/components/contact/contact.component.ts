import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { environment } from '../../../environments/environment';

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
              <span>{{ email }}</span>
              <i class="fa-solid fa-copy" style="font-size: 0.8rem; margin-left: 0.25rem;"></i>
            </button>

            <a [href]="'tel:' + phone" class="contact-pill">
              <i class="fa-solid fa-phone"></i>
              <span>{{ phone }}</span>
            </a>

            <a [href]="linkedInUrl" target="_blank" rel="noopener noreferrer" class="contact-pill">
              <i class="fa-brands fa-linkedin"></i>
              <span>LinkedIn Profile</span>
              <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem; margin-left: 0.25rem;"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private toastService = inject(ToastService);
  readonly email = environment.emailAddress;
  readonly phone = environment.phoneNumber;
  readonly linkedInUrl = environment.linkedInUrl;

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.toastService.show('Email address copied to clipboard!');
    }).catch(() => {
      this.toastService.show(`Direct email: ${this.email}`);
    });
  }
}

