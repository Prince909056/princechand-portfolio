import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <p>© 2026 Prince Chand. All rights reserved. Crafted with clean Angular code & modern aesthetics.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
