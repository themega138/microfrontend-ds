import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DsButtonDirective, DsCardComponent, DsFormFieldComponent, DsIconComponent, DsInputDirective, ToastService } from '@ds-angular/ui';

@Component({
  selector: 'ds-root',
  standalone: true,
  imports: [CommonModule, DsButtonDirective, DsCardComponent, DsFormFieldComponent, DsInputDirective, DsIconComponent],
  template: `
    <div class="showroom">
      <header class="showroom-section">
        <h1 class="ds-title">DS Angular Showroom</h1>
        <p class="ds-body">A minimal design system powered by tokens and standalone components.</p>
        <div class="showroom-row">
          <button dsButton variant="secondary" size="sm" (click)="toggleTheme()">
            Switch to {{ theme === 'light' ? 'dark' : 'light' }} theme
          </button>
          <button dsButton variant="ghost" size="sm" (click)="notify()">
            <ds-icon name="spark" size="sm"></ds-icon>
            Show toast
          </button>
        </div>
      </header>

      <section class="showroom-section">
        <h2 class="ds-heading">Buttons</h2>
        <div class="showroom-row">
          <button dsButton variant="primary">Primary</button>
          <button dsButton variant="secondary">Secondary</button>
          <button dsButton variant="ghost">Ghost</button>
          <button dsButton variant="primary" size="lg" [loading]="true">Loading</button>
          <button dsButton variant="secondary" size="sm" disabled>Disabled</button>
        </div>
      </section>

      <section class="showroom-section">
        <h2 class="ds-heading">Cards</h2>
        <ds-card>
          <div ds-card-header>
            <h3 class="ds-heading">Card Title</h3>
            <p class="ds-body">Supporting description goes here.</p>
          </div>
          <div>
            <p class="ds-body">
              Cards use slots for header, body, and footer. They pull from surface tokens for background and elevation.
            </p>
          </div>
          <div ds-card-footer class="showroom-row">
            <button dsButton variant="secondary" size="sm">Secondary</button>
            <button dsButton variant="primary" size="sm">Primary</button>
          </div>
        </ds-card>
      </section>

      <section class="showroom-section">
        <h2 class="ds-heading">Form Field</h2>
        <ds-form-field label="Email" hint="We will never share your email." [error]="showError ? 'Email is required.' : ''">
          <input dsInput type="email" placeholder="name@company.com" [invalid]="showError" />
        </ds-form-field>
        <div class="showroom-row">
          <button dsButton variant="secondary" size="sm" (click)="toggleError()">
            Toggle error
          </button>
        </div>
      </section>

      <section class="showroom-section">
        <h2 class="ds-heading">Icons</h2>
        <div class="showroom-row">
          <ds-icon name="check" size="md"></ds-icon>
          <ds-icon name="info" size="md"></ds-icon>
          <ds-icon name="warning" size="md"></ds-icon>
          <ds-icon name="danger" size="md"></ds-icon>
        </div>
      </section>
    </div>
  `
})
export class AppComponent {
  theme: 'light' | 'dark' = 'light';
  showError = false;

  constructor(private readonly toastService: ToastService) {}

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleError(): void {
    this.showError = !this.showError;
  }

  notify(): void {
    this.toastService.notify({
      message: 'Design system toast triggered!',
      variant: 'success',
      durationMs: 2800
    });
  }
}
