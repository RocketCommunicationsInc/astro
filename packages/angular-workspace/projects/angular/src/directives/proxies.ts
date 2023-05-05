/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@astrouxds/astro-web-components';




export declare interface RuxAccordion extends Components.RuxAccordion {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'disallowMultiple']
})
@Component({
  selector: 'rux-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'disallowMultiple']
})
export class RuxAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxAccordionItem extends Components.RuxAccordionItem {
  /**
   * Fired when an accordion-item has expanded 
   */
  ruxexpanded: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an accordion-item has collapsed 
   */
  ruxcollapsed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'expanded']
})
@Component({
  selector: 'rux-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'expanded']
})
export class RuxAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxexpanded', 'ruxcollapsed']);
  }
}


export declare interface RuxBreadcrumb extends Components.RuxBreadcrumb {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxBreadcrumbItem extends Components.RuxBreadcrumbItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href']
})
@Component({
  selector: 'rux-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href']
})
export class RuxBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxButton extends Components.RuxButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['borderless', 'disabled', 'icon', 'iconOnly', 'secondary', 'size', 'type']
})
@Component({
  selector: 'rux-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['borderless', 'disabled', 'icon', 'iconOnly', 'secondary', 'size', 'type']
})
export class RuxButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxButtonGroup extends Components.RuxButtonGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hAlign']
})
@Component({
  selector: 'rux-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hAlign']
})
export class RuxButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxCard extends Components.RuxCard {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxCheckbox extends Components.RuxCheckbox {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxinput: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has gained focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) 
   */
  ruxfocus: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'helpText', 'indeterminate', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'helpText', 'indeterminate', 'label', 'name', 'value']
})
export class RuxCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxinput', 'ruxfocus', 'ruxblur']);
  }
}


export declare interface RuxCheckboxGroup extends Components.RuxCheckboxGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'required']
})
@Component({
  selector: 'rux-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'required']
})
export class RuxCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxClassificationMarking extends Components.RuxClassificationMarking {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['classification', 'label', 'tag']
})
@Component({
  selector: 'rux-classification-marking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['classification', 'label', 'tag']
})
export class RuxClassificationMarking {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxClock extends Components.RuxClock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['aos', 'dateIn', 'hideDate', 'hideLabels', 'hideTimezone', 'los', 'small', 'static', 'timezone']
})
@Component({
  selector: 'rux-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['aos', 'dateIn', 'hideDate', 'hideLabels', 'hideTimezone', 'los', 'small', 'static', 'timezone']
})
export class RuxClock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxContainer extends Components.RuxContainer {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxDatetime extends Components.RuxDatetime {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['date', 'day', 'era', 'hour', 'hour12', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
@Component({
  selector: 'rux-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['date', 'day', 'era', 'hour', 'hour12', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
export class RuxDatetime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxDialog extends Components.RuxDialog {
  /**
   * Event that is fired when dialog opens 
   */
  ruxdialogopened: EventEmitter<CustomEvent<void>>;
  /**
   * Event that is fired when dialog closes. If dialog is closed by clicking on the default confirm or deny buttons (when no footer slot is provided), then true or false will be emitted respectively on the event.detail. 
   */
  ruxdialogclosed: EventEmitter<CustomEvent<boolean | null>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clickToClose', 'confirmText', 'denyText', 'header', 'message', 'open']
})
@Component({
  selector: 'rux-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickToClose', 'confirmText', 'denyText', 'header', 'message', 'open']
})
export class RuxDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxdialogopened', 'ruxdialogclosed']);
  }
}


export declare interface RuxGlobalStatusBar extends Components.RuxGlobalStatusBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appDomain', 'appName', 'appState', 'appStateColor', 'appVersion', 'includeIcon', 'menuIcon', 'username']
})
@Component({
  selector: 'rux-global-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appDomain', 'appName', 'appState', 'appStateColor', 'appVersion', 'includeIcon', 'menuIcon', 'username']
})
export class RuxGlobalStatusBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIcon extends Components.RuxIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'size']
})
@Component({
  selector: 'rux-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'size']
})
export class RuxIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIcon360 extends Components.RuxIcon360 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-360',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIcon360 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIcon3dRotation extends Components.RuxIcon3dRotation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-3d-rotation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIcon3dRotation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIcon4k extends Components.RuxIcon4k {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-4k',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIcon4k {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAcUnit extends Components.RuxIconAcUnit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-ac-unit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAcUnit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessAlarms extends Components.RuxIconAccessAlarms {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-access-alarms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessAlarms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessTime extends Components.RuxIconAccessTime {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-access-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessTime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessibility extends Components.RuxIconAccessibility {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-accessibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessibility {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessibilityNew extends Components.RuxIconAccessibilityNew {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-accessibility-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessibilityNew {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessible extends Components.RuxIconAccessible {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-accessible',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessible {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccessibleForward extends Components.RuxIconAccessibleForward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-accessible-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccessibleForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccountBalance extends Components.RuxIconAccountBalance {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-account-balance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccountBalance {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccountBalanceWallet extends Components.RuxIconAccountBalanceWallet {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-account-balance-wallet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccountBalanceWallet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccountBox extends Components.RuxIconAccountBox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-account-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccountBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAccountCircle extends Components.RuxIconAccountCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-account-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAccountCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAdb extends Components.RuxIconAdb {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-adb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAdb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAdd extends Components.RuxIconAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddAPhoto extends Components.RuxIconAddAPhoto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-a-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddAPhoto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddAlarm extends Components.RuxIconAddAlarm {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-alarm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddAlarm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddAlert extends Components.RuxIconAddAlert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddBox extends Components.RuxIconAddBox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddCircle extends Components.RuxIconAddCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddCircleOutline extends Components.RuxIconAddCircleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-circle-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddCircleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddComment extends Components.RuxIconAddComment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddLocation extends Components.RuxIconAddLocation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddPhotoAlternate extends Components.RuxIconAddPhotoAlternate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-photo-alternate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddPhotoAlternate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddShoppingCart extends Components.RuxIconAddShoppingCart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddShoppingCart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddToHomeScreen extends Components.RuxIconAddToHomeScreen {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-to-home-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddToHomeScreen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddToPhotos extends Components.RuxIconAddToPhotos {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-to-photos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddToPhotos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAddToQueue extends Components.RuxIconAddToQueue {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-add-to-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAddToQueue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAdjust extends Components.RuxIconAdjust {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-adjust',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAdjust {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatFlat extends Components.RuxIconAirlineSeatFlat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-flat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatFlat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatFlatAngled extends Components.RuxIconAirlineSeatFlatAngled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-flat-angled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatFlatAngled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatIndividualSuite extends Components.RuxIconAirlineSeatIndividualSuite {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-individual-suite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatIndividualSuite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatLegroomExtra extends Components.RuxIconAirlineSeatLegroomExtra {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-legroom-extra',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatLegroomExtra {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatLegroomNormal extends Components.RuxIconAirlineSeatLegroomNormal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-legroom-normal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatLegroomNormal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatLegroomReduced extends Components.RuxIconAirlineSeatLegroomReduced {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-legroom-reduced',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatLegroomReduced {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatReclineExtra extends Components.RuxIconAirlineSeatReclineExtra {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-recline-extra',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatReclineExtra {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirlineSeatReclineNormal extends Components.RuxIconAirlineSeatReclineNormal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airline-seat-recline-normal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirlineSeatReclineNormal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirplanemodeActive extends Components.RuxIconAirplanemodeActive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airplanemode-active',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirplanemodeActive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirplanemodeInactive extends Components.RuxIconAirplanemodeInactive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airplanemode-inactive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirplanemodeInactive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirplay extends Components.RuxIconAirplay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airplay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirplay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAirportShuttle extends Components.RuxIconAirportShuttle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-airport-shuttle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAirportShuttle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlarm extends Components.RuxIconAlarm {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-alarm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlarm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlarmAdd extends Components.RuxIconAlarmAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-alarm-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlarmAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlarmOff extends Components.RuxIconAlarmOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-alarm-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlarmOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlarmOn extends Components.RuxIconAlarmOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-alarm-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlarmOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlbum extends Components.RuxIconAlbum {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-album',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlbum {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAllInbox extends Components.RuxIconAllInbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-all-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAllInbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAllInclusive extends Components.RuxIconAllInclusive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-all-inclusive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAllInclusive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAllOut extends Components.RuxIconAllOut {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-all-out',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAllOut {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAlternateEmail extends Components.RuxIconAlternateEmail {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-alternate-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAlternateEmail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAltitude extends Components.RuxIconAltitude {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-altitude',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAltitude {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAndroid extends Components.RuxIconAndroid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-android',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAndroid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAnnouncement extends Components.RuxIconAnnouncement {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-announcement',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAnnouncement {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAntenna extends Components.RuxIconAntenna {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-antenna',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAntenna {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAntennaOff extends Components.RuxIconAntennaOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-antenna-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAntennaOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAntennaReceive extends Components.RuxIconAntennaReceive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-antenna-receive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAntennaReceive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAntennaTransmit extends Components.RuxIconAntennaTransmit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-antenna-transmit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAntennaTransmit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconApps extends Components.RuxIconApps {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-apps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconApps {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArchive extends Components.RuxIconArchive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-archive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArchive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowBack extends Components.RuxIconArrowBack {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-back',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowBack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowBackIos extends Components.RuxIconArrowBackIos {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-back-ios',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowBackIos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowDownward extends Components.RuxIconArrowDownward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-downward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowDownward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowDropDown extends Components.RuxIconArrowDropDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-drop-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowDropDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowDropDownCircle extends Components.RuxIconArrowDropDownCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-drop-down-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowDropDownCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowDropUp extends Components.RuxIconArrowDropUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-drop-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowDropUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowForward extends Components.RuxIconArrowForward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowForwardIos extends Components.RuxIconArrowForwardIos {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-forward-ios',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowForwardIos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowLeft extends Components.RuxIconArrowLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowRight extends Components.RuxIconArrowRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowRightAlt extends Components.RuxIconArrowRightAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-right-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowRightAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArrowUpward extends Components.RuxIconArrowUpward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-arrow-upward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArrowUpward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconArtTrack extends Components.RuxIconArtTrack {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-art-track',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconArtTrack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAspectRatio extends Components.RuxIconAspectRatio {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-aspect-ratio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAspectRatio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssessment extends Components.RuxIconAssessment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assessment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssessment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignment extends Components.RuxIconAssignment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignmentFind extends Components.RuxIconAssignmentFind {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment-find',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignmentFind {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignmentLate extends Components.RuxIconAssignmentLate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment-late',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignmentLate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignmentReturn extends Components.RuxIconAssignmentReturn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment-return',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignmentReturn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignmentReturned extends Components.RuxIconAssignmentReturned {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment-returned',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignmentReturned {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssignmentTurnedIn extends Components.RuxIconAssignmentTurnedIn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assignment-turned-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssignmentTurnedIn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssistant extends Components.RuxIconAssistant {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assistant',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssistant {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAssistantPhoto extends Components.RuxIconAssistantPhoto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-assistant-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAssistantPhoto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAttachFile extends Components.RuxIconAttachFile {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-attach-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAttachFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAttachMoney extends Components.RuxIconAttachMoney {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-attach-money',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAttachMoney {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAttachment extends Components.RuxIconAttachment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-attachment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAttachment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAudiotrack extends Components.RuxIconAudiotrack {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-audiotrack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAudiotrack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAutorenew extends Components.RuxIconAutorenew {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-autorenew',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAutorenew {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconAvTimer extends Components.RuxIconAvTimer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-av-timer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconAvTimer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBackspace extends Components.RuxIconBackspace {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-backspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBackspace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBackup extends Components.RuxIconBackup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-backup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBackup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBallot extends Components.RuxIconBallot {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-ballot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBallot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBarChart extends Components.RuxIconBarChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBarChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery20 extends Components.RuxIconBattery20 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-20',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery20 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery30 extends Components.RuxIconBattery30 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-30',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery30 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery50 extends Components.RuxIconBattery50 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-50',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery50 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery60 extends Components.RuxIconBattery60 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-60',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery60 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery80 extends Components.RuxIconBattery80 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-80',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery80 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBattery90 extends Components.RuxIconBattery90 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-90',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBattery90 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryAlert extends Components.RuxIconBatteryAlert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging20 extends Components.RuxIconBatteryCharging20 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-20',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging20 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging30 extends Components.RuxIconBatteryCharging30 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-30',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging30 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging50 extends Components.RuxIconBatteryCharging50 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-50',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging50 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging60 extends Components.RuxIconBatteryCharging60 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-60',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging60 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging80 extends Components.RuxIconBatteryCharging80 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-80',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging80 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryCharging90 extends Components.RuxIconBatteryCharging90 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-90',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryCharging90 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryChargingFull extends Components.RuxIconBatteryChargingFull {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-charging-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryChargingFull {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryFull extends Components.RuxIconBatteryFull {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryFull {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryStd extends Components.RuxIconBatteryStd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-std',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryStd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBatteryUnknown extends Components.RuxIconBatteryUnknown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-battery-unknown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBatteryUnknown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBeachAccess extends Components.RuxIconBeachAccess {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-beach-access',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBeachAccess {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBeenhere extends Components.RuxIconBeenhere {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-beenhere',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBeenhere {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBlock extends Components.RuxIconBlock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBlock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBluetooth extends Components.RuxIconBluetooth {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bluetooth',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBluetooth {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBluetoothAudio extends Components.RuxIconBluetoothAudio {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bluetooth-audio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBluetoothAudio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBluetoothConnected extends Components.RuxIconBluetoothConnected {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bluetooth-connected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBluetoothConnected {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBluetoothDisabled extends Components.RuxIconBluetoothDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bluetooth-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBluetoothDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBluetoothSearching extends Components.RuxIconBluetoothSearching {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bluetooth-searching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBluetoothSearching {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBlurCircular extends Components.RuxIconBlurCircular {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-blur-circular',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBlurCircular {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBlurLinear extends Components.RuxIconBlurLinear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-blur-linear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBlurLinear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBlurOff extends Components.RuxIconBlurOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-blur-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBlurOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBlurOn extends Components.RuxIconBlurOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-blur-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBlurOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBook extends Components.RuxIconBook {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-book',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBook {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBookmark extends Components.RuxIconBookmark {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBookmark {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBookmarkBorder extends Components.RuxIconBookmarkBorder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bookmark-border',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBookmarkBorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBookmarks extends Components.RuxIconBookmarks {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bookmarks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBookmarks {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderAll extends Components.RuxIconBorderAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderBottom extends Components.RuxIconBorderBottom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-bottom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderBottom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderClear extends Components.RuxIconBorderClear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-clear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderClear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderColor extends Components.RuxIconBorderColor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderColor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderHorizontal extends Components.RuxIconBorderHorizontal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-horizontal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderHorizontal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderInner extends Components.RuxIconBorderInner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-inner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderInner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderLeft extends Components.RuxIconBorderLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderOuter extends Components.RuxIconBorderOuter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-outer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderOuter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderRight extends Components.RuxIconBorderRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderStyle extends Components.RuxIconBorderStyle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-style',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderStyle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderTop extends Components.RuxIconBorderTop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderTop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBorderVertical extends Components.RuxIconBorderVertical {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-border-vertical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBorderVertical {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrandingWatermark extends Components.RuxIconBrandingWatermark {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-branding-watermark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrandingWatermark {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness1 extends Components.RuxIconBrightness1 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness2 extends Components.RuxIconBrightness2 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness3 extends Components.RuxIconBrightness3 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness3 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness4 extends Components.RuxIconBrightness4 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness4 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness5 extends Components.RuxIconBrightness5 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness5 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness6 extends Components.RuxIconBrightness6 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-6',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness6 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightness7 extends Components.RuxIconBrightness7 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-7',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightness7 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightnessAuto extends Components.RuxIconBrightnessAuto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightnessAuto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightnessHigh extends Components.RuxIconBrightnessHigh {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-high',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightnessHigh {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightnessLow extends Components.RuxIconBrightnessLow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-low',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightnessLow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrightnessMedium extends Components.RuxIconBrightnessMedium {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brightness-medium',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrightnessMedium {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrokenImage extends Components.RuxIconBrokenImage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-broken-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrokenImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBrush extends Components.RuxIconBrush {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-brush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBrush {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBubbleChart extends Components.RuxIconBubbleChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bubble-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBubbleChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBugReport extends Components.RuxIconBugReport {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-bug-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBugReport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBuild extends Components.RuxIconBuild {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-build',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBuild {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBurstMode extends Components.RuxIconBurstMode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-burst-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBurstMode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBusiness extends Components.RuxIconBusiness {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-business',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBusiness {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconBusinessCenter extends Components.RuxIconBusinessCenter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-business-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconBusinessCenter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCached extends Components.RuxIconCached {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cached',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCached {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCake extends Components.RuxIconCake {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cake',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCake {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCalendarToday extends Components.RuxIconCalendarToday {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-calendar-today',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCalendarToday {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCalendarViewDay extends Components.RuxIconCalendarViewDay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-calendar-view-day',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCalendarViewDay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCall extends Components.RuxIconCall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallEnd extends Components.RuxIconCallEnd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-end',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallEnd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallMade extends Components.RuxIconCallMade {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-made',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallMade {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallMerge extends Components.RuxIconCallMerge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-merge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallMerge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallMissed extends Components.RuxIconCallMissed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-missed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallMissed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallMissedOutgoing extends Components.RuxIconCallMissedOutgoing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-missed-outgoing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallMissedOutgoing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallReceived extends Components.RuxIconCallReceived {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-received',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallReceived {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallSplit extends Components.RuxIconCallSplit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallSplit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCallToAction extends Components.RuxIconCallToAction {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-call-to-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCallToAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCamera extends Components.RuxIconCamera {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCameraAlt extends Components.RuxIconCameraAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCameraAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCameraEnhance extends Components.RuxIconCameraEnhance {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera-enhance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCameraEnhance {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCameraFront extends Components.RuxIconCameraFront {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera-front',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCameraFront {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCameraRear extends Components.RuxIconCameraRear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera-rear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCameraRear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCameraRoll extends Components.RuxIconCameraRoll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-camera-roll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCameraRoll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCancel extends Components.RuxIconCancel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cancel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCancel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCancelPresentation extends Components.RuxIconCancelPresentation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cancel-presentation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCancelPresentation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCardGiftcard extends Components.RuxIconCardGiftcard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-card-giftcard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCardGiftcard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCardMembership extends Components.RuxIconCardMembership {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-card-membership',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCardMembership {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCardTravel extends Components.RuxIconCardTravel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-card-travel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCardTravel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCasino extends Components.RuxIconCasino {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-casino',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCasino {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCast extends Components.RuxIconCast {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCastConnected extends Components.RuxIconCastConnected {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cast-connected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCastConnected {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCastForEducation extends Components.RuxIconCastForEducation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cast-for-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCastForEducation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCategory extends Components.RuxIconCategory {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCategory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCellWifi extends Components.RuxIconCellWifi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cell-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCellWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCenterFocusStrong extends Components.RuxIconCenterFocusStrong {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-center-focus-strong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCenterFocusStrong {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCenterFocusWeak extends Components.RuxIconCenterFocusWeak {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-center-focus-weak',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCenterFocusWeak {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChangeHistory extends Components.RuxIconChangeHistory {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-change-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChangeHistory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChat extends Components.RuxIconChat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChatBubble extends Components.RuxIconChatBubble {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chat-bubble',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChatBubble {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChatBubbleOutline extends Components.RuxIconChatBubbleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chat-bubble-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChatBubbleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCheck extends Components.RuxIconCheck {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCheckBox extends Components.RuxIconCheckBox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-check-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCheckBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCheckBoxOutlineBlank extends Components.RuxIconCheckBoxOutlineBlank {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-check-box-outline-blank',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCheckBoxOutlineBlank {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCheckCircle extends Components.RuxIconCheckCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-check-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCheckCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCheckCircleOutline extends Components.RuxIconCheckCircleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-check-circle-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCheckCircleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChevronLeft extends Components.RuxIconChevronLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chevron-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChevronLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChevronRight extends Components.RuxIconChevronRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chevron-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChevronRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChildCare extends Components.RuxIconChildCare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-child-care',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChildCare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChildFriendly extends Components.RuxIconChildFriendly {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-child-friendly',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChildFriendly {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconChromeReaderMode extends Components.RuxIconChromeReaderMode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-chrome-reader-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconChromeReaderMode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconClass extends Components.RuxIconClass {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-class',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconClass {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconClear extends Components.RuxIconClear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-clear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconClear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconClearAll extends Components.RuxIconClearAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-clear-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconClearAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconClose extends Components.RuxIconClose {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-close',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconClose {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconClosedCaption extends Components.RuxIconClosedCaption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-closed-caption',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconClosedCaption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloud extends Components.RuxIconCloud {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloud {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudCircle extends Components.RuxIconCloudCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudDone extends Components.RuxIconCloudDone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-done',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudDone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudDownload extends Components.RuxIconCloudDownload {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudDownload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudOff extends Components.RuxIconCloudOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudQueue extends Components.RuxIconCloudQueue {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudQueue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCloudUpload extends Components.RuxIconCloudUpload {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-cloud-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCloudUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCode extends Components.RuxIconCode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCollections extends Components.RuxIconCollections {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-collections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCollections {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCollectionsBookmark extends Components.RuxIconCollectionsBookmark {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-collections-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCollectionsBookmark {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconColorLens extends Components.RuxIconColorLens {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-color-lens',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconColorLens {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconColorize extends Components.RuxIconColorize {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-colorize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconColorize {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconComment extends Components.RuxIconComment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCommute extends Components.RuxIconCommute {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-commute',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCommute {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCompare extends Components.RuxIconCompare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-compare',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCompare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCompareArrows extends Components.RuxIconCompareArrows {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-compare-arrows',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCompareArrows {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCompassCalibration extends Components.RuxIconCompassCalibration {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-compass-calibration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCompassCalibration {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconComputer extends Components.RuxIconComputer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-computer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconComputer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconConfirmationNumber extends Components.RuxIconConfirmationNumber {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-confirmation-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconConfirmationNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconContactMail extends Components.RuxIconContactMail {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-contact-mail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconContactMail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconContactPhone extends Components.RuxIconContactPhone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-contact-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconContactPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconContactSupport extends Components.RuxIconContactSupport {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-contact-support',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconContactSupport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconContacts extends Components.RuxIconContacts {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconContacts {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconControlCamera extends Components.RuxIconControlCamera {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-control-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconControlCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconControlPoint extends Components.RuxIconControlPoint {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-control-point',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconControlPoint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconControlPointDuplicate extends Components.RuxIconControlPointDuplicate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-control-point-duplicate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconControlPointDuplicate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCopyright extends Components.RuxIconCopyright {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-copyright',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCopyright {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCreate extends Components.RuxIconCreate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCreate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCreateNewFolder extends Components.RuxIconCreateNewFolder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-create-new-folder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCreateNewFolder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCreditCard extends Components.RuxIconCreditCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-credit-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCreditCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCrop extends Components.RuxIconCrop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCrop169 extends Components.RuxIconCrop169 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-16-9',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCrop169 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCrop32 extends Components.RuxIconCrop32 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-3-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCrop32 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCrop54 extends Components.RuxIconCrop54 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-5-4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCrop54 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCrop75 extends Components.RuxIconCrop75 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-7-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCrop75 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropDin extends Components.RuxIconCropDin {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-din',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropDin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropFree extends Components.RuxIconCropFree {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-free',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropFree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropLandscape extends Components.RuxIconCropLandscape {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropLandscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropOriginal extends Components.RuxIconCropOriginal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-original',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropOriginal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropPortrait extends Components.RuxIconCropPortrait {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-portrait',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropPortrait {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropRotate extends Components.RuxIconCropRotate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-rotate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropRotate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconCropSquare extends Components.RuxIconCropSquare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-crop-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconCropSquare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDashboard extends Components.RuxIconDashboard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDashboard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDataUsage extends Components.RuxIconDataUsage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-data-usage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDataUsage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDateRange extends Components.RuxIconDateRange {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-date-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDateRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDehaze extends Components.RuxIconDehaze {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dehaze',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDehaze {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDelete extends Components.RuxIconDelete {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDelete {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeleteForever extends Components.RuxIconDeleteForever {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-delete-forever',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeleteForever {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeleteOutline extends Components.RuxIconDeleteOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-delete-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeleteOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeleteSweep extends Components.RuxIconDeleteSweep {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-delete-sweep',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeleteSweep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDepartureBoard extends Components.RuxIconDepartureBoard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-departure-board',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDepartureBoard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDescription extends Components.RuxIconDescription {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDescription {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDesktopAccessDisabled extends Components.RuxIconDesktopAccessDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-desktop-access-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDesktopAccessDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDesktopMac extends Components.RuxIconDesktopMac {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-desktop-mac',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDesktopMac {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDesktopWindows extends Components.RuxIconDesktopWindows {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-desktop-windows',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDesktopWindows {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDetails extends Components.RuxIconDetails {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeveloperBoard extends Components.RuxIconDeveloperBoard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-developer-board',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeveloperBoard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeveloperMode extends Components.RuxIconDeveloperMode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-developer-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeveloperMode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeviceHub extends Components.RuxIconDeviceHub {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-device-hub',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeviceHub {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDeviceUnknown extends Components.RuxIconDeviceUnknown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-device-unknown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDeviceUnknown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDevices extends Components.RuxIconDevices {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-devices',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDevices {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDevicesOther extends Components.RuxIconDevicesOther {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-devices-other',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDevicesOther {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDialerSip extends Components.RuxIconDialerSip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dialer-sip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDialerSip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDialpad extends Components.RuxIconDialpad {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dialpad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDialpad {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirections extends Components.RuxIconDirections {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirections {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsBike extends Components.RuxIconDirectionsBike {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-bike',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsBike {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsBoat extends Components.RuxIconDirectionsBoat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-boat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsBoat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsBus extends Components.RuxIconDirectionsBus {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-bus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsBus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsCar extends Components.RuxIconDirectionsCar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsCar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsRailway extends Components.RuxIconDirectionsRailway {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-railway',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsRailway {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsRun extends Components.RuxIconDirectionsRun {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-run',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsRun {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsSubway extends Components.RuxIconDirectionsSubway {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-subway',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsSubway {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsTransit extends Components.RuxIconDirectionsTransit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-transit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsTransit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDirectionsWalk extends Components.RuxIconDirectionsWalk {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-directions-walk',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDirectionsWalk {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDiscFull extends Components.RuxIconDiscFull {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-disc-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDiscFull {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDns extends Components.RuxIconDns {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dns',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDns {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDock extends Components.RuxIconDock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDomain extends Components.RuxIconDomain {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-domain',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDomain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDomainDisabled extends Components.RuxIconDomainDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-domain-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDomainDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDone extends Components.RuxIconDone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-done',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDoneAll extends Components.RuxIconDoneAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-done-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDoneAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDoneOutline extends Components.RuxIconDoneOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-done-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDoneOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDonutLarge extends Components.RuxIconDonutLarge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-donut-large',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDonutLarge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDonutSmall extends Components.RuxIconDonutSmall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-donut-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDonutSmall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDrafts extends Components.RuxIconDrafts {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-drafts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDrafts {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDragHandle extends Components.RuxIconDragHandle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-drag-handle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDragHandle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDragIndicator extends Components.RuxIconDragIndicator {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-drag-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDragIndicator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDriveEta extends Components.RuxIconDriveEta {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-drive-eta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDriveEta {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDuo extends Components.RuxIconDuo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-duo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDuo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconDvr extends Components.RuxIconDvr {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-dvr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconDvr {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEdit extends Components.RuxIconEdit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEdit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEditAttributes extends Components.RuxIconEditAttributes {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-edit-attributes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEditAttributes {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEditLocation extends Components.RuxIconEditLocation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-edit-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEditLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEject extends Components.RuxIconEject {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-eject',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEject {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEmail extends Components.RuxIconEmail {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEmail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEnhancedEncryption extends Components.RuxIconEnhancedEncryption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-enhanced-encryption',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEnhancedEncryption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEqualizer extends Components.RuxIconEqualizer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-equalizer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEqualizer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEquipment extends Components.RuxIconEquipment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-equipment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEquipment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconError extends Components.RuxIconError {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconError {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconErrorOutline extends Components.RuxIconErrorOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-error-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconErrorOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEuroSymbol extends Components.RuxIconEuroSymbol {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-euro-symbol',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEuroSymbol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEvStation extends Components.RuxIconEvStation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-ev-station',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEvStation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEvent extends Components.RuxIconEvent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEvent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEventAvailable extends Components.RuxIconEventAvailable {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-event-available',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEventAvailable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEventBusy extends Components.RuxIconEventBusy {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-event-busy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEventBusy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconEventNote extends Components.RuxIconEventNote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-event-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconEventNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExitToApp extends Components.RuxIconExitToApp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exit-to-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExitToApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExpandLess extends Components.RuxIconExpandLess {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-expand-less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExpandLess {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExpandMore extends Components.RuxIconExpandMore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-expand-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExpandMore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExplicit extends Components.RuxIconExplicit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-explicit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExplicit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExplore extends Components.RuxIconExplore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-explore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExplore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExploreOff extends Components.RuxIconExploreOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-explore-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExploreOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposure extends Components.RuxIconExposure {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposure {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposureNeg1 extends Components.RuxIconExposureNeg1 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure-neg-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposureNeg1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposureNeg2 extends Components.RuxIconExposureNeg2 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure-neg-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposureNeg2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposurePlus1 extends Components.RuxIconExposurePlus1 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure-plus-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposurePlus1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposurePlus2 extends Components.RuxIconExposurePlus2 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure-plus-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposurePlus2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExposureZero extends Components.RuxIconExposureZero {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-exposure-zero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExposureZero {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconExtension extends Components.RuxIconExtension {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-extension',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconExtension {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFace extends Components.RuxIconFace {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-face',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFastForward extends Components.RuxIconFastForward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fast-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFastForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFastRewind extends Components.RuxIconFastRewind {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fast-rewind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFastRewind {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFastfood extends Components.RuxIconFastfood {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fastfood',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFastfood {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFavorite extends Components.RuxIconFavorite {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-favorite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFavorite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFavoriteBorder extends Components.RuxIconFavoriteBorder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-favorite-border',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFavoriteBorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFeaturedPlayList extends Components.RuxIconFeaturedPlayList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-featured-play-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFeaturedPlayList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFeaturedVideo extends Components.RuxIconFeaturedVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-featured-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFeaturedVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFeedback extends Components.RuxIconFeedback {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-feedback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFeedback {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFiberDvr extends Components.RuxIconFiberDvr {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fiber-dvr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFiberDvr {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFiberManualRecord extends Components.RuxIconFiberManualRecord {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fiber-manual-record',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFiberManualRecord {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFiberNew extends Components.RuxIconFiberNew {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fiber-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFiberNew {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFiberPin extends Components.RuxIconFiberPin {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fiber-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFiberPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFiberSmartRecord extends Components.RuxIconFiberSmartRecord {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fiber-smart-record',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFiberSmartRecord {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFileCopy extends Components.RuxIconFileCopy {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-file-copy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFileCopy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter extends Components.RuxIconFilter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter1 extends Components.RuxIconFilter1 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter2 extends Components.RuxIconFilter2 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter3 extends Components.RuxIconFilter3 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter3 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter4 extends Components.RuxIconFilter4 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter4 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter5 extends Components.RuxIconFilter5 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter5 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter6 extends Components.RuxIconFilter6 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-6',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter6 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter7 extends Components.RuxIconFilter7 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-7',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter7 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter8 extends Components.RuxIconFilter8 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-8',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter8 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter9 extends Components.RuxIconFilter9 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-9',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter9 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilter9Plus extends Components.RuxIconFilter9Plus {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-9-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilter9Plus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterBAndW extends Components.RuxIconFilterBAndW {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-b-and-w',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterBAndW {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterCenterFocus extends Components.RuxIconFilterCenterFocus {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-center-focus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterCenterFocus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterDrama extends Components.RuxIconFilterDrama {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-drama',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterDrama {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterFrames extends Components.RuxIconFilterFrames {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-frames',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterFrames {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterHdr extends Components.RuxIconFilterHdr {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-hdr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterHdr {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterList extends Components.RuxIconFilterList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterNone extends Components.RuxIconFilterNone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-none',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterNone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterTiltShift extends Components.RuxIconFilterTiltShift {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-tilt-shift',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterTiltShift {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFilterVintage extends Components.RuxIconFilterVintage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-filter-vintage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFilterVintage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFindInPage extends Components.RuxIconFindInPage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-find-in-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFindInPage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFindReplace extends Components.RuxIconFindReplace {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-find-replace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFindReplace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFingerprint extends Components.RuxIconFingerprint {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fingerprint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFingerprint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFirstPage extends Components.RuxIconFirstPage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-first-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFirstPage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFitnessCenter extends Components.RuxIconFitnessCenter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fitness-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFitnessCenter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlag extends Components.RuxIconFlag {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlare extends Components.RuxIconFlare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flare',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlashAuto extends Components.RuxIconFlashAuto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flash-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlashAuto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlashOff extends Components.RuxIconFlashOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flash-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlashOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlashOn extends Components.RuxIconFlashOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flash-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlashOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlight extends Components.RuxIconFlight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlightLand extends Components.RuxIconFlightLand {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flight-land',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlightLand {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlightTakeoff extends Components.RuxIconFlightTakeoff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flight-takeoff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlightTakeoff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlip extends Components.RuxIconFlip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlipToBack extends Components.RuxIconFlipToBack {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flip-to-back',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlipToBack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFlipToFront extends Components.RuxIconFlipToFront {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-flip-to-front',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFlipToFront {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFolder extends Components.RuxIconFolder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-folder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFolder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFolderOpen extends Components.RuxIconFolderOpen {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-folder-open',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFolderOpen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFolderShared extends Components.RuxIconFolderShared {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-folder-shared',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFolderShared {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFolderSpecial extends Components.RuxIconFolderSpecial {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-folder-special',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFolderSpecial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFontDownload extends Components.RuxIconFontDownload {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-font-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFontDownload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatAlignCenter extends Components.RuxIconFormatAlignCenter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-align-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatAlignCenter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatAlignJustify extends Components.RuxIconFormatAlignJustify {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-align-justify',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatAlignJustify {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatAlignLeft extends Components.RuxIconFormatAlignLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-align-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatAlignLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatAlignRight extends Components.RuxIconFormatAlignRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-align-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatAlignRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatBold extends Components.RuxIconFormatBold {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-bold',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatBold {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatClear extends Components.RuxIconFormatClear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-clear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatClear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatColorFill extends Components.RuxIconFormatColorFill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-color-fill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatColorFill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatColorReset extends Components.RuxIconFormatColorReset {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-color-reset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatColorReset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatColorText extends Components.RuxIconFormatColorText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-color-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatColorText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatIndentDecrease extends Components.RuxIconFormatIndentDecrease {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-indent-decrease',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatIndentDecrease {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatIndentIncrease extends Components.RuxIconFormatIndentIncrease {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-indent-increase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatIndentIncrease {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatItalic extends Components.RuxIconFormatItalic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-italic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatItalic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatLineSpacing extends Components.RuxIconFormatLineSpacing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-line-spacing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatLineSpacing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatListBulleted extends Components.RuxIconFormatListBulleted {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-list-bulleted',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatListBulleted {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatListNumbered extends Components.RuxIconFormatListNumbered {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-list-numbered',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatListNumbered {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatListNumberedRtl extends Components.RuxIconFormatListNumberedRtl {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-list-numbered-rtl',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatListNumberedRtl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatPaint extends Components.RuxIconFormatPaint {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-paint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatPaint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatQuote extends Components.RuxIconFormatQuote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-quote',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatQuote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatShapes extends Components.RuxIconFormatShapes {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-shapes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatShapes {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatSize extends Components.RuxIconFormatSize {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-size',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatSize {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatStrikethrough extends Components.RuxIconFormatStrikethrough {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-strikethrough',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatStrikethrough {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatTextdirectionLToR extends Components.RuxIconFormatTextdirectionLToR {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-textdirection-l-to-r',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatTextdirectionLToR {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatTextdirectionRToL extends Components.RuxIconFormatTextdirectionRToL {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-textdirection-r-to-l',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatTextdirectionRToL {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFormatUnderlined extends Components.RuxIconFormatUnderlined {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-format-underlined',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFormatUnderlined {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconForum extends Components.RuxIconForum {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-forum',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconForum {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconForward extends Components.RuxIconForward {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconForward {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconForward10 extends Components.RuxIconForward10 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-forward-10',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconForward10 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconForward30 extends Components.RuxIconForward30 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-forward-30',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconForward30 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconForward5 extends Components.RuxIconForward5 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-forward-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconForward5 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFreeBreakfast extends Components.RuxIconFreeBreakfast {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-free-breakfast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFreeBreakfast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFullscreen extends Components.RuxIconFullscreen {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fullscreen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFullscreen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFullscreenExit extends Components.RuxIconFullscreenExit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-fullscreen-exit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFullscreenExit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconFunctions extends Components.RuxIconFunctions {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-functions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconFunctions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGTranslate extends Components.RuxIconGTranslate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-g-translate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGTranslate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGamepad extends Components.RuxIconGamepad {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gamepad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGamepad {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGames extends Components.RuxIconGames {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-games',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGames {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGavel extends Components.RuxIconGavel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gavel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGavel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGesture extends Components.RuxIconGesture {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gesture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGesture {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGetApp extends Components.RuxIconGetApp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-get-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGetApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGif extends Components.RuxIconGif {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gif',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGif {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGolfCourse extends Components.RuxIconGolfCourse {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-golf-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGolfCourse {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGpsFixed extends Components.RuxIconGpsFixed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gps-fixed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGpsFixed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGpsNotFixed extends Components.RuxIconGpsNotFixed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gps-not-fixed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGpsNotFixed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGpsOff extends Components.RuxIconGpsOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gps-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGpsOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGrade extends Components.RuxIconGrade {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-grade',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGrade {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGradient extends Components.RuxIconGradient {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-gradient',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGradient {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGrain extends Components.RuxIconGrain {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-grain',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGrain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGraphicEq extends Components.RuxIconGraphicEq {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-graphic-eq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGraphicEq {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGridOff extends Components.RuxIconGridOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-grid-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGridOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGridOn extends Components.RuxIconGridOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-grid-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGridOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGroup extends Components.RuxIconGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGroupAdd extends Components.RuxIconGroupAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-group-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGroupAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconGroupWork extends Components.RuxIconGroupWork {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-group-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconGroupWork {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHardware extends Components.RuxIconHardware {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hardware',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHardware {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHd extends Components.RuxIconHd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hd',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHdrOff extends Components.RuxIconHdrOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hdr-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHdrOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHdrOn extends Components.RuxIconHdrOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hdr-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHdrOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHdrStrong extends Components.RuxIconHdrStrong {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hdr-strong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHdrStrong {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHdrWeak extends Components.RuxIconHdrWeak {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hdr-weak',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHdrWeak {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHeadset extends Components.RuxIconHeadset {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-headset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHeadset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHeadsetMic extends Components.RuxIconHeadsetMic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-headset-mic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHeadsetMic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHealing extends Components.RuxIconHealing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-healing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHealing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHearing extends Components.RuxIconHearing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hearing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHearing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHelp extends Components.RuxIconHelp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-help',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHelp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHelpOutline extends Components.RuxIconHelpOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-help-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHelpOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHighQuality extends Components.RuxIconHighQuality {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-high-quality',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHighQuality {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHighlight extends Components.RuxIconHighlight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHighlight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHighlightOff extends Components.RuxIconHighlightOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-highlight-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHighlightOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHistory extends Components.RuxIconHistory {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHistory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHome extends Components.RuxIconHome {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHome {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHorizontalSplit extends Components.RuxIconHorizontalSplit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-horizontal-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHorizontalSplit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHotTub extends Components.RuxIconHotTub {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hot-tub',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHotTub {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHotel extends Components.RuxIconHotel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hotel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHotel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHourglassEmpty extends Components.RuxIconHourglassEmpty {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hourglass-empty',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHourglassEmpty {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHourglassFull extends Components.RuxIconHourglassFull {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-hourglass-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHourglassFull {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHowToReg extends Components.RuxIconHowToReg {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-how-to-reg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHowToReg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHowToVote extends Components.RuxIconHowToVote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-how-to-vote',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHowToVote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHttp extends Components.RuxIconHttp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-http',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHttp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconHttps extends Components.RuxIconHttps {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-https',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconHttps {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImage extends Components.RuxIconImage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImageAspectRatio extends Components.RuxIconImageAspectRatio {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-image-aspect-ratio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImageAspectRatio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImageSearch extends Components.RuxIconImageSearch {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-image-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImageSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImportContacts extends Components.RuxIconImportContacts {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-import-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImportContacts {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImportExport extends Components.RuxIconImportExport {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-import-export',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImportExport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconImportantDevices extends Components.RuxIconImportantDevices {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-important-devices',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconImportantDevices {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInbox extends Components.RuxIconInbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconIndeterminateCheckBox extends Components.RuxIconIndeterminateCheckBox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-indeterminate-check-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconIndeterminateCheckBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInfo extends Components.RuxIconInfo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInfo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInput extends Components.RuxIconInput {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertChart extends Components.RuxIconInsertChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertChartOutlined extends Components.RuxIconInsertChartOutlined {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-chart-outlined',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertChartOutlined {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertComment extends Components.RuxIconInsertComment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertDriveFile extends Components.RuxIconInsertDriveFile {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-drive-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertDriveFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertEmoticon extends Components.RuxIconInsertEmoticon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-emoticon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertEmoticon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertInvitation extends Components.RuxIconInsertInvitation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-invitation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertInvitation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertLink extends Components.RuxIconInsertLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInsertPhoto extends Components.RuxIconInsertPhoto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-insert-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInsertPhoto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInvertColors extends Components.RuxIconInvertColors {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-invert-colors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInvertColors {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconInvertColorsOff extends Components.RuxIconInvertColorsOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-invert-colors-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconInvertColorsOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconIso extends Components.RuxIconIso {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-iso',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconIso {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboard extends Components.RuxIconKeyboard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardArrowDown extends Components.RuxIconKeyboardArrowDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-arrow-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardArrowDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardArrowLeft extends Components.RuxIconKeyboardArrowLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-arrow-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardArrowLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardArrowRight extends Components.RuxIconKeyboardArrowRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-arrow-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardArrowRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardArrowUp extends Components.RuxIconKeyboardArrowUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-arrow-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardArrowUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardBackspace extends Components.RuxIconKeyboardBackspace {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-backspace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardBackspace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardCapslock extends Components.RuxIconKeyboardCapslock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-capslock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardCapslock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardHide extends Components.RuxIconKeyboardHide {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-hide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardHide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardReturn extends Components.RuxIconKeyboardReturn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-return',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardReturn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardTab extends Components.RuxIconKeyboardTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKeyboardVoice extends Components.RuxIconKeyboardVoice {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-keyboard-voice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKeyboardVoice {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconKitchen extends Components.RuxIconKitchen {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-kitchen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconKitchen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLabel extends Components.RuxIconLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLabelImportant extends Components.RuxIconLabelImportant {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-label-important',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLabelImportant {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLabelOff extends Components.RuxIconLabelOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-label-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLabelOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLandscape extends Components.RuxIconLandscape {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLandscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLanguage extends Components.RuxIconLanguage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-language',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLanguage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLaptop extends Components.RuxIconLaptop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-laptop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLaptop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLaptopChromebook extends Components.RuxIconLaptopChromebook {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-laptop-chromebook',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLaptopChromebook {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLaptopMac extends Components.RuxIconLaptopMac {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-laptop-mac',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLaptopMac {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLaptopWindows extends Components.RuxIconLaptopWindows {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-laptop-windows',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLaptopWindows {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLastPage extends Components.RuxIconLastPage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-last-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLastPage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLaunch extends Components.RuxIconLaunch {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-launch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLaunch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLayers extends Components.RuxIconLayers {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-layers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLayers {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLayersClear extends Components.RuxIconLayersClear {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-layers-clear',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLayersClear {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLeakAdd extends Components.RuxIconLeakAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-leak-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLeakAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLeakRemove extends Components.RuxIconLeakRemove {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-leak-remove',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLeakRemove {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLens extends Components.RuxIconLens {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-lens',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLens {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLibraryAdd extends Components.RuxIconLibraryAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-library-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLibraryAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLibraryBooks extends Components.RuxIconLibraryBooks {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-library-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLibraryBooks {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLibraryMusic extends Components.RuxIconLibraryMusic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-library-music',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLibraryMusic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLineStyle extends Components.RuxIconLineStyle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-line-style',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLineStyle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLineWeight extends Components.RuxIconLineWeight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-line-weight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLineWeight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLinearScale extends Components.RuxIconLinearScale {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-linear-scale',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLinearScale {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLink extends Components.RuxIconLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLinkOff extends Components.RuxIconLinkOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-link-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLinkOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLinkedCamera extends Components.RuxIconLinkedCamera {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-linked-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLinkedCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconList extends Components.RuxIconList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconListAlt extends Components.RuxIconListAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-list-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconListAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLiveHelp extends Components.RuxIconLiveHelp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-live-help',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLiveHelp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLiveTv extends Components.RuxIconLiveTv {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-live-tv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLiveTv {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalActivity extends Components.RuxIconLocalActivity {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-activity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalActivity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalAirport extends Components.RuxIconLocalAirport {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-airport',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalAirport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalAtm extends Components.RuxIconLocalAtm {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-atm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalAtm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalBar extends Components.RuxIconLocalBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalCafe extends Components.RuxIconLocalCafe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-cafe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalCafe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalCarWash extends Components.RuxIconLocalCarWash {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-car-wash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalCarWash {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalConvenienceStore extends Components.RuxIconLocalConvenienceStore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-convenience-store',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalConvenienceStore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalDining extends Components.RuxIconLocalDining {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-dining',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalDining {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalDrink extends Components.RuxIconLocalDrink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-drink',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalDrink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalGasStation extends Components.RuxIconLocalGasStation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-gas-station',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalGasStation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalGroceryStore extends Components.RuxIconLocalGroceryStore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-grocery-store',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalGroceryStore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalHospital extends Components.RuxIconLocalHospital {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-hospital',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalHospital {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalHotel extends Components.RuxIconLocalHotel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-hotel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalHotel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalLaundryService extends Components.RuxIconLocalLaundryService {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-laundry-service',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalLaundryService {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalLibrary extends Components.RuxIconLocalLibrary {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-library',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalLibrary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalMall extends Components.RuxIconLocalMall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-mall',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalMall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalMovies extends Components.RuxIconLocalMovies {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalMovies {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalOffer extends Components.RuxIconLocalOffer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-offer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalOffer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalParking extends Components.RuxIconLocalParking {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-parking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalParking {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalPharmacy extends Components.RuxIconLocalPharmacy {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-pharmacy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalPharmacy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalPhone extends Components.RuxIconLocalPhone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalPlay extends Components.RuxIconLocalPlay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-play',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalPlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalPostOffice extends Components.RuxIconLocalPostOffice {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-post-office',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalPostOffice {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalPrintshop extends Components.RuxIconLocalPrintshop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-printshop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalPrintshop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalSee extends Components.RuxIconLocalSee {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-see',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalSee {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalShipping extends Components.RuxIconLocalShipping {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-shipping',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalShipping {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocalTaxi extends Components.RuxIconLocalTaxi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-local-taxi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocalTaxi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocationCity extends Components.RuxIconLocationCity {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-location-city',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocationCity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocationDisabled extends Components.RuxIconLocationDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-location-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocationDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocationOff extends Components.RuxIconLocationOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-location-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocationOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocationOn extends Components.RuxIconLocationOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-location-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocationOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLocationSearching extends Components.RuxIconLocationSearching {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-location-searching',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLocationSearching {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLock extends Components.RuxIconLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLockOpen extends Components.RuxIconLockOpen {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-lock-open',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLockOpen {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks extends Components.RuxIconLooks {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks1 extends Components.RuxIconLooks1 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks2 extends Components.RuxIconLooks2 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks3 extends Components.RuxIconLooks3 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks3 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks4 extends Components.RuxIconLooks4 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-4',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks4 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks5 extends Components.RuxIconLooks5 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks5 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLooks6 extends Components.RuxIconLooks6 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-looks-6',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLooks6 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLoop extends Components.RuxIconLoop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-loop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLoop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLoupe extends Components.RuxIconLoupe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-loupe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLoupe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLowPriority extends Components.RuxIconLowPriority {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-low-priority',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLowPriority {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconLoyalty extends Components.RuxIconLoyalty {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-loyalty',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconLoyalty {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMail extends Components.RuxIconMail {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMailOutline extends Components.RuxIconMailOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mail-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMailOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMap extends Components.RuxIconMap {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMarkunread extends Components.RuxIconMarkunread {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-markunread',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMarkunread {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMarkunreadMailbox extends Components.RuxIconMarkunreadMailbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-markunread-mailbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMarkunreadMailbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMaximize extends Components.RuxIconMaximize {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-maximize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMaximize {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMeetingRoom extends Components.RuxIconMeetingRoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-meeting-room',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMeetingRoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMemory extends Components.RuxIconMemory {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-memory',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMemory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMenu extends Components.RuxIconMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMergeType extends Components.RuxIconMergeType {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-merge-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMergeType {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMessage extends Components.RuxIconMessage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMic extends Components.RuxIconMic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMicNone extends Components.RuxIconMicNone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mic-none',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMicNone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMicOff extends Components.RuxIconMicOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mic-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMicOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMinimize extends Components.RuxIconMinimize {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-minimize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMinimize {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMissedVideoCall extends Components.RuxIconMissedVideoCall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-missed-video-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMissedVideoCall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMission extends Components.RuxIconMission {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mission',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMission {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMms extends Components.RuxIconMms {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMobileFriendly extends Components.RuxIconMobileFriendly {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mobile-friendly',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMobileFriendly {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMobileOff extends Components.RuxIconMobileOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mobile-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMobileOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMobileScreenShare extends Components.RuxIconMobileScreenShare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mobile-screen-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMobileScreenShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconModeComment extends Components.RuxIconModeComment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mode-comment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconModeComment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMonetizationOn extends Components.RuxIconMonetizationOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-monetization-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMonetizationOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoney extends Components.RuxIconMoney {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-money',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoney {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoneyOff extends Components.RuxIconMoneyOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-money-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoneyOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMonochromePhotos extends Components.RuxIconMonochromePhotos {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-monochrome-photos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMonochromePhotos {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMood extends Components.RuxIconMood {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mood',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMood {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoodBad extends Components.RuxIconMoodBad {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mood-bad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoodBad {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMore extends Components.RuxIconMore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoreHoriz extends Components.RuxIconMoreHoriz {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-more-horiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoreHoriz {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoreVert extends Components.RuxIconMoreVert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-more-vert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoreVert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMotorcycle extends Components.RuxIconMotorcycle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-motorcycle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMotorcycle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMouse extends Components.RuxIconMouse {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-mouse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMouse {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMoveToInbox extends Components.RuxIconMoveToInbox {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-move-to-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMoveToInbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMovie extends Components.RuxIconMovie {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-movie',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMovie {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMovieCreation extends Components.RuxIconMovieCreation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-movie-creation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMovieCreation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMovieFilter extends Components.RuxIconMovieFilter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-movie-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMovieFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMultilineChart extends Components.RuxIconMultilineChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-multiline-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMultilineChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMusicNote extends Components.RuxIconMusicNote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-music-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMusicNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMusicOff extends Components.RuxIconMusicOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-music-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMusicOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMusicVideo extends Components.RuxIconMusicVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-music-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMusicVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconMyLocation extends Components.RuxIconMyLocation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-my-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconMyLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNature extends Components.RuxIconNature {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-nature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNaturePeople extends Components.RuxIconNaturePeople {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-nature-people',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNaturePeople {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNavigateBefore extends Components.RuxIconNavigateBefore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-navigate-before',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNavigateBefore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNavigateNext extends Components.RuxIconNavigateNext {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-navigate-next',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNavigateNext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNavigation extends Components.RuxIconNavigation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNavigation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNearMe extends Components.RuxIconNearMe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-near-me',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNearMe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNetcom extends Components.RuxIconNetcom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-netcom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNetcom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNetworkCell extends Components.RuxIconNetworkCell {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-network-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNetworkCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNetworkCheck extends Components.RuxIconNetworkCheck {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-network-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNetworkCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNetworkLocked extends Components.RuxIconNetworkLocked {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-network-locked',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNetworkLocked {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNetworkWifi extends Components.RuxIconNetworkWifi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-network-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNetworkWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNewReleases extends Components.RuxIconNewReleases {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-new-releases',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNewReleases {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNextWeek extends Components.RuxIconNextWeek {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-next-week',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNextWeek {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNfc extends Components.RuxIconNfc {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-nfc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNfc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNoEncryption extends Components.RuxIconNoEncryption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-no-encryption',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNoEncryption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNoMeetingRoom extends Components.RuxIconNoMeetingRoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-no-meeting-room',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNoMeetingRoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNoSim extends Components.RuxIconNoSim {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-no-sim',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNoSim {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotInterested extends Components.RuxIconNotInterested {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-not-interested',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotInterested {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotListedLocation extends Components.RuxIconNotListedLocation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-not-listed-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotListedLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNote extends Components.RuxIconNote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNoteAdd extends Components.RuxIconNoteAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-note-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNoteAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotes extends Components.RuxIconNotes {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotes {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotificationImportant extends Components.RuxIconNotificationImportant {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notification-important',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotificationImportant {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotifications extends Components.RuxIconNotifications {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notifications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotifications {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotificationsActive extends Components.RuxIconNotificationsActive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notifications-active',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotificationsActive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotificationsNone extends Components.RuxIconNotificationsNone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notifications-none',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotificationsNone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotificationsOff extends Components.RuxIconNotificationsOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notifications-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotificationsOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconNotificationsPaused extends Components.RuxIconNotificationsPaused {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-notifications-paused',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconNotificationsPaused {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOfflineBolt extends Components.RuxIconOfflineBolt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-offline-bolt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOfflineBolt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOfflinePin extends Components.RuxIconOfflinePin {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-offline-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOfflinePin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOndemandVideo extends Components.RuxIconOndemandVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-ondemand-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOndemandVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOpacity extends Components.RuxIconOpacity {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-opacity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOpacity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOpenInBrowser extends Components.RuxIconOpenInBrowser {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-open-in-browser',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOpenInBrowser {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOpenInNew extends Components.RuxIconOpenInNew {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-open-in-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOpenInNew {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOpenWith extends Components.RuxIconOpenWith {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-open-with',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOpenWith {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconOutlinedFlag extends Components.RuxIconOutlinedFlag {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-outlined-flag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconOutlinedFlag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPages extends Components.RuxIconPages {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pages',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPages {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPageview extends Components.RuxIconPageview {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pageview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPageview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPalette extends Components.RuxIconPalette {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-palette',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPalette {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanTool extends Components.RuxIconPanTool {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pan-tool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanTool {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanorama extends Components.RuxIconPanorama {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-panorama',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanorama {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanoramaFishEye extends Components.RuxIconPanoramaFishEye {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-panorama-fish-eye',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanoramaFishEye {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanoramaHorizontal extends Components.RuxIconPanoramaHorizontal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-panorama-horizontal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanoramaHorizontal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanoramaVertical extends Components.RuxIconPanoramaVertical {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-panorama-vertical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanoramaVertical {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPanoramaWideAngle extends Components.RuxIconPanoramaWideAngle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-panorama-wide-angle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPanoramaWideAngle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPartyMode extends Components.RuxIconPartyMode {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-party-mode',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPartyMode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPause extends Components.RuxIconPause {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pause',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPause {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPauseCircleFilled extends Components.RuxIconPauseCircleFilled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pause-circle-filled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPauseCircleFilled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPauseCircleOutline extends Components.RuxIconPauseCircleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pause-circle-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPauseCircleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPausePresentation extends Components.RuxIconPausePresentation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pause-presentation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPausePresentation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPayload extends Components.RuxIconPayload {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-payload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPayload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPayment extends Components.RuxIconPayment {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-payment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPayment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPeopleOutline extends Components.RuxIconPeopleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-people-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPeopleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermCameraMic extends Components.RuxIconPermCameraMic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-camera-mic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermCameraMic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermContactCalendar extends Components.RuxIconPermContactCalendar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-contact-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermContactCalendar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermDataSetting extends Components.RuxIconPermDataSetting {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-data-setting',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermDataSetting {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermDeviceInformation extends Components.RuxIconPermDeviceInformation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-device-information',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermDeviceInformation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermIdentity extends Components.RuxIconPermIdentity {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-identity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermIdentity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermMedia extends Components.RuxIconPermMedia {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermMedia {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermPhoneMsg extends Components.RuxIconPermPhoneMsg {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-phone-msg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermPhoneMsg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPermScanWifi extends Components.RuxIconPermScanWifi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-perm-scan-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPermScanWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPerson extends Components.RuxIconPerson {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPerson {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonAdd extends Components.RuxIconPersonAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonAddDisabled extends Components.RuxIconPersonAddDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person-add-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonAddDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonOutline extends Components.RuxIconPersonOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonPin extends Components.RuxIconPersonPin {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonPin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonPinCircle extends Components.RuxIconPersonPinCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-person-pin-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonPinCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPersonalVideo extends Components.RuxIconPersonalVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-personal-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPersonalVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPets extends Components.RuxIconPets {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pets',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPets {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhone extends Components.RuxIconPhone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneAndroid extends Components.RuxIconPhoneAndroid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-android',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneAndroid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneBluetoothSpeaker extends Components.RuxIconPhoneBluetoothSpeaker {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-bluetooth-speaker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneBluetoothSpeaker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneCallback extends Components.RuxIconPhoneCallback {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-callback',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneCallback {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneForwarded extends Components.RuxIconPhoneForwarded {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-forwarded',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneForwarded {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneInTalk extends Components.RuxIconPhoneInTalk {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-in-talk',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneInTalk {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneIphone extends Components.RuxIconPhoneIphone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-iphone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneIphone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneLocked extends Components.RuxIconPhoneLocked {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-locked',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneLocked {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoneMissed extends Components.RuxIconPhoneMissed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-missed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoneMissed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonePaused extends Components.RuxIconPhonePaused {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phone-paused',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonePaused {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelink extends Components.RuxIconPhonelink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelinkErase extends Components.RuxIconPhonelinkErase {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink-erase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelinkErase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelinkLock extends Components.RuxIconPhonelinkLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelinkLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelinkOff extends Components.RuxIconPhonelinkOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelinkOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelinkRing extends Components.RuxIconPhonelinkRing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink-ring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelinkRing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhonelinkSetup extends Components.RuxIconPhonelinkSetup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-phonelink-setup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhonelinkSetup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhoto extends Components.RuxIconPhoto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhoto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoAlbum extends Components.RuxIconPhotoAlbum {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-album',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoAlbum {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoCamera extends Components.RuxIconPhotoCamera {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoFilter extends Components.RuxIconPhotoFilter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoLibrary extends Components.RuxIconPhotoLibrary {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-library',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoLibrary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoSizeSelectActual extends Components.RuxIconPhotoSizeSelectActual {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-size-select-actual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoSizeSelectActual {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoSizeSelectLarge extends Components.RuxIconPhotoSizeSelectLarge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-size-select-large',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoSizeSelectLarge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPhotoSizeSelectSmall extends Components.RuxIconPhotoSizeSelectSmall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-photo-size-select-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPhotoSizeSelectSmall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPictureAsPdf extends Components.RuxIconPictureAsPdf {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-picture-as-pdf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPictureAsPdf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPictureInPicture extends Components.RuxIconPictureInPicture {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-picture-in-picture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPictureInPicture {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPictureInPictureAlt extends Components.RuxIconPictureInPictureAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-picture-in-picture-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPictureInPictureAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPieChart extends Components.RuxIconPieChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPieChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPinDrop extends Components.RuxIconPinDrop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pin-drop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPinDrop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlace extends Components.RuxIconPlace {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-place',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlace {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlayArrow extends Components.RuxIconPlayArrow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-play-arrow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlayArrow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlayCircleFilled extends Components.RuxIconPlayCircleFilled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-play-circle-filled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlayCircleFilled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlayCircleFilledWhite extends Components.RuxIconPlayCircleFilledWhite {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-play-circle-filled-white',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlayCircleFilledWhite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlayCircleOutline extends Components.RuxIconPlayCircleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-play-circle-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlayCircleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlayForWork extends Components.RuxIconPlayForWork {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-play-for-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlayForWork {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlaylistAdd extends Components.RuxIconPlaylistAdd {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-playlist-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlaylistAdd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlaylistAddCheck extends Components.RuxIconPlaylistAddCheck {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-playlist-add-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlaylistAddCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlaylistPlay extends Components.RuxIconPlaylistPlay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-playlist-play',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlaylistPlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPlusOne extends Components.RuxIconPlusOne {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-plus-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPlusOne {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPoll extends Components.RuxIconPoll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-poll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPoll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPool extends Components.RuxIconPool {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPool {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPortableWifiOff extends Components.RuxIconPortableWifiOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-portable-wifi-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPortableWifiOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPortrait extends Components.RuxIconPortrait {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-portrait',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPortrait {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPower extends Components.RuxIconPower {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-power',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPower {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPowerInput extends Components.RuxIconPowerInput {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-power-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPowerInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPowerOff extends Components.RuxIconPowerOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-power-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPowerOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPowerSettingsNew extends Components.RuxIconPowerSettingsNew {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-power-settings-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPowerSettingsNew {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPregnantWoman extends Components.RuxIconPregnantWoman {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-pregnant-woman',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPregnantWoman {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPresentToAll extends Components.RuxIconPresentToAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-present-to-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPresentToAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPrint extends Components.RuxIconPrint {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-print',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPrint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPrintDisabled extends Components.RuxIconPrintDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-print-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPrintDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPriorityHigh extends Components.RuxIconPriorityHigh {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-priority-high',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPriorityHigh {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconProcessor extends Components.RuxIconProcessor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-processor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconProcessor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconProcessorAlt extends Components.RuxIconProcessorAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-processor-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconProcessorAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPropulsionPower extends Components.RuxIconPropulsionPower {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-propulsion-power',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPropulsionPower {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPublic extends Components.RuxIconPublic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-public',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPublic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconPublish extends Components.RuxIconPublish {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-publish',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconPublish {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconQueryBuilder extends Components.RuxIconQueryBuilder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-query-builder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconQueryBuilder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconQuestionAnswer extends Components.RuxIconQuestionAnswer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-question-answer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconQuestionAnswer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconQueue extends Components.RuxIconQueue {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconQueue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconQueueMusic extends Components.RuxIconQueueMusic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-queue-music',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconQueueMusic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconQueuePlayNext extends Components.RuxIconQueuePlayNext {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-queue-play-next',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconQueuePlayNext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRadio extends Components.RuxIconRadio {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRadioButtonChecked extends Components.RuxIconRadioButtonChecked {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-radio-button-checked',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRadioButtonChecked {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRadioButtonUnchecked extends Components.RuxIconRadioButtonUnchecked {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-radio-button-unchecked',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRadioButtonUnchecked {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRateReview extends Components.RuxIconRateReview {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rate-review',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRateReview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReceipt extends Components.RuxIconReceipt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-receipt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReceipt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRecentActors extends Components.RuxIconRecentActors {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-recent-actors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRecentActors {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRecordVoiceOver extends Components.RuxIconRecordVoiceOver {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-record-voice-over',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRecordVoiceOver {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRedeem extends Components.RuxIconRedeem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-redeem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRedeem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRedo extends Components.RuxIconRedo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-redo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRedo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRefresh extends Components.RuxIconRefresh {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-refresh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRefresh {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRelease extends Components.RuxIconRelease {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-release',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRelease {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemove extends Components.RuxIconRemove {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemove {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemoveCircle extends Components.RuxIconRemoveCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemoveCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemoveCircleOutline extends Components.RuxIconRemoveCircleOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove-circle-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemoveCircleOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemoveFromQueue extends Components.RuxIconRemoveFromQueue {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove-from-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemoveFromQueue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemoveRedEye extends Components.RuxIconRemoveRedEye {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove-red-eye',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemoveRedEye {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRemoveShoppingCart extends Components.RuxIconRemoveShoppingCart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-remove-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRemoveShoppingCart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReorder extends Components.RuxIconReorder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-reorder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRepeat extends Components.RuxIconRepeat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-repeat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRepeat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRepeatOne extends Components.RuxIconRepeatOne {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-repeat-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRepeatOne {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReplay extends Components.RuxIconReplay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-replay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReplay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReplay10 extends Components.RuxIconReplay10 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-replay-10',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReplay10 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReplay30 extends Components.RuxIconReplay30 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-replay-30',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReplay30 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReplay5 extends Components.RuxIconReplay5 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-replay-5',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReplay5 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReply extends Components.RuxIconReply {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-reply',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReply {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReplyAll extends Components.RuxIconReplyAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-reply-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReplyAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReport extends Components.RuxIconReport {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReportOff extends Components.RuxIconReportOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-report-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReportOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconReportProblem extends Components.RuxIconReportProblem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-report-problem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconReportProblem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRestaurant extends Components.RuxIconRestaurant {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-restaurant',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRestaurant {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRestaurantMenu extends Components.RuxIconRestaurantMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-restaurant-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRestaurantMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRestore extends Components.RuxIconRestore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-restore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRestore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRestoreFromTrash extends Components.RuxIconRestoreFromTrash {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-restore-from-trash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRestoreFromTrash {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRestorePage extends Components.RuxIconRestorePage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-restore-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRestorePage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRingVolume extends Components.RuxIconRingVolume {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-ring-volume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRingVolume {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRoom extends Components.RuxIconRoom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-room',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRoomService extends Components.RuxIconRoomService {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-room-service',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRoomService {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRotate90DegreesCc extends Components.RuxIconRotate90DegreesCc {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rotate-90-degrees-cc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRotate90DegreesCc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRotateLeft extends Components.RuxIconRotateLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rotate-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRotateLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRotateRight extends Components.RuxIconRotateRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rotate-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRotateRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRoundedCorner extends Components.RuxIconRoundedCorner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rounded-corner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRoundedCorner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRouter extends Components.RuxIconRouter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-router',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRouter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRowing extends Components.RuxIconRowing {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rowing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRowing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRssFeed extends Components.RuxIconRssFeed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rss-feed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRssFeed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconRvHookup extends Components.RuxIconRvHookup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-rv-hookup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconRvHookup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSatellite extends Components.RuxIconSatellite {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-satellite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSatellite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSatelliteOff extends Components.RuxIconSatelliteOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-satellite-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSatelliteOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSatelliteReceive extends Components.RuxIconSatelliteReceive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-satellite-receive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSatelliteReceive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSatelliteTransmit extends Components.RuxIconSatelliteTransmit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-satellite-transmit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSatelliteTransmit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSave extends Components.RuxIconSave {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-save',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSave {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSaveAlt extends Components.RuxIconSaveAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-save-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSaveAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScanner extends Components.RuxIconScanner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-scanner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScatterPlot extends Components.RuxIconScatterPlot {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-scatter-plot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScatterPlot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSchedule extends Components.RuxIconSchedule {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSchedule {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSchool extends Components.RuxIconSchool {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-school',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSchool {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScore extends Components.RuxIconScore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-score',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScreenLockLandscape extends Components.RuxIconScreenLockLandscape {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-screen-lock-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScreenLockLandscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScreenLockPortrait extends Components.RuxIconScreenLockPortrait {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-screen-lock-portrait',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScreenLockPortrait {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScreenLockRotation extends Components.RuxIconScreenLockRotation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-screen-lock-rotation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScreenLockRotation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScreenRotation extends Components.RuxIconScreenRotation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-screen-rotation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScreenRotation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconScreenShare extends Components.RuxIconScreenShare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-screen-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconScreenShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSdCard extends Components.RuxIconSdCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sd-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSdCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSdStorage extends Components.RuxIconSdStorage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sd-storage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSdStorage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSearch extends Components.RuxIconSearch {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSeat extends Components.RuxIconSeat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-seat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSeat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSecurity extends Components.RuxIconSecurity {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-security',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSecurity {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSelectAll extends Components.RuxIconSelectAll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-select-all',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSelectAll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSend extends Components.RuxIconSend {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-send',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSend {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSentimentDissatisfied extends Components.RuxIconSentimentDissatisfied {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sentiment-dissatisfied',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSentimentDissatisfied {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSentimentSatisfied extends Components.RuxIconSentimentSatisfied {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sentiment-satisfied',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSentimentSatisfied {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSentimentSatisfiedAlt extends Components.RuxIconSentimentSatisfiedAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sentiment-satisfied-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSentimentSatisfiedAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSentimentVeryDissatisfied extends Components.RuxIconSentimentVeryDissatisfied {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sentiment-very-dissatisfied',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSentimentVeryDissatisfied {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSentimentVerySatisfied extends Components.RuxIconSentimentVerySatisfied {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sentiment-very-satisfied',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSentimentVerySatisfied {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSetPower extends Components.RuxIconSetPower {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-set-power',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSetPower {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettings extends Components.RuxIconSettings {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettings {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsApplications extends Components.RuxIconSettingsApplications {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-applications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsApplications {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsBackupRestore extends Components.RuxIconSettingsBackupRestore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-backup-restore',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsBackupRestore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsBluetooth extends Components.RuxIconSettingsBluetooth {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-bluetooth',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsBluetooth {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsBrightness extends Components.RuxIconSettingsBrightness {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-brightness',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsBrightness {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsCell extends Components.RuxIconSettingsCell {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsEthernet extends Components.RuxIconSettingsEthernet {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-ethernet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsEthernet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsInputAntenna extends Components.RuxIconSettingsInputAntenna {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-input-antenna',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsInputAntenna {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsInputComponent extends Components.RuxIconSettingsInputComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-input-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsInputComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsInputComposite extends Components.RuxIconSettingsInputComposite {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-input-composite',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsInputComposite {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsInputHdmi extends Components.RuxIconSettingsInputHdmi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-input-hdmi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsInputHdmi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsInputSvideo extends Components.RuxIconSettingsInputSvideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-input-svideo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsInputSvideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsOverscan extends Components.RuxIconSettingsOverscan {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-overscan',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsOverscan {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsPhone extends Components.RuxIconSettingsPhone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsPower extends Components.RuxIconSettingsPower {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-power',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsPower {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsRemote extends Components.RuxIconSettingsRemote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-remote',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsRemote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsSystemDaydream extends Components.RuxIconSettingsSystemDaydream {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-system-daydream',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsSystemDaydream {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSettingsVoice extends Components.RuxIconSettingsVoice {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-settings-voice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSettingsVoice {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShare extends Components.RuxIconShare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShop extends Components.RuxIconShop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShopTwo extends Components.RuxIconShopTwo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shop-two',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShopTwo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShoppingBasket extends Components.RuxIconShoppingBasket {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shopping-basket',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShoppingBasket {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShoppingCart extends Components.RuxIconShoppingCart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShoppingCart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShortText extends Components.RuxIconShortText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-short-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShortText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShowChart extends Components.RuxIconShowChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-show-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShowChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShuffle extends Components.RuxIconShuffle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shuffle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShuffle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconShutterSpeed extends Components.RuxIconShutterSpeed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-shutter-speed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconShutterSpeed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellular0Bar extends Components.RuxIconSignalCellular0Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-0-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellular0Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellular1Bar extends Components.RuxIconSignalCellular1Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-1-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellular1Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellular2Bar extends Components.RuxIconSignalCellular2Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-2-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellular2Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellular3Bar extends Components.RuxIconSignalCellular3Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-3-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellular3Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellular4Bar extends Components.RuxIconSignalCellular4Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-4-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellular4Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularAlt extends Components.RuxIconSignalCellularAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularConnectedNoInternet0Bar extends Components.RuxIconSignalCellularConnectedNoInternet0Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-connected-no-internet-0-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularConnectedNoInternet0Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularConnectedNoInternet1Bar extends Components.RuxIconSignalCellularConnectedNoInternet1Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-connected-no-internet-1-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularConnectedNoInternet1Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularConnectedNoInternet2Bar extends Components.RuxIconSignalCellularConnectedNoInternet2Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-connected-no-internet-2-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularConnectedNoInternet2Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularConnectedNoInternet3Bar extends Components.RuxIconSignalCellularConnectedNoInternet3Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-connected-no-internet-3-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularConnectedNoInternet3Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularConnectedNoInternet4Bar extends Components.RuxIconSignalCellularConnectedNoInternet4Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-connected-no-internet-4-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularConnectedNoInternet4Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularNoSim extends Components.RuxIconSignalCellularNoSim {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-no-sim',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularNoSim {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularNull extends Components.RuxIconSignalCellularNull {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-null',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularNull {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalCellularOff extends Components.RuxIconSignalCellularOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-cellular-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalCellularOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi0Bar extends Components.RuxIconSignalWifi0Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-0-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi0Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi1Bar extends Components.RuxIconSignalWifi1Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-1-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi1Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi1BarLock extends Components.RuxIconSignalWifi1BarLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-1-bar-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi1BarLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi2Bar extends Components.RuxIconSignalWifi2Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-2-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi2Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi2BarLock extends Components.RuxIconSignalWifi2BarLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-2-bar-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi2BarLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi3Bar extends Components.RuxIconSignalWifi3Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-3-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi3Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi3BarLock extends Components.RuxIconSignalWifi3BarLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-3-bar-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi3BarLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi4Bar extends Components.RuxIconSignalWifi4Bar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-4-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi4Bar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifi4BarLock extends Components.RuxIconSignalWifi4BarLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-4-bar-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifi4BarLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSignalWifiOff extends Components.RuxIconSignalWifiOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-signal-wifi-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSignalWifiOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSimCard extends Components.RuxIconSimCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sim-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSimCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSkipNext extends Components.RuxIconSkipNext {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-skip-next',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSkipNext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSkipPrevious extends Components.RuxIconSkipPrevious {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-skip-previous',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSkipPrevious {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSlideshow extends Components.RuxIconSlideshow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-slideshow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSlideshow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSlowMotionVideo extends Components.RuxIconSlowMotionVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-slow-motion-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSlowMotionVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSmartphone extends Components.RuxIconSmartphone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-smartphone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSmartphone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSmokeFree extends Components.RuxIconSmokeFree {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-smoke-free',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSmokeFree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSmokingRooms extends Components.RuxIconSmokingRooms {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-smoking-rooms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSmokingRooms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSms extends Components.RuxIconSms {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSmsFailed extends Components.RuxIconSmsFailed {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sms-failed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSmsFailed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSnooze extends Components.RuxIconSnooze {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-snooze',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSnooze {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSolar extends Components.RuxIconSolar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-solar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSolar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSort extends Components.RuxIconSort {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sort',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSort {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSortByAlpha extends Components.RuxIconSortByAlpha {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sort-by-alpha',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSortByAlpha {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpa extends Components.RuxIconSpa {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-spa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpa {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpaceBar extends Components.RuxIconSpaceBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-space-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpaceBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpeaker extends Components.RuxIconSpeaker {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-speaker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpeaker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpeakerGroup extends Components.RuxIconSpeakerGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-speaker-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpeakerGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpeakerNotes extends Components.RuxIconSpeakerNotes {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-speaker-notes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpeakerNotes {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpeakerNotesOff extends Components.RuxIconSpeakerNotesOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-speaker-notes-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpeakerNotesOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpeakerPhone extends Components.RuxIconSpeakerPhone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-speaker-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpeakerPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSpellcheck extends Components.RuxIconSpellcheck {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-spellcheck',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSpellcheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStar extends Components.RuxIconStar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-star',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStarBorder extends Components.RuxIconStarBorder {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-star-border',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStarBorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStarHalf extends Components.RuxIconStarHalf {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-star-half',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStarHalf {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStarRate extends Components.RuxIconStarRate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-star-rate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStarRate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStars extends Components.RuxIconStars {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stars',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStars {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStayCurrentLandscape extends Components.RuxIconStayCurrentLandscape {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stay-current-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStayCurrentLandscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStayCurrentPortrait extends Components.RuxIconStayCurrentPortrait {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stay-current-portrait',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStayCurrentPortrait {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStayPrimaryLandscape extends Components.RuxIconStayPrimaryLandscape {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stay-primary-landscape',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStayPrimaryLandscape {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStayPrimaryPortrait extends Components.RuxIconStayPrimaryPortrait {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stay-primary-portrait',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStayPrimaryPortrait {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStop extends Components.RuxIconStop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStopScreenShare extends Components.RuxIconStopScreenShare {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-stop-screen-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStopScreenShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStorage extends Components.RuxIconStorage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-storage',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStorage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStore extends Components.RuxIconStore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-store',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStoreMallDirectory extends Components.RuxIconStoreMallDirectory {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-store-mall-directory',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStoreMallDirectory {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStraighten extends Components.RuxIconStraighten {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-straighten',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStraighten {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStreetview extends Components.RuxIconStreetview {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-streetview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStreetview {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStrikethroughS extends Components.RuxIconStrikethroughS {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-strikethrough-s',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStrikethroughS {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconStyle extends Components.RuxIconStyle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-style',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconStyle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubdirectoryArrowLeft extends Components.RuxIconSubdirectoryArrowLeft {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subdirectory-arrow-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubdirectoryArrowLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubdirectoryArrowRight extends Components.RuxIconSubdirectoryArrowRight {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subdirectory-arrow-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubdirectoryArrowRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubject extends Components.RuxIconSubject {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subject',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubject {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubscriptions extends Components.RuxIconSubscriptions {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subscriptions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubscriptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubtitles extends Components.RuxIconSubtitles {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subtitles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubtitles {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSubway extends Components.RuxIconSubway {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-subway',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSubway {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSupervisedUserCircle extends Components.RuxIconSupervisedUserCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-supervised-user-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSupervisedUserCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSupervisorAccount extends Components.RuxIconSupervisorAccount {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-supervisor-account',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSupervisorAccount {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSurroundSound extends Components.RuxIconSurroundSound {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-surround-sound',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSurroundSound {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwapCalls extends Components.RuxIconSwapCalls {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-swap-calls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwapCalls {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwapHoriz extends Components.RuxIconSwapHoriz {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-swap-horiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwapHoriz {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwapHorizontalCircle extends Components.RuxIconSwapHorizontalCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-swap-horizontal-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwapHorizontalCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwapVert extends Components.RuxIconSwapVert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-swap-vert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwapVert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwapVerticalCircle extends Components.RuxIconSwapVerticalCircle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-swap-vertical-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwapVerticalCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwitchCamera extends Components.RuxIconSwitchCamera {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-switch-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwitchCamera {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSwitchVideo extends Components.RuxIconSwitchVideo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-switch-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSwitchVideo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSync extends Components.RuxIconSync {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sync',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSync {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSyncDisabled extends Components.RuxIconSyncDisabled {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sync-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSyncDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSyncProblem extends Components.RuxIconSyncProblem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-sync-problem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSyncProblem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconSystemUpdate extends Components.RuxIconSystemUpdate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-system-update',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconSystemUpdate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTab extends Components.RuxIconTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTabUnselected extends Components.RuxIconTabUnselected {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tab-unselected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTabUnselected {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTableChart extends Components.RuxIconTableChart {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-table-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTableChart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTablet extends Components.RuxIconTablet {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tablet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTablet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTabletAndroid extends Components.RuxIconTabletAndroid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tablet-android',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTabletAndroid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTabletMac extends Components.RuxIconTabletMac {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tablet-mac',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTabletMac {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTagFaces extends Components.RuxIconTagFaces {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tag-faces',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTagFaces {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTapAndPlay extends Components.RuxIconTapAndPlay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tap-and-play',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTapAndPlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTerrain extends Components.RuxIconTerrain {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-terrain',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTerrain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextFields extends Components.RuxIconTextFields {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-text-fields',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextFields {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextFormat extends Components.RuxIconTextFormat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-text-format',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextFormat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextRotateUp extends Components.RuxIconTextRotateUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-text-rotate-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextRotateUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextRotateVertical extends Components.RuxIconTextRotateVertical {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-text-rotate-vertical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextRotateVertical {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextRotationNone extends Components.RuxIconTextRotationNone {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-text-rotation-none',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextRotationNone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTextsms extends Components.RuxIconTextsms {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-textsms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTextsms {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTexture extends Components.RuxIconTexture {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-texture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTexture {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTheaters extends Components.RuxIconTheaters {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-theaters',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTheaters {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThermal extends Components.RuxIconThermal {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thermal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThermal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThumbDown extends Components.RuxIconThumbDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thumb-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThumbDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThumbDownAlt extends Components.RuxIconThumbDownAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thumb-down-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThumbDownAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThumbUp extends Components.RuxIconThumbUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thumb-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThumbUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThumbUpAlt extends Components.RuxIconThumbUpAlt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thumb-up-alt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThumbUpAlt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconThumbsUpDown extends Components.RuxIconThumbsUpDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-thumbs-up-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconThumbsUpDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimeToLeave extends Components.RuxIconTimeToLeave {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-time-to-leave',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimeToLeave {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimelapse extends Components.RuxIconTimelapse {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timelapse',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimelapse {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimeline extends Components.RuxIconTimeline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimeline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimer extends Components.RuxIconTimer {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimer10 extends Components.RuxIconTimer10 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timer-10',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimer10 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimer3 extends Components.RuxIconTimer3 {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timer-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimer3 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTimerOff extends Components.RuxIconTimerOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-timer-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTimerOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTitle extends Components.RuxIconTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToc extends Components.RuxIconToc {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-toc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToday extends Components.RuxIconToday {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-today',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToday {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToggleOff extends Components.RuxIconToggleOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-toggle-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToggleOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToggleOn extends Components.RuxIconToggleOn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-toggle-on',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToggleOn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToll extends Components.RuxIconToll {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-toll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTonality extends Components.RuxIconTonality {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tonality',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTonality {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTouchApp extends Components.RuxIconTouchApp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-touch-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTouchApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconToys extends Components.RuxIconToys {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-toys',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconToys {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTrackChanges extends Components.RuxIconTrackChanges {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-track-changes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTrackChanges {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTraffic extends Components.RuxIconTraffic {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-traffic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTraffic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTrain extends Components.RuxIconTrain {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-train',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTrain {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTram extends Components.RuxIconTram {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTram {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTransferWithinAStation extends Components.RuxIconTransferWithinAStation {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-transfer-within-a-station',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTransferWithinAStation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTransform extends Components.RuxIconTransform {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-transform',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTransform {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTransitEnterexit extends Components.RuxIconTransitEnterexit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-transit-enterexit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTransitEnterexit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTranslate extends Components.RuxIconTranslate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-translate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTranslate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTrendingDown extends Components.RuxIconTrendingDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-trending-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTrendingDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTrendingFlat extends Components.RuxIconTrendingFlat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-trending-flat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTrendingFlat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTrendingUp extends Components.RuxIconTrendingUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-trending-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTrendingUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTripOrigin extends Components.RuxIconTripOrigin {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-trip-origin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTripOrigin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTune extends Components.RuxIconTune {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tune',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTune {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTurnedIn extends Components.RuxIconTurnedIn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-turned-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTurnedIn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTurnedInNot extends Components.RuxIconTurnedInNot {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-turned-in-not',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTurnedInNot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTv extends Components.RuxIconTv {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTv {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconTvOff extends Components.RuxIconTvOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-tv-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconTvOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUnarchive extends Components.RuxIconUnarchive {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-unarchive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUnarchive {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUndo extends Components.RuxIconUndo {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-undo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUndo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUnfoldLess extends Components.RuxIconUnfoldLess {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-unfold-less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUnfoldLess {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUnfoldMore extends Components.RuxIconUnfoldMore {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-unfold-more',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUnfoldMore {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUnsubscribe extends Components.RuxIconUnsubscribe {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-unsubscribe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUnsubscribe {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUpdate extends Components.RuxIconUpdate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-update',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUpdate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconUsb extends Components.RuxIconUsb {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-usb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconUsb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVerifiedUser extends Components.RuxIconVerifiedUser {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-verified-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVerifiedUser {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVerticalAlignBottom extends Components.RuxIconVerticalAlignBottom {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vertical-align-bottom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVerticalAlignBottom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVerticalAlignCenter extends Components.RuxIconVerticalAlignCenter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vertical-align-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVerticalAlignCenter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVerticalAlignTop extends Components.RuxIconVerticalAlignTop {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vertical-align-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVerticalAlignTop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVerticalSplit extends Components.RuxIconVerticalSplit {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vertical-split',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVerticalSplit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVibration extends Components.RuxIconVibration {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vibration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVibration {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideoCall extends Components.RuxIconVideoCall {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-video-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideoCall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideoLabel extends Components.RuxIconVideoLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-video-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideoLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideoLibrary extends Components.RuxIconVideoLibrary {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-video-library',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideoLibrary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideocam extends Components.RuxIconVideocam {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-videocam',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideocam {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideocamOff extends Components.RuxIconVideocamOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-videocam-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideocamOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVideogameAsset extends Components.RuxIconVideogameAsset {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-videogame-asset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVideogameAsset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewAgenda extends Components.RuxIconViewAgenda {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-agenda',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewAgenda {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewArray extends Components.RuxIconViewArray {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-array',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewArray {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewCarousel extends Components.RuxIconViewCarousel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewColumn extends Components.RuxIconViewColumn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewComfy extends Components.RuxIconViewComfy {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-comfy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewComfy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewCompact extends Components.RuxIconViewCompact {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-compact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewCompact {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewDay extends Components.RuxIconViewDay {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-day',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewDay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewHeadline extends Components.RuxIconViewHeadline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-headline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewHeadline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewList extends Components.RuxIconViewList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewModule extends Components.RuxIconViewModule {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-module',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewModule {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewQuilt extends Components.RuxIconViewQuilt {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-quilt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewQuilt {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewStream extends Components.RuxIconViewStream {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-stream',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewStream {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconViewWeek extends Components.RuxIconViewWeek {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-view-week',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconViewWeek {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVignette extends Components.RuxIconVignette {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vignette',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVignette {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVisibility extends Components.RuxIconVisibility {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-visibility',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVisibility {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVisibilityOff extends Components.RuxIconVisibilityOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-visibility-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVisibilityOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVoiceChat extends Components.RuxIconVoiceChat {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-voice-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVoiceChat {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVoiceOverOff extends Components.RuxIconVoiceOverOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-voice-over-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVoiceOverOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVoicemail extends Components.RuxIconVoicemail {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-voicemail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVoicemail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVolumeDown extends Components.RuxIconVolumeDown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-volume-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVolumeDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVolumeMute extends Components.RuxIconVolumeMute {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-volume-mute',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVolumeMute {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVolumeOff extends Components.RuxIconVolumeOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-volume-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVolumeOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVolumeUp extends Components.RuxIconVolumeUp {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-volume-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVolumeUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVpnKey extends Components.RuxIconVpnKey {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vpn-key',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVpnKey {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconVpnLock extends Components.RuxIconVpnLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-vpn-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconVpnLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWallpaper extends Components.RuxIconWallpaper {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wallpaper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWallpaper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWarning extends Components.RuxIconWarning {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-warning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWarning {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWatch extends Components.RuxIconWatch {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-watch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWatch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWatchLater extends Components.RuxIconWatchLater {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-watch-later',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWatchLater {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWaves extends Components.RuxIconWaves {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-waves',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWaves {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWbAuto extends Components.RuxIconWbAuto {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wb-auto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWbAuto {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWbCloudy extends Components.RuxIconWbCloudy {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wb-cloudy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWbCloudy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWbIncandescent extends Components.RuxIconWbIncandescent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wb-incandescent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWbIncandescent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWbIridescent extends Components.RuxIconWbIridescent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wb-iridescent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWbIridescent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWbSunny extends Components.RuxIconWbSunny {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wb-sunny',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWbSunny {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWc extends Components.RuxIconWc {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWeb extends Components.RuxIconWeb {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-web',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWeb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWebAsset extends Components.RuxIconWebAsset {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-web-asset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWebAsset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWeekend extends Components.RuxIconWeekend {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-weekend',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWeekend {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWhatshot extends Components.RuxIconWhatshot {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-whatshot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWhatshot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWhereToVote extends Components.RuxIconWhereToVote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-where-to-vote',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWhereToVote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWidgets extends Components.RuxIconWidgets {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-widgets',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWidgets {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWifi extends Components.RuxIconWifi {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWifi {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWifiLock extends Components.RuxIconWifiLock {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wifi-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWifiLock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWifiOff extends Components.RuxIconWifiOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wifi-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWifiOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWifiTethering extends Components.RuxIconWifiTethering {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wifi-tethering',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWifiTethering {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWork extends Components.RuxIconWork {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWork {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWorkOff extends Components.RuxIconWorkOff {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-work-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWorkOff {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWorkOutline extends Components.RuxIconWorkOutline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-work-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWorkOutline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconWrapText extends Components.RuxIconWrapText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-wrap-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconWrapText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconYoutubeSearchedFor extends Components.RuxIconYoutubeSearchedFor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-youtube-searched-for',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconYoutubeSearchedFor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconZoomIn extends Components.RuxIconZoomIn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-zoom-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconZoomIn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconZoomInMap extends Components.RuxIconZoomInMap {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-zoom-in-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconZoomInMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconZoomOut extends Components.RuxIconZoomOut {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-zoom-out',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconZoomOut {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIconZoomOutMap extends Components.RuxIconZoomOutMap {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['size']
})
@Component({
  selector: 'rux-icon-zoom-out-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class RuxIconZoomOutMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIndeterminateProgress extends Components.RuxIndeterminateProgress {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-indeterminate-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxIndeterminateProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxInput extends Components.RuxInput {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxinput: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has gained focus - [HTMLElement/focus_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event) 
   */
  ruxfocus: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'rux-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'max', 'min', 'name', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']
})
export class RuxInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxinput', 'ruxblur', 'ruxfocus']);
  }
}


export declare interface RuxLog extends Components.RuxLog {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['data', 'filter', 'timezone']
})
@Component({
  selector: 'rux-log',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'filter', 'timezone']
})
export class RuxLog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMenu extends Components.RuxMenu {
  /**
   * Emits when a rux-menu-item is selected. Emits the rux-menu-item selected in the event detail. 
   */
  ruxmenuselected: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxmenuselected']);
  }
}


export declare interface RuxMenuItem extends Components.RuxMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'download', 'href', 'rel', 'selected', 'target', 'value']
})
@Component({
  selector: 'rux-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'href', 'rel', 'selected', 'target', 'value']
})
export class RuxMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMenuItemDivider extends Components.RuxMenuItemDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-menu-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxMenuItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMonitoringIcon extends Components.RuxMonitoringIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'label', 'notifications', 'status', 'sublabel']
})
@Component({
  selector: 'rux-monitoring-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label', 'notifications', 'status', 'sublabel']
})
export class RuxMonitoringIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMonitoringProgressIcon extends Components.RuxMonitoringProgressIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'max', 'min', 'notifications', 'progress', 'range', 'sublabel']
})
@Component({
  selector: 'rux-monitoring-progress-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'max', 'min', 'notifications', 'progress', 'range', 'sublabel']
})
export class RuxMonitoringProgressIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxNotification extends Components.RuxNotification {
  /**
   * Fires when the notification banner is closed 
   */
  ruxclosed: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeAfter', 'hideClose', 'message', 'open', 'small', 'status']
})
@Component({
  selector: 'rux-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeAfter', 'hideClose', 'message', 'open', 'small', 'status']
})
export class RuxNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxclosed']);
  }
}


export declare interface RuxOption extends Components.RuxOption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'label', 'value']
})
@Component({
  selector: 'rux-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'value']
})
export class RuxOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxOptionGroup extends Components.RuxOptionGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'rux-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class RuxOptionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxPopUp extends Components.RuxPopUp {
  /**
   * Emits when the pop up has opened 
   */
  ruxpopupopened: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the pop up has closed. 
   */
  ruxpopupclosed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeOnSelect', 'disableAutoUpdate', 'enableAnimationFrame', 'open', 'placement', 'strategy'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'rux-pop-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeOnSelect', 'disableAutoUpdate', 'enableAnimationFrame', 'open', 'placement', 'strategy']
})
export class RuxPopUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxpopupopened', 'ruxpopupclosed']);
  }
}


export declare interface RuxProgress extends Components.RuxProgress {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hideLabel', 'max', 'value']
})
@Component({
  selector: 'rux-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hideLabel', 'max', 'value']
})
export class RuxProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxPushButton extends Components.RuxPushButton {
  /**
   * Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'icon', 'iconOnly', 'label', 'name', 'size', 'value']
})
@Component({
  selector: 'rux-push-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'icon', 'iconOnly', 'label', 'name', 'size', 'value']
})
export class RuxPushButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxblur']);
  }
}


export declare interface RuxRadio extends Components.RuxRadio {
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
export class RuxRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxblur']);
  }
}


export declare interface RuxRadioGroup extends Components.RuxRadioGroup {
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'rux-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'name', 'required', 'value']
})
export class RuxRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange']);
  }
}


export declare interface RuxRuler extends Components.RuxRuler {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-ruler',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxRuler {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxSegmentedButton extends Components.RuxSegmentedButton {
  /**
   * Fires when the value property has changed and emits that value on the event.detail. 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['data', 'disabled', 'selected', 'size']
})
@Component({
  selector: 'rux-segmented-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'disabled', 'selected', 'size']
})
export class RuxSegmentedButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange']);
  }
}


export declare interface RuxSelect extends Components.RuxSelect {
  /**
   * Event Emitted when the Value of the Select is Changed 
   */
  ruxchange: EventEmitter<CustomEvent<void>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'errorText', 'helpText', 'inputId', 'invalid', 'label', 'labelId', 'multiple', 'name', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'rux-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'errorText', 'helpText', 'inputId', 'invalid', 'label', 'labelId', 'multiple', 'name', 'required', 'size', 'value']
})
export class RuxSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxblur']);
  }
}


export declare interface RuxSlider extends Components.RuxSlider {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxinput: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when the element's value is altered by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['axisLabels', 'disabled', 'errorText', 'helpText', 'label', 'max', 'min', 'name', 'step', 'ticksOnly', 'value']
})
@Component({
  selector: 'rux-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['axisLabels', 'disabled', 'errorText', 'helpText', 'label', 'max', 'min', 'name', 'step', 'ticksOnly', 'value']
})
export class RuxSlider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxinput', 'ruxblur', 'ruxchange']);
  }
}


export declare interface RuxStatus extends Components.RuxStatus {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['status']
})
@Component({
  selector: 'rux-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['status']
})
export class RuxStatus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxSwitch extends Components.RuxSwitch {
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxinput: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
export class RuxSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxinput', 'ruxblur']);
  }
}


export declare interface RuxTab extends Components.RuxTab {
  /**
   * Fires when a tab is selected 
   */
  ruxtabselected: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'selected', 'small']
})
@Component({
  selector: 'rux-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'selected', 'small']
})
export class RuxTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxtabselected']);
  }
}


export declare interface RuxTabPanel extends Components.RuxTabPanel {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTabPanels extends Components.RuxTabPanels {
  /**
   * Emits a list of the Tab Panels on the event.detail which have been passed in 
   */
  ruxregisterpanels: EventEmitter<CustomEvent<HTMLRuxTabPanelsElement[]>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-tab-panels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTabPanels {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxregisterpanels']);
  }
}


export declare interface RuxTable extends Components.RuxTable {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableBody extends Components.RuxTableBody {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTableBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableCell extends Components.RuxTableCell {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTableCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeader extends Components.RuxTableHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTableHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeaderCell extends Components.RuxTableHeaderCell {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTableHeaderCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeaderRow extends Components.RuxTableHeaderRow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-table-header-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTableHeaderRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableRow extends Components.RuxTableRow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['selected']
})
@Component({
  selector: 'rux-table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selected']
})
export class RuxTableRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTabs extends Components.RuxTabs {
  /**
   * Fires whenever a new tab is selected, and emits the selected tab on the event.detail. 
   */
  ruxselected: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['small']
})
@Component({
  selector: 'rux-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['small']
})
export class RuxTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxselected']);
  }
}


export declare interface RuxTag extends Components.RuxTag {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['status']
})
@Component({
  selector: 'rux-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['status']
})
export class RuxTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTextarea extends Components.RuxTextarea {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) 
   */
  ruxchange: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) 
   */
  ruxinput: EventEmitter<CustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) 
   */
  ruxblur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'required', 'rows', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'rux-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'required', 'rows', 'size', 'value']
})
export class RuxTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxchange', 'ruxinput', 'ruxblur']);
  }
}


export declare interface RuxTimeRegion extends Components.RuxTimeRegion {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['end', 'hideTimestamp', 'partial', 'selected', 'start', 'status']
})
@Component({
  selector: 'rux-time-region',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['end', 'hideTimestamp', 'partial', 'selected', 'start', 'status']
})
export class RuxTimeRegion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTimeline extends Components.RuxTimeline {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['end', 'interval', 'playhead', 'start', 'timezone', 'zoom']
})
@Component({
  selector: 'rux-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['end', 'interval', 'playhead', 'start', 'timezone', 'zoom']
})
export class RuxTimeline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTooltip extends Components.RuxTooltip {
  /**
   * Emits when the tooltip has opened 
   */
  ruxtooltipopened: EventEmitter<CustomEvent<any>>;
  /**
   * Emits when the tooltip has closed. 
   */
  ruxtooltipclosed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['delay', 'disableAutoUpdate', 'message', 'offset', 'open', 'placement', 'strategy'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'rux-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['delay', 'disableAutoUpdate', 'message', 'offset', 'open', 'placement', 'strategy']
})
export class RuxTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxtooltipopened', 'ruxtooltipclosed']);
  }
}


export declare interface RuxTrack extends Components.RuxTrack {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-track',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTrack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTree extends Components.RuxTree {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'rux-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class RuxTree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTreeNode extends Components.RuxTreeNode {
  /**
   * Fires when the user selects a tree node and emits the node's id on the event.detail. 
   */
  ruxtreenodeselected: EventEmitter<CustomEvent<string>>;
  /**
   * Fires when the user expands a tree node and emits the node's id on the event.detail. 
   */
  ruxtreenodeexpanded: EventEmitter<CustomEvent<string>>;
  /**
   * Fires when the user collapses a tree node and emits the node's id on the event.detail. 
   */
  ruxtreenodecollapsed: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['expanded', 'selected'],
  methods: ['setExpanded', 'setSelected']
})
@Component({
  selector: 'rux-tree-node',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'selected']
})
export class RuxTreeNode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ruxtreenodeselected', 'ruxtreenodeexpanded', 'ruxtreenodecollapsed']);
  }
}
