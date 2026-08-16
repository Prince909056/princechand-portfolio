import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProblemItem {
  id: string;
  category: 'ai' | 'perf' | 'biotech' | 'enterprise';
  icon: string;
  impactBadge: string;
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
}

@Component({
  selector: 'app-problems-solved',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section" id="problems">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Engineering Impact</span>
          <h2 class="section-title">Key Technical Problems I Have Solved</h2>
          <p class="section-description">
            A showcase of real-world operational bottlenecks, hardware challenges, and manual process complexities resolved through modern backend architecture and AI intelligence.
          </p>
        </div>

        <!-- Filter Category Tabs -->
        <div class="filter-container">
          <button 
            class="filter-pill" 
            [class.active]="activeFilter() === 'all'" 
            (click)="setFilter('all')">
            All Solutions
          </button>
          <button 
            class="filter-pill" 
            [class.active]="activeFilter() === 'ai'" 
            (click)="setFilter('ai')">
            AI & Voice Systems
          </button>
          <button 
            class="filter-pill" 
            [class.active]="activeFilter() === 'perf'" 
            (click)="setFilter('perf')">
            Performance & DB
          </button>
          <button 
            class="filter-pill" 
            [class.active]="activeFilter() === 'biotech'" 
            (click)="setFilter('biotech')">
            Biotech & Hardware
          </button>
          <button 
            class="filter-pill" 
            [class.active]="activeFilter() === 'enterprise'" 
            (click)="setFilter('enterprise')">
            Enterprise Payroll
          </button>
        </div>

        <!-- Problems Grid -->
        <div class="problems-grid">
          @for (problem of filteredProblems(); track problem.id) {
            <div class="problem-card" [attr.data-category]="problem.category">
              <div>
                <div class="problem-header">
                  <div class="problem-icon-wrapper">
                    <i class="fa-solid" [ngClass]="problem.icon"></i>
                  </div>
                  <span class="impact-badge">{{ problem.impactBadge }}</span>
                </div>

                <h3 class="problem-title">{{ problem.title }}</h3>

                <div class="problem-detail-block">
                  <span class="detail-label">The Challenge</span>
                  <p class="problem-text">{{ problem.challenge }}</p>
                </div>

                <div class="problem-detail-block">
                  <span class="detail-label">Engineered Solution</span>
                  <p class="solution-text">{{ problem.solution }}</p>
                </div>
              </div>

              <div class="tech-pills">
                @for (tech of problem.techStack; track tech) {
                  <span class="tech-pill">{{ tech }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProblemsSolvedComponent {
  readonly activeFilter = signal<string>('all');

  readonly problems: ProblemItem[] = [
    {
      id: 'p1',
      category: 'ai',
      icon: 'fa-microphone-lines',
      impactBadge: '70-80% Less Scheduling Work',
      title: 'Latency & Overhead in Provider-Patient Healthcare Communication',
      challenge: 'Traditional appointment booking created friction and delays in consultations, burdening staff with repetitive manual scheduling tasks.',
      solution: 'Architected full-stack modules integrated with ElevenLabs AI APIs for real-time voice-to-voice dialogue between patients and doctors, backed by secure OAuth 2.0 and Stripe payment processing.',
      techStack: ['ASP.NET Core', 'ElevenLabs AI', 'Angular 19', 'Stripe', 'SQL Server']
    },
    {
      id: 'p2',
      category: 'ai',
      icon: 'fa-brain',
      impactBadge: '80% Faster Verification',
      title: 'Manual Property Content Creation & Slow Listing Inspection',
      challenge: 'Manual property verification took days, while traditional listing search suffered low relevance accuracy.',
      solution: 'Built an OpenAI GPT-4o + RAG query engine achieving ~90% accuracy, combined with automated AI property image/video verification workflows and OAuth authentication.',
      techStack: ['OpenAI GPT-4o', 'RAG Architecture', 'NestJS', 'Python FastAPI', 'AWS EC2/S3']
    },
    {
      id: 'p3',
      category: 'perf',
      icon: 'fa-utensils',
      impactBadge: '90% Menu Effort Cut',
      title: 'Manual POS Menu Synchronization & Slow Website Rendering',
      challenge: 'Multi-location restaurants spent massive manual hours updating digital menus across platforms, leading to data drift and slow page loads.',
      solution: 'Integrated Toast POS API for automated real-time menu synchronization and refactored SQL stored procedures/Dapper queries to offload unnecessary frontend rendering.',
      techStack: ['ASP.NET Core API', 'Toast POS Integration', 'C#', 'Dapper', 'SQL Optimization']
    },
    {
      id: 'p4',
      category: 'biotech',
      icon: 'fa-dna',
      impactBadge: 'Hardware-Cloud Streamlined',
      title: 'Bridging Lab Hardware Devices with Web APIs for Disease Diagnostics',
      challenge: 'Translating scientist-defined business logic and raw hardware signals into reliable disease identification workflows was prone to communication bottlenecks.',
      solution: 'Developed Web API interfacing with Laser and DAQ-205 laboratory hardware devices, executing complex protein sequence analysis algorithms with high throughput.',
      techStack: ['ASP.NET Core Web API', 'Angular 17', 'Hardware DAQ-205', 'Protein Analysis', 'Azure']
    },
    {
      id: 'p5',
      category: 'enterprise',
      icon: 'fa-calculator',
      impactBadge: '60% Manual Payroll Cut',
      title: 'Complex Manual Salary Processing & Financial Discrepancies',
      challenge: 'Calculating monthly salaries, tax withholdings, and trial balances for 700+ staff across departments was manual and error-prone.',
      solution: 'Architected a 1-click salary processing system with single/double-entry financial modules generating instant Balance Sheet, Trial Balance, and department reports.',
      techStack: ['ASP.NET Core MVC', 'EF Core', 'LINQ', 'MySQL', 'Bootstrap']
    },
    {
      id: 'p6',
      category: 'perf',
      icon: 'fa-shield-halved',
      impactBadge: 'Zero Config Errors',
      title: 'APNs Push Notification Certificate Configuration Failures',
      challenge: 'Parsing and validating Apple Push Notification (.p8, .p12, .pem) certificate metadata manually led to frequent push delivery downtime.',
      solution: 'Engineered a dedicated C# backend utility that automatically reads, parses, validates expiration, and extracts metadata from raw Apple certificate files.',
      techStack: ['C#', 'ASP.NET Core API', 'Apple Certificates', 'Security Parsing']
    }
  ];

  readonly filteredProblems = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.problems;
    }
    return this.problems.filter(item => item.category === filter);
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
