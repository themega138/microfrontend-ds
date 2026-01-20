import { Component, HostBinding, Input } from '@angular/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'ghost';
export type DsButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'button[dsButton]',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [
    `
    :host {
      border: none;
      border-radius: var(--ds-radius-md);
      padding: var(--ds-space-2) var(--ds-space-4);
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ds-space-2);
      cursor: pointer;
      transition: background var(--ds-motion-fast), color var(--ds-motion-fast), box-shadow var(--ds-motion-fast);
    }

    :host(.ds-button--primary) {
      background: var(--ds-color-primary);
      color: var(--ds-color-on-primary);
    }

    :host(.ds-button--secondary) {
      background: var(--ds-color-secondary);
      color: var(--ds-color-on-secondary);
    }

    :host(.ds-button--ghost) {
      background: transparent;
      color: var(--ds-color-text);
      border: 1px solid var(--ds-color-border);
    }

    :host(.ds-button--sm) {
      padding: var(--ds-space-1) var(--ds-space-3);
      font-size: var(--ds-font-size-2);
    }

    :host(.ds-button--md) {
      font-size: var(--ds-font-size-3);
    }

    :host(.ds-button--lg) {
      padding: var(--ds-space-3) var(--ds-space-5);
      font-size: var(--ds-font-size-4);
    }

    :host(:focus-visible) {
      outline: 2px solid var(--ds-color-focus);
      outline-offset: 2px;
    }

    :host(.ds-button--loading) {
      opacity: 0.7;
      cursor: progress;
    }

    :host(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `
  ]
})
export class DsButtonDirective {
  @Input() variant: DsButtonVariant = 'primary';
  @Input() size: DsButtonSize = 'md';
  @Input() loading = false;
  @Input() disabled = false;

  @HostBinding('class.ds-button') hostClass = true;

  @HostBinding('class.ds-button--primary')
  get isPrimary(): boolean {
    return this.variant === 'primary';
  }

  @HostBinding('class.ds-button--secondary')
  get isSecondary(): boolean {
    return this.variant === 'secondary';
  }

  @HostBinding('class.ds-button--ghost')
  get isGhost(): boolean {
    return this.variant === 'ghost';
  }

  @HostBinding('class.ds-button--sm')
  get isSmall(): boolean {
    return this.size === 'sm';
  }

  @HostBinding('class.ds-button--md')
  get isMedium(): boolean {
    return this.size === 'md';
  }

  @HostBinding('class.ds-button--lg')
  get isLarge(): boolean {
    return this.size === 'lg';
  }

  @HostBinding('class.ds-button--loading')
  get isLoading(): boolean {
    return this.loading;
  }

  @HostBinding('attr.aria-busy')
  get ariaBusy(): string | null {
    return this.loading ? 'true' : null;
  }

  @HostBinding('disabled')
  get disabledWhileLoading(): boolean {
    return this.loading || this.disabled;
  }
}
