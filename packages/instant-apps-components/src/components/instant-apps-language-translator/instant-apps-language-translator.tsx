import { Component, Host, Prop, h, Event } from '@stencil/core';
import { Element, EventEmitter, HostElement, Watch, State, Listen, Fragment, Method } from '@stencil/core/internal';

import { generateUIData, getLocales, getMessages, getUIDataKeys, initExternalCKEditorStyles, updateLastSave } from './support/utils';

import { languageTranslatorState, store } from './support/store';

import { EIcons } from './support/enum';
import { AppSettings, LocaleItem, LocaleSettingItem, LocaleUIData } from './support/interfaces';

import LanguageTranslator_t9n from '../../assets/t9n/instant-apps-language-translator/resources.json';
import { loadModules } from '../../utils/loadModules';
import { getComponentClosestLanguage } from '../../utils/locale';
import { getPortalItemResource, fetchResourceData } from '../../utils/languageSwitcher';
import { LANGUAGE_DATA } from 'templates-common-library/structuralFunctionality/language-switcher/support/constants';

const BASE = 'instant-apps-language-translator';

const CSS = {
  BASE,
  header: `${BASE}__header`,
  headerText: `${BASE}__header-text`,
  savingIndicator: `${BASE}__saving-indicator`,
  closeButton: `${BASE}__close-button`,
  headerTip: `${BASE}__header-tip`,
  topBar: `${BASE}__top-bar`,
  topBarSection: `${BASE}__top-bar-section`,
  collapseSearchContainer: `${BASE}__collapse-search-container`,
  userLangText: `${BASE}__user-lang-text`,
  lastItem: `${BASE}--last-item`,
  writingIcon: `${BASE}__writing-icon`,
  primaryContent: `${BASE}__primary-content`,
  lastAutoSave: `${BASE}__last-auto-save`,
};

/**
 * @slot primary-custom-action - A slot for adding a primary action.
 * @slot secondary-custom-action - A slot for adding a secondary action.
 * @slot translation-custom-action - A slot for adding a custom action in the translation header section of the UI.
 */

@Component({
  tag: 'instant-apps-language-translator',
  styleUrl: 'instant-apps-language-translator.scss',
  scoped: true,
})
export class InstantAppsLanguageTranslator {
  intl: __esri.intl;
  request: __esri.request;

  @Element()
  el: HTMLInstantAppsLanguageTranslatorElement;

  /**
   * Instant App portal item - used to fetch it's associated portal item resource. The portal item resource will contain the user-defined translated strings.
   */
  @Prop()
  portalItem!: __esri.PortalItem;

  /**
   * Object used to render each `instant-apps-translator-item`, containing either a `calcite-input` or rich text editor (handles HTML formatting); and, the languages to translate within the dropdown.
   */
  @Prop()
  appSettings: AppSettings;

  /**
   * Specified languages that the user-defined strings will be translated in.
   */
  @Prop()
  locales: LocaleItem[];

  /**
   * Controls the open/close state of the modal.
   */
  @Prop({
    mutable: true,
  })
  open = false;

  /**
   * Function to be called when the value in a user locale input has changed. This function will have 2 arguments - fieldName and value - and will return a promise.
   */
  @Prop()
  userLocaleInputOnChangeCallback: (fieldName: string, value: string) => Promise<void>;

  /**
   * Function that is called when the value in a translated locale's input has changed. This function will have 4 arguments - fieldName, value, locale, and resource - and will return a promise. The callback function can be used to construct the data of key-value pairs that will be written to the portal item resource.
   */
  @Prop()
  translatedLocaleInputOnChangeCallback: (fieldName: string, value: string, locale: string, resource: __esri.PortalItemResource) => Promise<void>;

  @State()
  saving = false;

  @State()
  messages: typeof LanguageTranslator_t9n;

  @State()
  isCollapse = true;

  @Listen('translatorItemDataUpdated', { target: 'window' })
  handleT9nItemUpdate(): void {
    this.translatorDataUpdated.emit();
  }

  @Watch('locales')
  handleLocaleChange() {
    this.initUIData();
    this.initSelectLanguage();
  }

  @Watch('appSettings')
  handleAppSettings() {
    this.initUIData();
    this.initSelectLanguage();
  }

  /**
   * Fires when a translation input's value has changed.
   */
  @Event()
  translatorDataUpdated: EventEmitter<string>;

  componentWillLoad() {
    initExternalCKEditorStyles();
  }

  async componentDidLoad() {
    this.initialize();
  }

  async initialize(): Promise<void> {
    const [intl, request] = await loadModules(['esri/intl', 'esri/request']);
    this.intl = intl;
    this.request = request;
    await this.initMessages();
    this.initUIData();
    this.initPortalItemResourceT9nData();
    this.initSelectLanguage();
  }

  // Init t9n files
  async initMessages(): Promise<void> {
    try {
      const { el } = this;
      const messages = await getMessages(el);
      this.messages = messages;
      return Promise.resolve();
    } catch {
      return Promise.reject();
    }
  }

  initUIData(): void {
    // Initialize store with UI Data (for translator-item rendering)
    const { appSettings, locales } = this;
    const uiData = generateUIData(appSettings, locales) as LocaleUIData;
    store.set('uiData', uiData);
  }

  // Initialize selected language
  initSelectLanguage(): void {
    if (!this.intl) return;
    const { locales } = this;
    const initialLanguage = locales?.[0]?.locale ?? this.intl.getLocale();
    const currentLanguage = store.get('currentLanguage');
    const reselectLanguage = this.locales.filter(locale => locale.locale === currentLanguage).length === 0;
    if (reselectLanguage) {
      store.set('currentLanguage', initialLanguage);
    }
  }

  // Fetch portal item resource associated with portal item. Fetch and store t9n data
  async initPortalItemResourceT9nData(): Promise<void> {
    try {
      const portalItemResource = (await getPortalItemResource(this.portalItem)) as __esri.PortalItemResource;
      store.set('portalItemResource', portalItemResource as __esri.PortalItemResource);
      const t9nData = await fetchResourceData(portalItemResource);
      store.set('lastSave', t9nData.lastSave);
      store.set('portalItemResourceT9n', t9nData ?? {});
    } catch {}
  }

  render(): HostElement {
    return (
      <Host>
        {this.renderModal()}
        {this.renderPopoverTip()}
      </Host>
    );
  }

  renderModal(): HTMLCalciteModalElement {
    return (
      <calcite-modal open={this.open} scale="l" fullscreen={true} onCalciteModalClose={this.close.bind(this)}>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderPrimaryContent()}
      </calcite-modal>
    );
  }

  renderPopoverTip(): HTMLCalcitePopoverElement {
    return (
      <calcite-popover label="" referenceElement="headerTip" placement="trailing" auto-close={true} closable>
        <div class={CSS.headerTip}>{this.messages?.headerTip}</div>
      </calcite-popover>
    );
  }

  renderHeader(): HTMLElement {
    return (
      <header class={CSS.header} slot="header">
        {this.renderHeaderText()}
      </header>
    );
  }

  renderHeaderText(): HTMLDivElement {
    const { messages } = this;
    return (
      <div class={CSS.headerText}>
        <span>{messages?.header}</span>
        <calcite-button id="headerTip" appearance="transparent">
          <calcite-icon icon={EIcons.Popover} scale="s" />
        </calcite-button>
      </div>
    );
  }

  renderSavingIndicator(): HTMLDivElement {
    const t9n = this.messages?.saving;
    return (
      <div class={CSS.savingIndicator}>
        <calcite-loader label={t9n} inline={true} />
        <span>{t9n}</span>
      </div>
    );
  }

  renderContent(): HTMLDivElement {
    const localeItems = getLocales(this.locales);
    return (
      <div slot="content">
        {this.renderTopBar()}
        {localeItems?.length > 0 ? this.renderUIData() : this.renderNotice()}
      </div>
    );
  }

  renderTopBar(): HTMLDivElement {
    return (
      <div class={CSS.topBar}>
        {this.renderLeadingTopBarSection()}
        {this.renderTrailingTopBarSection()}
      </div>
    );
  }

  renderLeadingTopBarSection(): HTMLDivElement {
    return (
      <div class={CSS.topBarSection}>
        {this.renderUserLocale()}
        {this.renderCollapseSearchContainer()}
      </div>
    );
  }

  renderUserLocale(): HTMLDivElement {
    const languages = this.messages?.languages;
    const localeFlag = getComponentClosestLanguage() as string;
    const langText = languages?.[localeFlag];
    return <div class={CSS.userLangText}>{langText}</div>;
  }

  renderCollapseSearchContainer(): HTMLDivElement {
    return (
      <div class={CSS.collapseSearchContainer}>
        {this.renderExpandCollapseButton()}
        {this.renderSearch()}
      </div>
    );
  }

  renderExpandCollapseButton(): HTMLCalciteButtonElement {
    const { isCollapse, messages } = this;
    const text = isCollapse ? messages?.collapseAll : messages?.expandAll;
    return (
      <Fragment>
        <slot name="primary-custom-action"></slot>
        <slot name="secondary-custom-action"></slot>
        <calcite-button onClick={this.handleExpandCollapseAll.bind(this)} appearance="transparent" icon-start={EIcons.ExpandCollapse}>
          {text}
        </calcite-button>
      </Fragment>
    );
  }

  renderSearch(): HTMLInstantAppsLanguageTranslatorSearchElement {
    return (
      <instant-apps-language-translator-search
        onSuggestionSelected={this.onSuggestionSelect.bind(this)}
        t9nPlaceholder={this.messages?.searchPlaceholder}
      ></instant-apps-language-translator-search>
    );
  }

  renderTrailingTopBarSection(): void {
    return (
      <div class={CSS.topBarSection}>
        {this.renderLanguageSelection()}
        <slot name="translation-custom-action"></slot>
      </div>
    );
  }

  renderLanguageSelection(): HTMLCalciteLabelElement {
    return (
      <calcite-label layout="inline">
        {this.messages?.translatedLanguage}
        <calcite-select label="" onCalciteSelectChange={this.handleLanguageSelection.bind(this)}>
          {this.renderTranslatedLangOptions()}
        </calcite-select>
      </calcite-label>
    );
  }

  renderTranslatedLangOptions(): HTMLCalciteOptionElement[] {
    const uiData = store.get('uiData');
    const locales = uiData?.get('locales') as LocaleItem[];
    const localeFlags = getLocales(locales);
    const partialSupportLocales = Object.keys(LANGUAGE_DATA.partial);
    return localeFlags?.map(locale => {
      const isPartial = partialSupportLocales.indexOf(locale) !== -1;
      const type = isPartial ? 'partial' : 'full';
      const data = LANGUAGE_DATA[type];
      const { language, translated } = data[locale];
      const text = `${language} - ${translated}`;
      return (
        <calcite-option key={`translated-lang-option-${locale}`} value={locale}>
          {text}
        </calcite-option>
      );
    });
  }

  renderUIData(): HTMLDivElement | undefined {
    if (!languageTranslatorState?.uiData) return;
    const uiDataKeys = getUIDataKeys();
    return <div>{uiDataKeys?.map((key, keyIndex) => this.renderUIDataItem(key, keyIndex, uiDataKeys.length))}</div>;
  }

  renderNotice(): HTMLCalciteNoticeElement {
    const noLanguage = this.messages?.noLanguage;
    return (
      <calcite-notice open icon="exclamation-mark-triangle" kind="warning">
        <div slot="title">{noLanguage?.title}</div>
        <div slot="message">{noLanguage?.message}</div>
      </calcite-notice>
    );
  }

  renderUIDataItem(key: string, keyIndex: number, uiDataKeysLen: number): HTMLDivElement {
    const translatedLanguageLabels = this.appSettings?.translatedLanguageLabels?.[languageTranslatorState.currentLanguage as string];
    const isLast = `${keyIndex === uiDataKeysLen - 1 ? CSS.lastItem : ''}`;
    const setting = this.appSettings.content.filter(contentItem => contentItem.id === key)[0];
    return (
      <instant-apps-language-translator-item
        key={`${key}-${keyIndex}`}
        class={isLast}
        fieldName={key}
        translatedLanguageLabels={translatedLanguageLabels}
        setting={setting}
        userLocaleInputOnChangeCallback={async (fieldName: string, value: string) => {
          try {
            await this.userLocaleInputOnChangeCallback(fieldName, value);
            const resource = store.get('portalItemResource') as __esri.PortalItemResource;
            updateLastSave(resource);
          } catch {}
        }}
        translatedLocaleInputOnChangeCallback={async (fieldName: string, value: string, locale: string, resource: __esri.PortalItemResource) => {
          try {
            await this.translatedLocaleInputOnChangeCallback(fieldName, value, locale, resource);
            updateLastSave(resource);
          } catch {}
        }}
      />
    );
  }

  renderPrimaryContent(): HTMLDivElement {
    return (
      <div class={CSS.primaryContent} slot="primary">
        {store.get('saving') ? this.renderSavingIndicator() : null}
        {store.get('lastSave') ? (
          <span key="last-save" class={CSS.lastAutoSave}>
            {this.messages?.lastAutoSave} {this.intl.formatDate(store.get('lastSave') as number)}
          </span>
        ) : null}
        <calcite-button onClick={() => (this.open = false)} class={CSS.closeButton}>
          {this.messages?.close}
        </calcite-button>
      </div>
    );
  }

  handleExpandCollapseAll(): void {
    this.isCollapse = !this.isCollapse;
    const uiData = new Map(languageTranslatorState.uiData);
    const uiDataKeys = getUIDataKeys();
    uiDataKeys.forEach(key => ((uiData.get(key) as LocaleSettingItem).expanded = this.isCollapse));
    store.set('uiData', uiData as LocaleUIData);
  }

  onSuggestionSelect(e: CustomEvent): void {
    const fieldName = e.detail;
    const uiData = new Map(languageTranslatorState.uiData);
    const uiDataKeys = getUIDataKeys();
    const handleSelection = (key: string) => {
      const setting = uiData.get(key) as LocaleSettingItem;
      if (key === fieldName) {
        setting.selected = true;
        return;
      }
      setting.selected = false;
    };
    uiDataKeys.forEach(handleSelection);
    store.set('uiData', uiData);
  }

  close(): void {
    this.open = false;
  }

  handleLanguageSelection(e: CustomEvent): void {
    const node = e.target as HTMLCalciteSelectElement;
    const value = node.value;
    store.set('currentLanguage', value);
  }

  /**
   * Gets translation data for all languages and fields.
   */
  @Method()
  async getTranslationData() {
    return store.get('portalItemResourceT9n');
  }

  /**
   * Updates translation data for all languages and fields.
   */
  @Method()
  async setTranslationData(data: any) {
    return store.set('portalItemResourceT9n', data);
  }

  /**
   * Gets portal item resource containing the translation data.
   */
  @Method()
  async getPortalItemResource() {
    return store.get('portalItemResource') as __esri.PortalItemResource;
  }

  /**
   * Batch write data to associated portal item resource.
   */
  @Method()
  async batchWriteToPortalItemResource(data: any) {
    store.set('saving', true);
    try {
      const resource = await this.getPortalItemResource();
      const lastSave = Date.now();
      store.set('lastSave', lastSave);
      const dataStr = JSON.stringify({ ...data, lastSave });
      const blobParts = [dataStr];
      const options = { type: 'application/json' };
      const blob = new Blob(blobParts, options);
      await resource.update(blob);
      setTimeout(() => store.set('saving', false), 1500);
      this.translatorDataUpdated.emit();
      return Promise.resolve();
    } catch (err) {
      console.error('Error writing to portal item resource: ', err);
      store.set('saving', false);
      return Promise.reject();
    }
  }
}
