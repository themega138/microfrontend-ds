import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsInputDirective } from '../input/input.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ds-form-field',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="ds-form-field">
      <span class="ds-form-field__label" *ngIf="label">{{ label }}</span>
      <div class="ds-form-field__control">
        <ng-content></ng-content>
      </div>
      <span class="ds-form-field__hint" *ngIf="hint && !error">{{ hint }}</span>
      <span class="ds-form-field__error" *ngIf="error">{{ error }}</span>
    </label>
  `,
  styles: [
    `
    :host {
      display: block;
    }

    .ds-form-field {
      display: grid;
      gap: var(--ds-space-2);
      color: var(--ds-color-text);
    }

    .ds-form-field__label {
      font-size: var(--ds-font-size-2);
      font-weight: 600;
    }

    .ds-form-field__control {
      display: flex;
      align-items: center;
      border: 1px solid var(--ds-color-border);
      border-radius: var(--ds-radius-md);
      padding: 0 var(--ds-space-3);
      background: var(--ds-color-surface);
      transition: border-color var(--ds-motion-fast), box-shadow var(--ds-motion-fast);
    }

    .ds-form-field__control:focus-within {
      border-color: var(--ds-color-focus);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--ds-color-focus) 30%, transparent);
    }

    .ds-form-field__hint {
      font-size: var(--ds-font-size-2);
      color: var(--ds-color-text-muted);
    }

    .ds-form-field__error {
      font-size: var(--ds-font-size-2);
      color: var(--ds-color-danger);
    }

    :host(.ds-form-field--invalid) .ds-form-field__control {
      border-color: var(--ds-color-danger);
    }

    :host(.ds-form-field--disabled) {
      opacity: 0.6;
    }

    :host ::ng-deep .ds-input {
      border: none;
      background: transparent;
      padding: var(--ds-space-3) 0;
      width: 100%;
      color: inherit;
    }

    :host ::ng-deep .ds-input:focus {
      outline: none;
    }
  `
  ]
})
export class DsFormFieldComponent implements AfterContentInit, OnDestroy {
  @Input() label = '';
  @Input() hint = '';
  @Input() error = '';

  @ContentChild(DsInputDirective) input?: DsInputDirective;

  private subscription?: Subscription;

  @HostBinding('class.ds-form-field--invalid')
  get invalidClass(): boolean {
    return !!this.error || !!this.input?.invalid;
  }

  @HostBinding('class.ds-form-field--disabled')
  get disabledClass(): boolean {
    return !!this.input?.disabled;
  }

  ngAfterContentInit(): void {
    if (this.input) {
      this.subscription = this.input.stateChanges.subscribe();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
