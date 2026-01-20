import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { provideDsIcons } from '@ds-angular/icons';
import { dsDefaultIcons } from '@ds-angular/icons';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideHttpClient(), importProvidersFrom(OverlayModule), provideDsIcons(dsDefaultIcons)]
}).catch((err) => console.error(err));
