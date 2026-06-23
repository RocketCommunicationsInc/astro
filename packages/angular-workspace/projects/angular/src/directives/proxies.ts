import { TextValueAccessor } from './text-value-accessor';
import { BooleanValueAccessor } from './boolean-value-accessor';
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@astrouxds/astro-web-components/components';

import { defineCustomElement as defineRuxAccordion } from '@astrouxds/astro-web-components/components/rux-accordion.js';
import { defineCustomElement as defineRuxAccordionItem } from '@astrouxds/astro-web-components/components/rux-accordion-item.js';
import { defineCustomElement as defineRuxBreadcrumb } from '@astrouxds/astro-web-components/components/rux-breadcrumb.js';
import { defineCustomElement as defineRuxBreadcrumbItem } from '@astrouxds/astro-web-components/components/rux-breadcrumb-item.js';
import { defineCustomElement as defineRuxButton } from '@astrouxds/astro-web-components/components/rux-button.js';
import { defineCustomElement as defineRuxButtonGroup } from '@astrouxds/astro-web-components/components/rux-button-group.js';
import { defineCustomElement as defineRuxCard } from '@astrouxds/astro-web-components/components/rux-card.js';
import { defineCustomElement as defineRuxCheckbox } from '@astrouxds/astro-web-components/components/rux-checkbox.js';
import { defineCustomElement as defineRuxCheckboxGroup } from '@astrouxds/astro-web-components/components/rux-checkbox-group.js';
import { defineCustomElement as defineRuxClassificationMarking } from '@astrouxds/astro-web-components/components/rux-classification-marking.js';
import { defineCustomElement as defineRuxClock } from '@astrouxds/astro-web-components/components/rux-clock.js';
import { defineCustomElement as defineRuxContainer } from '@astrouxds/astro-web-components/components/rux-container.js';
import { defineCustomElement as defineRuxDatetime } from '@astrouxds/astro-web-components/components/rux-datetime.js';
import { defineCustomElement as defineRuxDialog } from '@astrouxds/astro-web-components/components/rux-dialog.js';
import { defineCustomElement as defineRuxGlobalStatusBar } from '@astrouxds/astro-web-components/components/rux-global-status-bar.js';
import { defineCustomElement as defineRuxIcon } from '@astrouxds/astro-web-components/components/rux-icon.js';
import { defineCustomElement as defineRuxIndeterminateProgress } from '@astrouxds/astro-web-components/components/rux-indeterminate-progress.js';
import { defineCustomElement as defineRuxInput } from '@astrouxds/astro-web-components/components/rux-input.js';
import { defineCustomElement as defineRuxLog } from '@astrouxds/astro-web-components/components/rux-log.js';
import { defineCustomElement as defineRuxMenu } from '@astrouxds/astro-web-components/components/rux-menu.js';
import { defineCustomElement as defineRuxMenuItem } from '@astrouxds/astro-web-components/components/rux-menu-item.js';
import { defineCustomElement as defineRuxMenuItemDivider } from '@astrouxds/astro-web-components/components/rux-menu-item-divider.js';
import { defineCustomElement as defineRuxMonitoringIcon } from '@astrouxds/astro-web-components/components/rux-monitoring-icon.js';
import { defineCustomElement as defineRuxMonitoringProgressIcon } from '@astrouxds/astro-web-components/components/rux-monitoring-progress-icon.js';
import { defineCustomElement as defineRuxNotification } from '@astrouxds/astro-web-components/components/rux-notification.js';
import { defineCustomElement as defineRuxOption } from '@astrouxds/astro-web-components/components/rux-option.js';
import { defineCustomElement as defineRuxOptionGroup } from '@astrouxds/astro-web-components/components/rux-option-group.js';
import { defineCustomElement as defineRuxPopUp } from '@astrouxds/astro-web-components/components/rux-pop-up.js';
import { defineCustomElement as defineRuxProgress } from '@astrouxds/astro-web-components/components/rux-progress.js';
import { defineCustomElement as defineRuxPushButton } from '@astrouxds/astro-web-components/components/rux-push-button.js';
import { defineCustomElement as defineRuxRadio } from '@astrouxds/astro-web-components/components/rux-radio.js';
import { defineCustomElement as defineRuxRadioGroup } from '@astrouxds/astro-web-components/components/rux-radio-group.js';
import { defineCustomElement as defineRuxRuler } from '@astrouxds/astro-web-components/components/rux-ruler.js';
import { defineCustomElement as defineRuxSegmentedButton } from '@astrouxds/astro-web-components/components/rux-segmented-button.js';
import { defineCustomElement as defineRuxSelect } from '@astrouxds/astro-web-components/components/rux-select.js';
import { defineCustomElement as defineRuxSlider } from '@astrouxds/astro-web-components/components/rux-slider.js';
import { defineCustomElement as defineRuxStatus } from '@astrouxds/astro-web-components/components/rux-status.js';
import { defineCustomElement as defineRuxSwitch } from '@astrouxds/astro-web-components/components/rux-switch.js';
import { defineCustomElement as defineRuxTab } from '@astrouxds/astro-web-components/components/rux-tab.js';
import { defineCustomElement as defineRuxTabPanel } from '@astrouxds/astro-web-components/components/rux-tab-panel.js';
import { defineCustomElement as defineRuxTabPanels } from '@astrouxds/astro-web-components/components/rux-tab-panels.js';
import { defineCustomElement as defineRuxTable } from '@astrouxds/astro-web-components/components/rux-table.js';
import { defineCustomElement as defineRuxTableBody } from '@astrouxds/astro-web-components/components/rux-table-body.js';
import { defineCustomElement as defineRuxTableCell } from '@astrouxds/astro-web-components/components/rux-table-cell.js';
import { defineCustomElement as defineRuxTableHeader } from '@astrouxds/astro-web-components/components/rux-table-header.js';
import { defineCustomElement as defineRuxTableHeaderCell } from '@astrouxds/astro-web-components/components/rux-table-header-cell.js';
import { defineCustomElement as defineRuxTableHeaderRow } from '@astrouxds/astro-web-components/components/rux-table-header-row.js';
import { defineCustomElement as defineRuxTableRow } from '@astrouxds/astro-web-components/components/rux-table-row.js';
import { defineCustomElement as defineRuxTabs } from '@astrouxds/astro-web-components/components/rux-tabs.js';
import { defineCustomElement as defineRuxTag } from '@astrouxds/astro-web-components/components/rux-tag.js';
import { defineCustomElement as defineRuxTextarea } from '@astrouxds/astro-web-components/components/rux-textarea.js';
import { defineCustomElement as defineRuxTimeRegion } from '@astrouxds/astro-web-components/components/rux-time-region.js';
import { defineCustomElement as defineRuxTimeline } from '@astrouxds/astro-web-components/components/rux-timeline.js';
import { defineCustomElement as defineRuxToast } from '@astrouxds/astro-web-components/components/rux-toast.js';
import { defineCustomElement as defineRuxToastStack } from '@astrouxds/astro-web-components/components/rux-toast-stack.js';
import { defineCustomElement as defineRuxTooltip } from '@astrouxds/astro-web-components/components/rux-tooltip.js';
import { defineCustomElement as defineRuxTrack } from '@astrouxds/astro-web-components/components/rux-track.js';
import { defineCustomElement as defineRuxTree } from '@astrouxds/astro-web-components/components/rux-tree.js';
import { defineCustomElement as defineRuxTreeNode } from '@astrouxds/astro-web-components/components/rux-tree-node.js';
@ProxyCmp({
  defineCustomElementFn: defineRuxAccordion,
  inputs: ['disabled', 'disallowMultiple']
})
@Component({
  selector: 'rux-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'disallowMultiple'],
})
export class RuxAccordion {
  protected el: HTMLRuxAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxAccordion extends Components.RuxAccordion {}


@ProxyCmp({
  defineCustomElementFn: defineRuxAccordionItem,
  inputs: ['disabled', 'expanded']
})
@Component({
  selector: 'rux-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'expanded'],
  outputs: ['ruxexpanded', 'ruxcollapsed'],
})
export class RuxAccordionItem {
  protected el: HTMLRuxAccordionItemElement;
  @Output() ruxexpanded = new EventEmitter<RuxAccordionItemCustomEvent<any>>();
  @Output() ruxcollapsed = new EventEmitter<RuxAccordionItemCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxAccordionItemCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxAccordionItem extends Components.RuxAccordionItem {
  /**
   * Fired when an accordion-item has expanded
   */
  ruxexpanded: EventEmitter<RuxAccordionItemCustomEvent<any>>;
  /**
   * Fired when an accordion-item has collapsed
   */
  ruxcollapsed: EventEmitter<RuxAccordionItemCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxBreadcrumb
})
@Component({
  selector: 'rux-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxBreadcrumb {
  protected el: HTMLRuxBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxBreadcrumb extends Components.RuxBreadcrumb {}


@ProxyCmp({
  defineCustomElementFn: defineRuxBreadcrumbItem,
  inputs: ['href']
})
@Component({
  selector: 'rux-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
})
export class RuxBreadcrumbItem {
  protected el: HTMLRuxBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxBreadcrumbItem extends Components.RuxBreadcrumbItem {}


@ProxyCmp({
  defineCustomElementFn: defineRuxButton,
  inputs: ['borderless', 'disabled', 'icon', 'iconOnly', 'secondary', 'size', 'type']
})
@Component({
  selector: 'rux-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['borderless', 'disabled', 'icon', 'iconOnly', 'secondary', 'size', 'type'],
})
export class RuxButton {
  protected el: HTMLRuxButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxButton extends Components.RuxButton {}


@ProxyCmp({
  defineCustomElementFn: defineRuxButtonGroup,
  inputs: ['hAlign']
})
@Component({
  selector: 'rux-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hAlign'],
})
export class RuxButtonGroup {
  protected el: HTMLRuxButtonGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxButtonGroup extends Components.RuxButtonGroup {}


@ProxyCmp({
  defineCustomElementFn: defineRuxCard
})
@Component({
  selector: 'rux-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxCard {
  protected el: HTMLRuxCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxCard extends Components.RuxCard {}


@ProxyCmp({
  defineCustomElementFn: defineRuxCheckbox,
  inputs: ['checked', 'disabled', 'helpText', 'indeterminate', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-checkbox',
  hostDirectives: [BooleanValueAccessor],
  imports: [BooleanValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'helpText', 'indeterminate', 'label', 'name', 'value'],
  outputs: ['ruxchange', 'ruxinput', 'ruxfocus', 'ruxblur'],
})
export class RuxCheckbox {
  protected el: HTMLRuxCheckboxElement;
  @Output() ruxchange = new EventEmitter<RuxCheckboxCustomEvent<any>>();
  @Output() ruxinput = new EventEmitter<RuxCheckboxCustomEvent<any>>();
  @Output() ruxfocus = new EventEmitter<RuxCheckboxCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxCheckboxCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxCheckboxCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxCheckbox extends Components.RuxCheckbox {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxchange: EventEmitter<RuxCheckboxCustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxinput: EventEmitter<RuxCheckboxCustomEvent<any>>;
  /**
   * Fired when an element has gained focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
   */
  ruxfocus: EventEmitter<RuxCheckboxCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxCheckboxCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxCheckboxGroup,
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'required']
})
@Component({
  selector: 'rux-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'required'],
})
export class RuxCheckboxGroup {
  protected el: HTMLRuxCheckboxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxCheckboxGroup extends Components.RuxCheckboxGroup {}


@ProxyCmp({
  defineCustomElementFn: defineRuxClassificationMarking,
  inputs: ['classification', 'label', 'tag']
})
@Component({
  selector: 'rux-classification-marking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['classification', 'label', 'tag'],
})
export class RuxClassificationMarking {
  protected el: HTMLRuxClassificationMarkingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxClassificationMarking extends Components.RuxClassificationMarking {}


@ProxyCmp({
  defineCustomElementFn: defineRuxClock,
  inputs: ['aos', 'dateIn', 'hideDate', 'hideLabels', 'hideTimezone', 'los', 'small', 'static', 'timezone']
})
@Component({
  selector: 'rux-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aos', 'dateIn', 'hideDate', 'hideLabels', 'hideTimezone', 'los', 'small', 'static', 'timezone'],
})
export class RuxClock {
  protected el: HTMLRuxClockElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxClock extends Components.RuxClock {}


@ProxyCmp({
  defineCustomElementFn: defineRuxContainer
})
@Component({
  selector: 'rux-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxContainer {
  protected el: HTMLRuxContainerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxContainer extends Components.RuxContainer {}


@ProxyCmp({
  defineCustomElementFn: defineRuxDatetime,
  inputs: ['date', 'day', 'era', 'hour', 'hour12', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
@Component({
  selector: 'rux-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['date', 'day', 'era', 'hour', 'hour12', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year'],
})
export class RuxDatetime {
  protected el: HTMLRuxDatetimeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxDatetime extends Components.RuxDatetime {}


@ProxyCmp({
  defineCustomElementFn: defineRuxDialog,
  inputs: ['clickToClose', 'confirmText', 'denyText', 'header', 'message', 'open'],
  methods: ['toggle', 'show', 'hide']
})
@Component({
  selector: 'rux-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickToClose', 'confirmText', 'denyText', 'header', 'message', 'open'],
  outputs: ['ruxdialogopened', 'ruxdialogclosed'],
})
export class RuxDialog {
  protected el: HTMLRuxDialogElement;
  @Output() ruxdialogopened = new EventEmitter<RuxDialogCustomEvent<void>>();
  @Output() ruxdialogclosed = new EventEmitter<RuxDialogCustomEvent<boolean | null>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxDialogCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxDialog extends Components.RuxDialog {
  /**
   * Event that is fired when dialog opens
   */
  ruxdialogopened: EventEmitter<RuxDialogCustomEvent<void>>;
  /**
   * Event that is fired when dialog closes. If dialog is closed by clicking on the default confirm or deny buttons (when no footer slot is provided), then true or false will be emitted respectively on the event.detail.
   */
  ruxdialogclosed: EventEmitter<RuxDialogCustomEvent<boolean | null>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxGlobalStatusBar,
  inputs: ['appDomain', 'appName', 'appState', 'appStateColor', 'appVersion', 'compact', 'includeIcon', 'menuIcon', 'username']
})
@Component({
  selector: 'rux-global-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appDomain', 'appName', 'appState', 'appStateColor', 'appVersion', 'compact', 'includeIcon', 'menuIcon', 'username'],
})
export class RuxGlobalStatusBar {
  protected el: HTMLRuxGlobalStatusBarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxGlobalStatusBar extends Components.RuxGlobalStatusBar {}


@ProxyCmp({
  defineCustomElementFn: defineRuxIcon,
  inputs: ['icon', 'size']
})
@Component({
  selector: 'rux-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'icon', required: true }, 'size'],
})
export class RuxIcon {
  protected el: HTMLRuxIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIcon extends Components.RuxIcon {}


@ProxyCmp({
  defineCustomElementFn: defineRuxIndeterminateProgress
})
@Component({
  selector: 'rux-indeterminate-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxIndeterminateProgress {
  protected el: HTMLRuxIndeterminateProgressElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxIndeterminateProgress extends Components.RuxIndeterminateProgress {}


@ProxyCmp({
  defineCustomElementFn: defineRuxInput,
  inputs: ['autocomplete', 'disabled', 'errorText', 'helpText', 'invalid', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInput']
})
@Component({
  selector: 'rux-input',
  hostDirectives: [TextValueAccessor],
  imports: [TextValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'errorText', 'helpText', 'invalid', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  outputs: ['ruxchange', 'ruxinput', 'ruxblur', 'ruxfocus'],
})
export class RuxInput {
  protected el: HTMLRuxInputElement;
  @Output() ruxchange = new EventEmitter<RuxInputCustomEvent<any>>();
  @Output() ruxinput = new EventEmitter<RuxInputCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxInputCustomEvent<any>>();
  @Output() ruxfocus = new EventEmitter<RuxInputCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxInputCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxInput extends Components.RuxInput {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxchange: EventEmitter<RuxInputCustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxinput: EventEmitter<RuxInputCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxInputCustomEvent<any>>;
  /**
   * Fired when an element has gained focus - [HTMLElement/focus_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
   */
  ruxfocus: EventEmitter<RuxInputCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxLog,
  inputs: ['data', 'filter', 'timezone']
})
@Component({
  selector: 'rux-log',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'filter', 'timezone'],
})
export class RuxLog {
  protected el: HTMLRuxLogElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxLog extends Components.RuxLog {}


@ProxyCmp({
  defineCustomElementFn: defineRuxMenu
})
@Component({
  selector: 'rux-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['ruxmenuselected'],
})
export class RuxMenu {
  protected el: HTMLRuxMenuElement;
  @Output() ruxmenuselected = new EventEmitter<RuxMenuCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxMenuCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxMenu extends Components.RuxMenu {
  /**
   * Emits when a rux-menu-item is selected. Emits the rux-menu-item selected in the event detail.
   */
  ruxmenuselected: EventEmitter<RuxMenuCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxMenuItem,
  inputs: ['disabled', 'download', 'href', 'rel', 'selected', 'target', 'value']
})
@Component({
  selector: 'rux-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'download', 'href', 'rel', 'selected', 'target', 'value'],
})
export class RuxMenuItem {
  protected el: HTMLRuxMenuItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMenuItem extends Components.RuxMenuItem {}


@ProxyCmp({
  defineCustomElementFn: defineRuxMenuItemDivider
})
@Component({
  selector: 'rux-menu-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxMenuItemDivider {
  protected el: HTMLRuxMenuItemDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMenuItemDivider extends Components.RuxMenuItemDivider {}


@ProxyCmp({
  defineCustomElementFn: defineRuxMonitoringIcon,
  inputs: ['icon', 'label', 'notifications', 'size', 'status', 'sublabel']
})
@Component({
  selector: 'rux-monitoring-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['icon', { name: 'label', required: true }, 'notifications', 'size', 'status', 'sublabel'],
})
export class RuxMonitoringIcon {
  protected el: HTMLRuxMonitoringIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMonitoringIcon extends Components.RuxMonitoringIcon {}


@ProxyCmp({
  defineCustomElementFn: defineRuxMonitoringProgressIcon,
  inputs: ['label', 'max', 'min', 'notifications', 'progress', 'range', 'sublabel']
})
@Component({
  selector: 'rux-monitoring-progress-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'max', 'min', 'notifications', 'progress', { name: 'range', required: true }, 'sublabel'],
})
export class RuxMonitoringProgressIcon {
  protected el: HTMLRuxMonitoringProgressIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxMonitoringProgressIcon extends Components.RuxMonitoringProgressIcon {}


@ProxyCmp({
  defineCustomElementFn: defineRuxNotification,
  inputs: ['closeAfter', 'hideClose', 'message', 'open', 'small', 'status']
})
@Component({
  selector: 'rux-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeAfter', 'hideClose', 'message', 'open', 'small', 'status'],
  outputs: ['ruxclosed'],
})
export class RuxNotification {
  protected el: HTMLRuxNotificationElement;
  @Output() ruxclosed = new EventEmitter<RuxNotificationCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxNotificationCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxNotification extends Components.RuxNotification {
  /**
   * Fires when the notification banner is closed
   */
  ruxclosed: EventEmitter<RuxNotificationCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxOption,
  inputs: ['disabled', 'label', 'value']
})
@Component({
  selector: 'rux-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, { name: 'value', required: true }],
})
export class RuxOption {
  protected el: HTMLRuxOptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxOption extends Components.RuxOption {}


@ProxyCmp({
  defineCustomElementFn: defineRuxOptionGroup,
  inputs: ['label']
})
@Component({
  selector: 'rux-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class RuxOptionGroup {
  protected el: HTMLRuxOptionGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxOptionGroup extends Components.RuxOptionGroup {}


@ProxyCmp({
  defineCustomElementFn: defineRuxPopUp,
  inputs: ['closeOnSelect', 'disableAutoUpdate', 'enableAnimationFrame', 'open', 'placement', 'strategy'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'rux-pop-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnSelect', 'disableAutoUpdate', 'enableAnimationFrame', 'open', 'placement', 'strategy'],
  outputs: ['ruxpopupopened', 'ruxpopupclosed'],
})
export class RuxPopUp {
  protected el: HTMLRuxPopUpElement;
  @Output() ruxpopupopened = new EventEmitter<RuxPopUpCustomEvent<any>>();
  @Output() ruxpopupclosed = new EventEmitter<RuxPopUpCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxPopUpCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxPopUp extends Components.RuxPopUp {
  /**
   * Emits when the pop up has opened
   */
  ruxpopupopened: EventEmitter<RuxPopUpCustomEvent<any>>;
  /**
   * Emits when the pop up has closed.
   */
  ruxpopupclosed: EventEmitter<RuxPopUpCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxProgress,
  inputs: ['hideLabel', 'max', 'value']
})
@Component({
  selector: 'rux-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideLabel', 'max', 'value'],
})
export class RuxProgress {
  protected el: HTMLRuxProgressElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxProgress extends Components.RuxProgress {}


@ProxyCmp({
  defineCustomElementFn: defineRuxPushButton,
  inputs: ['checked', 'disabled', 'icon', 'iconOnly', 'label', 'name', 'size', 'value']
})
@Component({
  selector: 'rux-push-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'icon', 'iconOnly', 'label', 'name', 'size', 'value'],
  outputs: ['ruxchange', 'ruxblur'],
})
export class RuxPushButton {
  protected el: HTMLRuxPushButtonElement;
  @Output() ruxchange = new EventEmitter<RuxPushButtonCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxPushButtonCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxPushButtonCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxPushButton extends Components.RuxPushButton {
  /**
   * Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxchange: EventEmitter<RuxPushButtonCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxPushButtonCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxRadio,
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'value'],
  outputs: ['ruxblur'],
})
export class RuxRadio {
  protected el: HTMLRuxRadioElement;
  @Output() ruxblur = new EventEmitter<RuxRadioCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxRadioCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxRadio extends Components.RuxRadio {
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxRadioCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxRadioGroup,
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'rux-radio-group',
  hostDirectives: [TextValueAccessor],
  imports: [TextValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorText', 'helpText', 'invalid', 'label', 'name', 'required', 'value'],
  outputs: ['ruxchange'],
})
export class RuxRadioGroup {
  protected el: HTMLRuxRadioGroupElement;
  @Output() ruxchange = new EventEmitter<RuxRadioGroupCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxRadioGroupCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxRadioGroup extends Components.RuxRadioGroup {
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxchange: EventEmitter<RuxRadioGroupCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxRuler,
  inputs: ['showStartOfDay']
})
@Component({
  selector: 'rux-ruler',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['showStartOfDay'],
})
export class RuxRuler {
  protected el: HTMLRuxRulerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxRuler extends Components.RuxRuler {}


@ProxyCmp({
  defineCustomElementFn: defineRuxSegmentedButton,
  inputs: ['data', 'disabled', 'selected', 'size']
})
@Component({
  selector: 'rux-segmented-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data', 'disabled', 'selected', 'size'],
  outputs: ['ruxchange'],
})
export class RuxSegmentedButton {
  protected el: HTMLRuxSegmentedButtonElement;
  @Output() ruxchange = new EventEmitter<RuxSegmentedButtonCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxSegmentedButtonCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxSegmentedButton extends Components.RuxSegmentedButton {
  /**
   * Fires when the value property has changed and emits that value on the event.detail.
   */
  ruxchange: EventEmitter<RuxSegmentedButtonCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxSelect,
  inputs: ['disabled', 'errorText', 'helpText', 'inline', 'inputId', 'invalid', 'label', 'labelId', 'multiple', 'name', 'required', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'rux-select',
  hostDirectives: [TextValueAccessor],
  imports: [TextValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'inline', 'inputId', 'invalid', 'label', 'labelId', 'multiple', 'name', 'required', 'size', 'value'],
  outputs: ['ruxchange', 'ruxblur'],
})
export class RuxSelect {
  protected el: HTMLRuxSelectElement;
  @Output() ruxchange = new EventEmitter<RuxSelectCustomEvent<void>>();
  @Output() ruxblur = new EventEmitter<RuxSelectCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxSelectCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxSelect extends Components.RuxSelect {
  /**
   * Event Emitted when the Value of the Select is Changed
   */
  ruxchange: EventEmitter<RuxSelectCustomEvent<void>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxSelectCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxSlider,
  inputs: ['axisLabels', 'disabled', 'errorText', 'helpText', 'label', 'max', 'min', 'minVal', 'name', 'step', 'strict', 'ticksOnly', 'value']
})
@Component({
  selector: 'rux-slider',
  hostDirectives: [TextValueAccessor],
  imports: [TextValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['axisLabels', 'disabled', 'errorText', 'helpText', 'label', 'max', 'min', 'minVal', 'name', 'step', 'strict', 'ticksOnly', 'value'],
  outputs: ['ruxinput', 'ruxblur', 'ruxchange'],
})
export class RuxSlider {
  protected el: HTMLRuxSliderElement;
  @Output() ruxinput = new EventEmitter<RuxSliderCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxSliderCustomEvent<any>>();
  @Output() ruxchange = new EventEmitter<RuxSliderCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxSliderCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxSlider extends Components.RuxSlider {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxinput: EventEmitter<RuxSliderCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxSliderCustomEvent<any>>;
  /**
   * Fired when the element's value is altered by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxchange: EventEmitter<RuxSliderCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxStatus,
  inputs: ['status']
})
@Component({
  selector: 'rux-status',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
})
export class RuxStatus {
  protected el: HTMLRuxStatusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxStatus extends Components.RuxStatus {}


@ProxyCmp({
  defineCustomElementFn: defineRuxSwitch,
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'rux-switch',
  hostDirectives: [BooleanValueAccessor],
  imports: [BooleanValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'value'],
  outputs: ['ruxchange', 'ruxinput', 'ruxblur'],
})
export class RuxSwitch {
  protected el: HTMLRuxSwitchElement;
  @Output() ruxchange = new EventEmitter<RuxSwitchCustomEvent<any>>();
  @Output() ruxinput = new EventEmitter<RuxSwitchCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxSwitchCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxSwitchCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxSwitch extends Components.RuxSwitch {
  /**
   * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxchange: EventEmitter<RuxSwitchCustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxinput: EventEmitter<RuxSwitchCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxSwitchCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTab,
  inputs: ['disabled', 'selected', 'small']
})
@Component({
  selector: 'rux-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'small'],
  outputs: ['ruxtabselected'],
})
export class RuxTab {
  protected el: HTMLRuxTabElement;
  @Output() ruxtabselected = new EventEmitter<RuxTabCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTabCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTab extends Components.RuxTab {
  /**
   * Fires when a tab is selected.
   */
  ruxtabselected: EventEmitter<RuxTabCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTabPanel
})
@Component({
  selector: 'rux-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTabPanel {
  protected el: HTMLRuxTabPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTabPanel extends Components.RuxTabPanel {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTabPanels
})
@Component({
  selector: 'rux-tab-panels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  outputs: ['ruxregisterpanels'],
})
export class RuxTabPanels {
  protected el: HTMLRuxTabPanelsElement;
  @Output() ruxregisterpanels = new EventEmitter<RuxTabPanelsCustomEvent<HTMLRuxTabPanelsElement[]>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTabPanelsCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTabPanels extends Components.RuxTabPanels {
  /**
   * Emits a list of the Tab Panels on the event.detail which have been passed in
   */
  ruxregisterpanels: EventEmitter<RuxTabPanelsCustomEvent<HTMLRuxTabPanelsElement[]>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTable
})
@Component({
  selector: 'rux-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTable {
  protected el: HTMLRuxTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTable extends Components.RuxTable {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableBody
})
@Component({
  selector: 'rux-table-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTableBody {
  protected el: HTMLRuxTableBodyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableBody extends Components.RuxTableBody {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableCell
})
@Component({
  selector: 'rux-table-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTableCell {
  protected el: HTMLRuxTableCellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableCell extends Components.RuxTableCell {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableHeader
})
@Component({
  selector: 'rux-table-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTableHeader {
  protected el: HTMLRuxTableHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeader extends Components.RuxTableHeader {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableHeaderCell
})
@Component({
  selector: 'rux-table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTableHeaderCell {
  protected el: HTMLRuxTableHeaderCellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeaderCell extends Components.RuxTableHeaderCell {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableHeaderRow
})
@Component({
  selector: 'rux-table-header-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTableHeaderRow {
  protected el: HTMLRuxTableHeaderRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableHeaderRow extends Components.RuxTableHeaderRow {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTableRow,
  inputs: ['selected']
})
@Component({
  selector: 'rux-table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected'],
})
export class RuxTableRow {
  protected el: HTMLRuxTableRowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTableRow extends Components.RuxTableRow {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTabs,
  inputs: ['compact', 'small']
})
@Component({
  selector: 'rux-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['compact', 'small'],
  outputs: ['ruxselected'],
})
export class RuxTabs {
  protected el: HTMLRuxTabsElement;
  @Output() ruxselected = new EventEmitter<RuxTabsCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTabsCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTabs extends Components.RuxTabs {
  /**
   * Fires whenever a new tab is selected, and emits the selected tab on the event.detail.
   */
  ruxselected: EventEmitter<RuxTabsCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTag,
  inputs: ['status']
})
@Component({
  selector: 'rux-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
})
export class RuxTag {
  protected el: HTMLRuxTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTag extends Components.RuxTag {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTextarea,
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'rux-textarea',
  hostDirectives: [TextValueAccessor],
  imports: [TextValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'invalid', 'label', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'size', 'value'],
  outputs: ['ruxchange', 'ruxinput', 'ruxblur'],
})
export class RuxTextarea {
  protected el: HTMLRuxTextareaElement;
  @Output() ruxchange = new EventEmitter<RuxTextareaCustomEvent<any>>();
  @Output() ruxinput = new EventEmitter<RuxTextareaCustomEvent<any>>();
  @Output() ruxblur = new EventEmitter<RuxTextareaCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTextareaCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTextarea extends Components.RuxTextarea {
  /**
   * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
   */
  ruxchange: EventEmitter<RuxTextareaCustomEvent<any>>;
  /**
   * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
   */
  ruxinput: EventEmitter<RuxTextareaCustomEvent<any>>;
  /**
   * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
   */
  ruxblur: EventEmitter<RuxTextareaCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTimeRegion,
  inputs: ['end', 'hideTimestamp', 'partial', 'selected', 'start', 'status']
})
@Component({
  selector: 'rux-time-region',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['end', 'hideTimestamp', 'partial', 'selected', 'start', 'status'],
})
export class RuxTimeRegion {
  protected el: HTMLRuxTimeRegionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTimeRegion extends Components.RuxTimeRegion {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTimeline,
  inputs: ['end', 'hasPlayedIndicator', 'hideJDay', 'interval', 'playhead', 'rulerPosition', 'showGrid', 'showSecondaryRuler', 'start', 'timezone', 'zoom']
})
@Component({
  selector: 'rux-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['end', 'hasPlayedIndicator', 'hideJDay', 'interval', 'playhead', 'rulerPosition', 'showGrid', 'showSecondaryRuler', 'start', 'timezone', 'zoom'],
})
export class RuxTimeline {
  protected el: HTMLRuxTimelineElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTimeline extends Components.RuxTimeline {}


@ProxyCmp({
  defineCustomElementFn: defineRuxToast,
  inputs: ['closeAfter', 'hideClose', 'message', 'status']
})
@Component({
  selector: 'rux-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeAfter', 'hideClose', 'message', 'status'],
  outputs: ['ruxtoastopen', 'ruxtoastclosed'],
})
export class RuxToast {
  protected el: HTMLRuxToastElement;
  @Output() ruxtoastopen = new EventEmitter<RuxToastCustomEvent<boolean>>();
  @Output() ruxtoastclosed = new EventEmitter<RuxToastCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxToastCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxToast extends Components.RuxToast {
  /**
   * Fires when a toast is opened
   */
  ruxtoastopen: EventEmitter<RuxToastCustomEvent<boolean>>;
  /**
   * Fires when a toast is closed
   */
  ruxtoastclosed: EventEmitter<RuxToastCustomEvent<boolean>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxToastStack,
  inputs: ['position'],
  methods: ['addToast']
})
@Component({
  selector: 'rux-toast-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
})
export class RuxToastStack {
  protected el: HTMLRuxToastStackElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxToastStack extends Components.RuxToastStack {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTooltip,
  inputs: ['delay', 'disableAutoUpdate', 'message', 'offset', 'open', 'placement', 'strategy'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'rux-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['delay', 'disableAutoUpdate', 'message', 'offset', 'open', 'placement', 'strategy'],
  outputs: ['ruxtooltipopened', 'ruxtooltipclosed'],
})
export class RuxTooltip {
  protected el: HTMLRuxTooltipElement;
  @Output() ruxtooltipopened = new EventEmitter<RuxTooltipCustomEvent<any>>();
  @Output() ruxtooltipclosed = new EventEmitter<RuxTooltipCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTooltipCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTooltip extends Components.RuxTooltip {
  /**
   * Emits when the tooltip has opened
   */
  ruxtooltipopened: EventEmitter<RuxTooltipCustomEvent<any>>;
  /**
   * Emits when the tooltip has closed.
   */
  ruxtooltipclosed: EventEmitter<RuxTooltipCustomEvent<any>>;
}


@ProxyCmp({
  defineCustomElementFn: defineRuxTrack,
  inputs: ['playhead']
})
@Component({
  selector: 'rux-track',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['playhead'],
})
export class RuxTrack {
  protected el: HTMLRuxTrackElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTrack extends Components.RuxTrack {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTree
})
@Component({
  selector: 'rux-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RuxTree {
  protected el: HTMLRuxTreeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RuxTree extends Components.RuxTree {}


@ProxyCmp({
  defineCustomElementFn: defineRuxTreeNode,
  inputs: ['expanded', 'selected'],
  methods: ['setExpanded', 'setSelected']
})
@Component({
  selector: 'rux-tree-node',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['expanded', 'selected'],
  outputs: ['ruxtreenodeselected', 'ruxtreenodeexpanded', 'ruxtreenodecollapsed'],
})
export class RuxTreeNode {
  protected el: HTMLRuxTreeNodeElement;
  @Output() ruxtreenodeselected = new EventEmitter<RuxTreeNodeCustomEvent<string>>();
  @Output() ruxtreenodeexpanded = new EventEmitter<RuxTreeNodeCustomEvent<string>>();
  @Output() ruxtreenodecollapsed = new EventEmitter<RuxTreeNodeCustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { RuxTreeNodeCustomEvent } from '@astrouxds/astro-web-components/components';

export declare interface RuxTreeNode extends Components.RuxTreeNode {
  /**
   * Fires when the user selects a tree node and emits the node's id on the event.detail.
   */
  ruxtreenodeselected: EventEmitter<RuxTreeNodeCustomEvent<string>>;
  /**
   * Fires when the user expands a tree node and emits the node's id on the event.detail.
   */
  ruxtreenodeexpanded: EventEmitter<RuxTreeNodeCustomEvent<string>>;
  /**
   * Fires when the user collapses a tree node and emits the node's id on the event.detail.
   */
  ruxtreenodecollapsed: EventEmitter<RuxTreeNodeCustomEvent<string>>;
}


