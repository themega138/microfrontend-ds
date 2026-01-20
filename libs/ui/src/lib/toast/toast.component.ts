import { Component, Inject, InjectionToken } from '@angular/core';

export type ToastVariant = 'success' | 'info' | 'warning' | 'danger';

export interface ToastConfig {
  message: string;
  variant: ToastVariant;
  durationMs?: number;
}

export const DS_TOAST_DATA = new InjectionToken<ToastConfig>('DS_TOAST_DATA');

@Component({
  selector: 'ds-toast',
  standalone: true,
  template: `
    <div class="ds-toast" [class.ds-toast--success]="data.variant === 'success'"
      [class.ds-toast--info]="data.variant === 'info'"
      [class.ds-toast--warning]="data.variant === 'warning'"
      [class.ds-toast--danger]="data.variant === 'danger'"
      role="status"
      aria-live="polite">
      <div class="ds-toast__message">{{ data.message }}</div>
    </div>
  `,
  styles: [
    `
    .ds-toast {
      background: var(--ds-color-surface-raised);
      color: var(--ds-color-text);
      border-radius: var(--ds-radius-md);
      padding: var(--ds-space-3) var(--ds-space-4);
      box-shadow: var(--ds-shadow-md);
      border: 1px solid var(--ds-color-border);
      min-width: 220px;
    }

    .ds-toast__message {
      font-size: var(--ds-font-size-3);
    }

    .ds-toast--success {
      border-color: var(--ds-color-success);
    }

    .ds-toast--info {
      border-color: var(--ds-color-info);
    }

    .ds-toast--warning {
      border-color: var(--ds-color-warning);
    }

    .ds-toast--danger {
      border-color: var(--ds-color-danger);
    }
  `
  ]
})
export class DsToastComponent {
  constructor(@Inject(DS_TOAST_DATA) public data: ToastConfig) {}
}
