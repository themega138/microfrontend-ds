import { ENVIRONMENT_INITIALIZER, Injectable, makeEnvironmentProviders } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface DsIconDefinition {
  name: string;
  svg: string;
}

@Injectable({ providedIn: 'root' })
export class DsIconRegistry {
  private readonly icons = new Map<string, SafeHtml>();

  constructor(private readonly sanitizer: DomSanitizer) {}

  registerIcons(definitions: DsIconDefinition[]): void {
    definitions.forEach((definition) => {
      this.icons.set(definition.name, this.sanitizer.bypassSecurityTrustHtml(definition.svg));
    });
  }

  getIcon(name: string): SafeHtml | null {
    return this.icons.get(name) ?? null;
  }
}

export function provideDsIcons(definitions: DsIconDefinition[]) {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: (registry: DsIconRegistry) => () => registry.registerIcons(definitions),
      deps: [DsIconRegistry]
    }
  ]);
}
