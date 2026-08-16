import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="achievements">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Recognition & Growth</span>
          <h2 class="section-title">Honors & Certifications</h2>
        </div>

        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-icon">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div>
              <h3 class="achievement-title">Star of the Month</h3>
              <div class="achievement-date">June 2025 • Anviam Solution Pvt Ltd</div>
              <p class="achievement-desc">Awarded for consistently exceeding performance expectations, solving complex engineering bottlenecks, and delivering top-tier solutions.</p>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <div>
              <h3 class="achievement-title">Rising Star Award</h3>
              <div class="achievement-date">Aug 2023 & Jan 2024 • Anviam Solution Pvt Ltd</div>
              <p class="achievement-desc">Recognized twice for outstanding technical performance, rapid problem resolution, and team dedication.</p>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">
              <i class="fa-solid fa-certificate"></i>
            </div>
            <div>
              <h3 class="achievement-title">"Clean Code" Certification</h3>
              <div class="achievement-date">May 2025 • Udemy</div>
              <p class="achievement-desc">Mastered code refactoring, maintainability, architectural design patterns, and writing production-ready robust code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AchievementsComponent {}
