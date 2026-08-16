import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="#hero" (click)="onNavClick($event, 'hero')" class="brand-logo">
          <img src="assets/profile.jpg" alt="Prince Chand Profile" class="brand-avatar">
          <span>Prince<span class="gradient-text">.Chand</span></span>
        </a>

        <ul class="nav-links" [class.active]="mobileMenuOpen()">
          <li><a href="#hero" (click)="onNavClick($event, 'hero')" class="nav-link active">Home</a></li>
          <li><a href="#problems" (click)="onNavClick($event, 'problems')" class="nav-link">Problems Solved</a></li>
          <li><a href="#skills" (click)="onNavClick($event, 'skills')" class="nav-link">Skills</a></li>
          <li><a href="#achievements" (click)="onNavClick($event, 'achievements')" class="nav-link">Achievements</a></li>
          <li><a href="#experience" (click)="onNavClick($event, 'experience')" class="nav-link">Experience</a></li>
          <li><a href="#contact" (click)="onNavClick($event, 'contact')" class="nav-link">Contact</a></li>
          <li class="mobile-cta-item">
            <a href="#contact" (click)="onNavClick($event, 'contact')" class="btn btn-primary mobile-drawer-btn">
              <i class="fa-solid fa-paper-plane"></i> Get in Touch
            </a>
          </li>
        </ul>

        <div class="nav-actions">
          <button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle Light/Dark Theme">
            <i class="fa-solid fa-moon"></i>
            <i class="fa-solid fa-sun"></i>
          </button>
          <a href="#contact" (click)="onNavClick($event, 'contact')" class="btn btn-primary nav-cta">Get in Touch</a>
          <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle Menu">
            <i class="fa-solid" [class.fa-bars]="!mobileMenuOpen()" [class.fa-xmark]="mobileMenuOpen()"></i>
          </button>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  readonly mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(state => !state);
  }

  onNavClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.mobileMenuOpen.set(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
