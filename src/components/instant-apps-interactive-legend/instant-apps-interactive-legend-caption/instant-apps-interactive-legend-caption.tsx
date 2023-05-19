import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { validateInteractivity } from '../support/helpers';

const CSS = {
  label: 'esri-legend__service-label',
  header: 'esri-widget__heading',
  interacitveLegendHeader: 'instant-apps-interactive-legend__header',
  headerActionContainer: 'instant-apps-interactive-legend__header-action-container',
};

@Component({
  tag: 'instant-apps-interactive-legend-caption',
  styleUrl: 'instant-apps-interactive-legend-caption.scss',
  scoped: true,
})
export class InstantAppsInteractiveLegendCaption {
  @Prop()
  legendvm: __esri.LegendViewModel;

  @Prop()
  featureCount: boolean;

  @Prop()
  activeLayerInfo: __esri.ActiveLayerInfo;

  @Prop()
  messages;

  @Element()
  el;

  @Prop()
  isChild = false;

  @Prop({
    mutable: true,
  })
  expanded: boolean = true;

  @Event({
    eventName: 'legendCaptionExpandUpdated',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  legendCaptionExpandUpdatedEvent: EventEmitter<boolean>;

  render() {
    const isInteractive = validateInteractivity(this.activeLayerInfo);

    const { expanded } = this;

    const expandCollapseText = expanded ? this.messages?.collapse : this.messages?.expand;

    const isChild = this.isChild ? ' instant-apps-interactive-legend__heading-text--group-item' : '';

    return (
      <header key={`${this.activeLayerInfo?.layer?.id}-header`} class={CSS.interacitveLegendHeader}>
        <span>
          <span class={CSS.headerActionContainer}>
            <h3 class={`${CSS.header} ${CSS.label}${isChild}`}>{this.activeLayerInfo?.title}</h3>
            <calcite-action
              onClick={this.toggleExpanded()}
              icon={expanded ? 'chevron-down' : 'chevron-right'}
              appearance="transparent"
              text={expandCollapseText}
              label={expandCollapseText}
            />
          </span>
          {this.featureCount && isInteractive ? (
            <instant-apps-interactive-legend-count layer-id={this.activeLayerInfo?.layer?.id} show-total={true} messages={this.messages} legendvm={this.legendvm} />
          ) : null}
        </span>
      </header>
    );
  }

  toggleExpanded(): () => void {
    return () => {
      this.expanded = !this.expanded;
      this.legendCaptionExpandUpdatedEvent.emit(this.expanded);
    };
  }
}
