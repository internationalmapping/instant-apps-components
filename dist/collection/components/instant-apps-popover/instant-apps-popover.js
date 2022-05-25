import { Component, h, Element, Prop, State } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';
const CSS = {
  content: 'instant-apps-popover__content',
  buttonContainer: 'instant-apps-popover__button-container',
};
export class InstantAppsPopover {
  constructor() {
    this.placement = 'trailing-start';
  }
  componentDidLoad() {
    this.getMessages();
  }
  componentDidUpdate() {
    this.popoverEl.referenceElement = this.referenceElement;
  }
  render() {
    var _a;
    return (h("calcite-popover", { ref: (el) => (this.popoverEl = el), heading: this.popoverTitle, "auto-close": "true", dismissible: "true", placement: this.placement, "intl-close": (_a = this.messages) === null || _a === void 0 ? void 0 : _a.close, "trigger-disabled": "true", "ref-id": this.refId },
      h("div", { class: CSS.content },
        h("slot", { name: "action" }),
        h("section", null, this.content),
        this.parent.pagination ? this.renderPagination() : null)));
  }
  renderPagination() {
    var _a, _b;
    const { index, messages, parent } = this;
    const size = (_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.instantAppsPopovers) === null || _b === void 0 ? void 0 : _b.size;
    const isFirst = index === 0;
    const isLast = index === size - 1;
    return (h("div", { key: "pagination-button-container", class: CSS.buttonContainer },
      !isFirst ? (h("calcite-button", { key: "prev", onClick: () => parent === null || parent === void 0 ? void 0 : parent.previous(), appearance: "outline", color: "neutral" }, messages === null || messages === void 0 ? void 0 : messages.back)) : null,
      h("calcite-button", { key: "next", onClick: () => {
          if (isLast) {
            parent === null || parent === void 0 ? void 0 : parent.done();
          }
          else {
            parent === null || parent === void 0 ? void 0 : parent.next();
          }
        } }, isLast ? messages === null || messages === void 0 ? void 0 : messages.done : messages === null || messages === void 0 ? void 0 : messages.next)));
  }
  async getMessages() {
    const messages = await getLocaleComponentStrings(this.el);
    this.messages = messages[0];
  }
  static get is() { return "instant-apps-popover"; }
  static get originalStyleUrls() { return {
    "$": ["instant-apps-popover.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["instant-apps-popover.css"]
  }; }
  static get properties() { return {
    "popoverTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "popover-title",
      "reflect": true
    },
    "subtitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "subtitle",
      "reflect": true
    },
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content",
      "reflect": true
    },
    "mediaSrc": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "media-src",
      "reflect": true
    },
    "index": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "index",
      "reflect": true
    },
    "referenceElement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | HTMLElement",
        "resolved": "HTMLElement | string",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "reference-element",
      "reflect": true
    },
    "parent": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "InstantAppsPopovers",
        "resolved": "InstantAppsPopovers",
        "references": {
          "InstantAppsPopovers": {
            "location": "import",
            "path": "../instant-apps-popovers/instant-apps-popovers"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "beforeOpen": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => Promise<void>",
        "resolved": "() => Promise<void>",
        "references": {
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'trailing-start'"
    },
    "refId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ref-id",
      "reflect": false
    }
  }; }
  static get states() { return {
    "messages": {}
  }; }
  static get elementRef() { return "el"; }
}
