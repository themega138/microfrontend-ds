import { Component } from '@angular/core';

@Component({
  selector: 'ds-card',
  standalone: true,
  template: `
    <div class="ds-card">
      <div class="ds-card__header">
        <ng-content select="[ds-card-header]"></ng-content>
      </div>
      <div class="ds-card__body">
        <ng-content></ng-content>
      </div>
      <div class="ds-card__footer">
        <ng-content select="[ds-card-footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
    .ds-card {
      background: var(--ds-color-surface-raised);
      border: 1px solid var(--ds-color-border);
      border-radius: var(--ds-radius-lg);
      padding: var(--ds-space-5);
      display: grid;
      gap: var(--ds-space-4);
      box-shadow: var(--ds-shadow-sm);
    }

    .ds-card__header:empty,
    .ds-card__footer:empty {
      display: none;
    }

    .ds-card__footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--ds-space-3);
    }
  `
  ]
})
export class DsCardComponent {}
