import {
  BUTTON_TYPE_ENUM,
  LAYOUTS, SPECIAL_BUTTONS,
  DEFAULT_LANGUAGE_CODE,
} from '../constants/constants';

/**
 * Utility Service
 */
class Utilities {
  static getCurrentLocale() {
    return localStorage.getItem('currentLanguage') || DEFAULT_LANGUAGE_CODE;
  }

  static setCurrentLocale(locale) {
    localStorage.setItem('currentLanguage', locale);
  }

  /**
   * Retrieve button type
   *
   * @param  {string} button The button's layout name
   * @return {string} The button type
   */
  static getButtonType(button) {
    return button.includes('{') && button.includes('}') && button !== '{//}'
      ? BUTTON_TYPE_ENUM.FUNCTIONAL : BUTTON_TYPE_ENUM.GENERAL;
  }

  static getLayout(locale) {
    return LAYOUTS[locale];
  }

  static getFunctionalButton(button) {
    return SPECIAL_BUTTONS[button];
  }

  /**
   * Listen to change language hotkey, save current locale
   *
   */
  // if is not stable try this: https://plnkr.co/edit/W0sa74x8GS59kXwb?p=preview&preview
  // static createLanguageSwitcher() {
  //   this.#setCurrentLocale(this.getCurrentLocale());
  //   document.addEventListener('keyup', (event) => {
  //     if (event.ctrlKey && event.code === 'AltLeft') {
  //       const locale = this.getCurrentLocale() === DEFAULT_LANGUAGE_CODE
  //         ? SECOND_LANGUAGE_CODE : DEFAULT_LANGUAGE_CODE;
  //       this.#setCurrentLocale(locale);
  //     }
  //   }, false);
  // }
}

export default Utilities;
