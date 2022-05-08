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
}

export default Utilities;
