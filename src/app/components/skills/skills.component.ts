import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Technical Proficiency</span>
          <h2 class="section-title">Core Skills & Engineering Stack</h2>
          <p class="section-description">
            Built on solid object-oriented fundamentals, clean architecture principles, and modern cloud ecosystem tools.
          </p>
        </div>

        <div class="skills-grid">
          <div class="skill-card">
            <h3 class="skill-card-title">
              <i class="fa-solid fa-code"></i> Languages & Frameworks
            </h3>
            <div class="skill-tags">
              <span class="skill-badge">C#</span>
              <span class="skill-badge">ASP.NET Core</span>
              <span class="skill-badge">ASP.NET Web API</span>
              <span class="skill-badge">ASP.NET Core MVC</span>
              <span class="skill-badge">Angular (17-19)</span>
              <span class="skill-badge">NestJS</span>
              <span class="skill-badge">Next.js</span>
              <span class="skill-badge">Python (FastAPI)</span>
              <span class="skill-badge">SQL & LINQ</span>
            </div>
          </div>

          <div class="skill-card">
            <h3 class="skill-card-title">
              <i class="fa-solid fa-cubes"></i> Architecture & Patterns
            </h3>
            <div class="skill-tags">
              <span class="skill-badge">Clean Architecture</span>
              <span class="skill-badge">N-Layer Architecture</span>
              <span class="skill-badge">SOLID Principles</span>
              <span class="skill-badge">Repository Pattern</span>
              <span class="skill-badge">Unit of Work</span>
              <span class="skill-badge">CQRS</span>
              <span class="skill-badge">RESTful API Design</span>
              <span class="skill-badge">DRY Principles</span>
            </div>
          </div>

          <div class="skill-card">
            <h3 class="skill-card-title">
              <i class="fa-solid fa-robot"></i> AI & Integrations
            </h3>
            <div class="skill-tags">
              <span class="skill-badge">OpenAI GPT-4o</span>
              <span class="skill-badge">RAG Systems</span>
              <span class="skill-badge">ElevenLabs AI (Voice)</span>
              <span class="skill-badge">OAuth 2.0 / JWT</span>
              <span class="skill-badge">Stripe Payment Gateway</span>
              <span class="skill-badge">Toast POS API</span>
              <span class="skill-badge">Hardware DAQ Devices</span>
            </div>
          </div>

          <div class="skill-card">
            <h3 class="skill-card-title">
              <i class="fa-solid fa-cloud"></i> Cloud, DB & DevOps
            </h3>
            <div class="skill-tags">
              <span class="skill-badge">Azure App Service</span>
              <span class="skill-badge">Azure SQL Database</span>
              <span class="skill-badge">AWS (EC2, S3, SES)</span>
              <span class="skill-badge">SQL Server</span>
              <span class="skill-badge">PostgreSQL</span>
              <span class="skill-badge">Dapper & EF Core</span>
              <span class="skill-badge">Azure DevOps & Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {}
