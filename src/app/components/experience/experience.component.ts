import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Career Journey</span>
          <h2 class="section-title">Experience & Education</h2>
        </div>

        <div class="timeline-card">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h3 class="timeline-role">Software Engineer</h3>
            <div class="timeline-company">Anviam Solution Pvt Ltd</div>
            <div class="timeline-period"><i class="fa-regular fa-calendar"></i> Jan 2023 – Aug 2026 (3.8 Years)</div>
            <p class="problem-text">
              Engineered enterprise backend services, scalable Web APIs, AI voice/text workflows, hardware integration modules, and cloud databases using ASP.NET Core, C#, SQL Server, Azure, NestJS, and Angular.
            </p>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <h3 class="timeline-role">B.Tech in Computer Science & Engineering</h3>
            <div class="timeline-company">I.K. Gujral Punjab Technical University</div>
            <div class="timeline-period"><i class="fa-regular fa-calendar"></i> 2019 – 2023 • CGPA: 8.32 / 10</div>
            <p class="problem-text">
              Graduated with Distinction in Computer Science, focusing on Software Architecture, Database Management Systems, Data Structures, and Web Technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent { }
