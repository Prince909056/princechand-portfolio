import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="status-dot"></span> Available for Engineering Opportunities
            </div>
            
            <h1 class="hero-title">
              Solving Complex Problems with <span class="gradient-text">.NET & AI Integration</span>
            </h1>

            <p class="hero-subtitle">
              Results-driven Software Engineer with <strong>{{ yearsOfExperience }} years</strong> of experience building scalable backend architectures, high-performance RESTful APIs, clean code structures, and cutting-edge AI integrations.
            </p>

            <div class="hero-cta">
              <a href="#problems" (click)="scrollTo('problems', $event)" class="btn btn-primary">
                <i class="fa-solid fa-lightbulb"></i> View Problems Solved
              </a>
              <a href="#contact" (click)="scrollTo('contact', $event)" class="btn btn-secondary">
                <i class="fa-solid fa-envelope"></i> Contact Me
              </a>
            </div>

            <!-- Impact Metrics Strip -->
            <div class="hero-metrics">
              <div class="metric-item">
                <span class="metric-value" data-target="90">90%</span>
                <span class="metric-label">Manual Effort Automation</span>
              </div>
              <div class="metric-item">
                <span class="metric-value" data-target="80">80%</span>
                <span class="metric-label">Faster Verification Speed</span>
              </div>
              <div class="metric-item">
                <span class="metric-value" data-target="700">700+</span>
                <span class="metric-label">Employees Payroll Scaled</span>
              </div>
            </div>
          </div>

          <!-- Profile Photo Card -->
          <div class="hero-image-col">
            <div class="profile-card-wrapper">
              <div class="profile-card">
                <img src="assets/profile.jpg" alt="Prince Chand Photo" class="profile-img">
                <a [href]="starOfTheMonthLink" target="_blank" rel="noopener noreferrer" class="profile-floating-badge" style="text-decoration: none; color: inherit;">
                  <i class="fa-solid fa-award" style="color: var(--accent-amber)"></i>
                  <span>Star of the Month Engineer</span>
                  <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.75rem; margin-left: 0.25rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit {
  private el = inject(ElementRef);
  readonly yearsOfExperience = environment.yearsOfExperience;
  readonly starOfTheMonthLink = environment.starOfTheMonthLink;

  ngAfterViewInit(): void {
    this.initCounterObserver();
  }

  scrollTo(targetId: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  private initCounterObserver(): void {
    const metricsElement = this.el.nativeElement.querySelector('.hero-metrics');
    if (!metricsElement) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(metricsElement);
  }

  private animateCounters(): void {
    const counterElements = this.el.nativeElement.querySelectorAll('.metric-value');
    counterElements.forEach((counter: HTMLElement) => {
      const target = +(counter.getAttribute('data-target') || '0');
      const isPlus = counter.textContent?.includes('+');
      const duration = 1500;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + (isPlus ? '+' : '%');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + (isPlus ? '+' : '%');
        }
      }, stepTime);
    });
  }
}
