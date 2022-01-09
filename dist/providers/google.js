import { OAuth2Provider } from './oauth2.js';
import '../helpers.js';
import './oauth2.base.js';
import './base.js';

const defaultConfig = {
  id: "google",
  scope: ["openid", "profile", "email"],
  accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
  authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
  profileUrl: "https://openidconnect.googleapis.com/v1/userinfo"
};
class GoogleOAuth2Provider extends OAuth2Provider {
  constructor(config) {
    super({
      ...defaultConfig,
      ...config
    });
  }
}

export { GoogleOAuth2Provider };
//# sourceMappingURL=google.js.map
