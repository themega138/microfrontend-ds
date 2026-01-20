import { Component, HostBinding, Input, OnChanges } from '@angular/core';
import { DsIconRegistry } from '@ds-angular/icons';
import { SafeHtml } from '@angular/platform-browser';

export type DsIconSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-icon',
  standalone: true,
  template: `
    <span class="ds-icon" [innerHTML]="svg"></span>
  `,
  styles: [
    `
    :host {
      display: inline-flex;
      line-height: 1;
      color: inherit;
    }

    .ds-icon {
      display: inline-flex;
      width: 1em;
      height: 1em;
    }

    :host(.ds-icon--sm) {
      font-size: 0.875rem;
    }

    :host(.ds-icon--md) {
      font-size: 1.125rem;
    }

    :host(.ds-icon--lg) {
      font-size: 1.5rem;
    }
  `
  ]
})
export class DsIconComponent implements OnChanges {
  @Input() name = '';
  @Input() size: DsIconSize = 'md';
  @Input() label = '';

  svg: SafeHtml | null = null;

  @HostBinding('attr.role')
  get role(): string {
    return this.label ? 'img' : 'presentation';
  }

  @HostBinding('attr.aria-label')
  get ariaLabel(): string | null {
    return this.label || null;
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): string | null {
    return this.label ? null : 'true';
  }

  @HostBinding('class.ds-icon--sm')
  get isSmall(): boolean {
    return this.size === 'sm';
  }

  @HostBinding('class.ds-icon--md')
  get isMedium(): boolean {
    return this.size === 'md';
  }

  @HostBinding('class.ds-icon--lg')
  get isLarge(): boolean {
    return this.size === 'lg';
  }

  constructor(private readonly registry: DsIconRegistry) {}

  ngOnChanges(): void {
    this.svg = this.registry.getIcon(this.name);
  }
}
