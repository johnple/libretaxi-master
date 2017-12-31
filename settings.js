import appRoot from 'app-root-path';

/**
 * Settings
 *
 * @Johnple (femiadeoti95@gmail.com)
 * @date 2017-12-19
 * @version 1.1
 * @since 0.1.0
 */
export default class Settings {

  /**
   * Constructor.
   *
   * @param {Object} overrides - settings overrides. Useful for testing.
   */
  constructor(overrides) {
    // Firebase connection string
    this.STATEFUL_CONNSTR = 'https://githubjohnple-development.firebaseio.com/';

    // path to Firebase credentials file
    this.STATEFUL_CREDENTIALS_FILE = './libretaxi-development-credentials.json';

    // Telegram token
    this.TELEGRAM_TOKEN = '465170298:AAFwL8Qn9UgXOe9YsFWZIwnAVbFz7k_re_M';

    // default language
    this.DEFAULT_LANGUAGE = 'en';

    // log file
    this.LOG_FILE = `${appRoot.path}/libretaxi.log`;

    // maximum allowed radius for drivers
    this.MAX_RADIUS = 10000;

    // geocoding api key, see
    // https://developers.google.com/maps/documentation/geocoding/intro
    this.GEOCODING_API_KEY = 'AIzaSyCGkKiXfxUmxa4AfvsYq3VyoQyX77dRL9g';

    Object.assign(this, overrides);
  }
}
