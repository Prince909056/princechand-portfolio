import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProblemsSolvedComponent } from './components/problems-solved/problems-solved.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProblemsSolvedComponent,
    SkillsComponent,
    AchievementsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    
    <main>
      <app-hero></app-hero>
      <app-problems-solved></app-problems-solved>
      <app-skills></app-skills>
      <app-achievements></app-achievements>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>

    <app-footer></app-footer>

    <!-- Toast Notification -->
    <div class="toast" [class.show]="toastState().visible">
      <i class="fa-solid fa-circle-check"></i>
      <span>{{ toastState().message }}</span>
    </div>
  `
})
export class AppComponent {
  private toastService = inject(ToastService);
  readonly toastState = this.toastService.toastState;
}
