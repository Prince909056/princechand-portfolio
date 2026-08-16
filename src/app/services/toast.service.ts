import { Injectable, signal } from '@angular/core';

export interface ToastState {
  message: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  readonly toastState = signal<ToastState>({ message: '', visible: false });
  private timeoutId: any;

  show(message: string, duration = 3000): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    
    this.toastState.set({ message, visible: true });

    this.timeoutId = setTimeout(() => {
      this.toastState.set({ message: '', visible: false });
    }, duration);
  }
}
