import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
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
          <li>
            <a href="#hero" (click)="onNavClick($event, 'hero')" class="nav-link" [class.active]="activeSection() === 'hero'">
              Home
            </a>
          </li>
          <li>
            <a href="#problems" (click)="onNavClick($event, 'problems')" class="nav-link" [class.active]="activeSection() === 'problems'">
              Problems Solved
            </a>
          </li>
          <li>
            <a href="#skills" (click)="onNavClick($event, 'skills')" class="nav-link" [class.active]="activeSection() === 'skills'">
              Skills
            </a>
          </li>
          <li>
            <a href="#achievements" (click)="onNavClick($event, 'achievements')" class="nav-link" [class.active]="activeSection() === 'achievements'">
              Achievements
            </a>
          </li>
          <li>
            <a href="#experience" (click)="onNavClick($event, 'experience')" class="nav-link" [class.active]="activeSection() === 'experience'">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" (click)="onNavClick($event, 'contact')" class="nav-link" [class.active]="activeSection() === 'contact'">
              Contact
            </a>
          </li>
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
export class NavbarComponent implements OnInit, OnDestroy {
  readonly themeService = inject(ThemeService);
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');

  private scrollListener: any;

  ngOnInit(): void {
    this.initScrollHighlighter();
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(state => !state);
  }

  onNavClick(event: Event, targetId: string): void {
    event.preventDefault();
    this.mobileMenuOpen.set(false);
    this.activeSection.set(targetId);
    
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

  private initScrollHighlighter(): void {
    const sections = ['hero', 'problems', 'skills', 'achievements', 'experience', 'contact'];
    
    this.scrollListener = () => {
      const scrollY = window.pageYOffset;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionHeight = element.offsetHeight;
          const sectionTop = element.offsetTop - 120;
          
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            this.activeSection.set(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }
}
