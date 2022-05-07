import { BUTTON_TYPE_ENUM, LAYOUTS, SPECIAL_BUTTONS } from '../constants/constants';

/**
 * Utility Service
 */
class Utilities {
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

  static getLocalizedDisplayName(locale, button) {
    const currentLayout = LAYOUTS[locale];

    return LAYOUTS[locale];
  }

  static getFunctionalButton(button) {
    return SPECIAL_BUTTONS[button];
  }

  /**
 *
 * @param {string} language Language code to change to
 * @returns void
 */
  static changeLanguage(language) {
    const currentLanguage = language || defaultLanguage;
    return currentLanguage;
  }

//   getButtonDisplayName
}

export default Utilities;
