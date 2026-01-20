import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DS_TOAST_DATA, DsToastComponent, ToastConfig } from './toast.component';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private readonly overlay: Overlay, private readonly injector: Injector) {}

  notify(config: ToastConfig): void {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .top('24px')
        .right('24px'),
      panelClass: ['ds-toast-panel'],
      hasBackdrop: false
    });

    const injector = Injector.create({
      providers: [{ provide: DS_TOAST_DATA, useValue: config }],
      parent: this.injector
    });

    overlayRef.attach(new ComponentPortal(DsToastComponent, null, injector));

    const duration = config.durationMs ?? 3000;
    setTimeout(() => overlayRef.dispose(), duration);
  }
}
