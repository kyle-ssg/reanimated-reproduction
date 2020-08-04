import omit from 'lodash/omit';
import filter from 'lodash/filter';
import { SyntheticEvent } from 'react';

const KEY_Y = 89;
const KEY_Z = 90;
const Utils = {
  // eslint-disable-next-line
    emailRegex: /^([\w-+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  // eslint-disable-next-line
    urlRegex: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]+(:[0-9]{1,5})?(\/.*)?$/,

  keys: {
    isUndo /* istanbul ignore next */(e: KeyboardEvent): boolean {
      if (!e) return;
      return (
        (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEY_Y : KEY_Z)
      );
    },
    isEscape /* istanbul ignore next */(e: KeyboardEvent): boolean {
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 27 && !e.shiftKey && !e.ctrlKey;
    },
    isRedo /* istanbul ignore next */(e: KeyboardEvent): boolean {
      if (!e) return;
      return (
        (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? KEY_Z : KEY_Y)
      );
    },
    isBackspace /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 8 && !e.shiftKey && !e.ctrlKey;
    },
    isUp /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 38 && !e.shiftKey && !e.ctrlKey;
    },
    isDown /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 40 && !e.shiftKey && !e.ctrlKey;
    },
    isLeft /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 37 && !e.shiftKey && !e.ctrlKey;
    },
    isRight /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 39 && !e.shiftKey && !e.ctrlKey;
    },
    isTab /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 9 && !e.shiftKey && !e.ctrlKey;
    },
    isEnter /* istanbul ignore next */(e: KeyboardEvent): boolean {
      // returns bool
      if (!e) return;
      const code = e.keyCode ? e.keyCode : e.which;
      return code === 13 && !e.shiftKey && !e.ctrlKey;
    },
  },

  getTypedValue(str: any) {
    if (typeof str !== 'string') {
      return str;
    }

    const isNum = /^\d+$/.test(str) || /^\d+\.\d+$/.test(str);

    if (str === 'true') {
      return true;
    }
    if (str === 'false') {
      return false;
    }

    if (isNum) {
      if (str.indexOf('.') !== -1) {
        return parseFloat(str);
      }
      return parseInt(str);
    }

    return str;
  },

  preventDefault /* istanbul ignore next */(e?: Event): void {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  },

  stopPropagation /* istanbul ignore next */(e?: Event): void {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  },

  toParam(obj?: Record<string, any>): string {
    // {min:100,max:200} -> ?min=100&max=200
    if (!obj) return '';
    const allDefined = omit(
      obj,
      filter(
        Object.keys(obj),
        (key) => typeof obj[key] === 'undefined' || obj[key] === null,
      ),
    );
    return Object.keys(allDefined)
      .map((k) => {
        // @ts-ignore
        let val = allDefined[k];
        if (Array.isArray('array')) {
          val = val.join(',');
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(val)}`;
      })
      .join('&');
  },

  fromParam(str?: string): Record<string, any> {
    // {min:100,max:200} <- ?min=100&max=200
    const documentSearch =
      typeof document === 'undefined' ? '' : document.location.search;

    if (!str && !documentSearch) {
      return {};
    }
    // eslint-disable-next-line
        const urlString= (str || documentSearch).replace(/(^\?)/, '');
    return JSON.parse(
      `{"${urlString.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
      (key, value) => (key === '' ? value : decodeURIComponent(value)),
    );
  },

  capitalize(s?: string): string {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  },

  safeParseEventValue /* istanbul ignore next */(e?: SyntheticEvent): any {
    // safe attempt to parse form value
    if (!e) {
      return e;
    }
    if (!e.target) {
      return e;
    }

    const target = e.target as HTMLFormElement;

    if (target.getAttribute) {
      return target.type === 'checkbox' || target.type === 'radio'
        ? target.getAttribute('checked')
        : typeof target.value === 'string'
        ? target.value
        : target.getAttribute('data-value') || target.getAttribute('value');
    }

    if (target && target.textContent) {
      return (e.target as HTMLElement).textContent;
    }
    return target ? target.value : e;
  },

  isValidEmail(text?: string): boolean {
    // returns bool
    return text && Utils.emailRegex.test(text);
  },

  GUID(append = ''): string {
    let d = new Date().getTime();
    const uuid = 'xxxx-xxxx-xxxx'.replace(/[xy]/g, (c) => {
      // eslint-disable-next-line
            const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      // eslint-disable-next-line
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return append ? `${uuid}-${append}` : uuid;
  },

  reactChildIsString(children): boolean {
    return (
      typeof children === 'string' ||
      (children && children.length === 1 && typeof children[0] === 'string')
    );
  },
};
export default Utils;
