import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly theme = signal<Theme>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme: Theme = savedTheme ? savedTheme : 'dark';
    this.setTheme(initialTheme);
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(newTheme: Theme): void {
    this.theme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
}
