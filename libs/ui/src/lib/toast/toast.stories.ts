import { Component, importProvidersFrom } from '@angular/core';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { OverlayModule } from '@angular/cdk/overlay';
import { DsButtonDirective } from '../button/button.directive';
import { ToastService } from './toast.service';

@Component({
  selector: 'ds-toast-story',
  standalone: true,
  imports: [DsButtonDirective],
  template: `
    <button dsButton variant="primary" (click)="notify()">Show toast</button>
  `
})
class ToastStoryComponent {
  constructor(private readonly toastService: ToastService) {}

  notify(): void {
    this.toastService.notify({
      message: 'Toast from Storybook',
      variant: 'info',
      durationMs: 2500
    });
  }
}

const meta: Meta<ToastStoryComponent> = {
  title: 'UI/Toast',
  component: ToastStoryComponent,
  decorators: [applicationConfig({ providers: [importProvidersFrom(OverlayModule)] })]
};

export default meta;

export const Default: StoryObj<ToastStoryComponent> = {};
