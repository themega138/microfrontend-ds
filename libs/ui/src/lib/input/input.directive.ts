import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

@Directive({
  selector: 'input[dsInput], textarea[dsInput]',
  standalone: true
})
export class DsInputDirective implements OnInit, OnDestroy {
  private readonly stateChangesSubject = new Subject<void>();
  readonly stateChanges = this.stateChangesSubject.asObservable();

  focused = false;
  disabled = false;
  invalid = false;

  @HostBinding('class.ds-input') hostClass = true;

  @HostBinding('class.ds-input--focused')
  get focusedClass(): boolean {
    return this.focused;
  }

  @HostBinding('class.ds-input--disabled')
  get disabledClass(): boolean {
    return this.disabled;
  }

  @HostBinding('class.ds-input--invalid')
  get invalidClass(): boolean {
    return this.invalid;
  }

  @HostBinding('attr.aria-invalid')
  get ariaInvalid(): string | null {
    return this.invalid ? 'true' : null;
  }

  @Input()
  set disabled(value: boolean) {
    this.disabled = value;
    const element = this.elementRef.nativeElement as HTMLInputElement | HTMLTextAreaElement;
    element.disabled = this.disabled;
    this.stateChangesSubject.next();
  }

  @Input()
  set invalid(value: boolean) {
    this.invalid = value;
    this.stateChangesSubject.next();
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>, private readonly focusMonitor: FocusMonitor) {}

  ngOnInit(): void {
    this.focusMonitor.monitor(this.elementRef, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChangesSubject.next();
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.stateChangesSubject.complete();
  }
}
