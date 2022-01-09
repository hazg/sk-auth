import { OAuth2Provider } from './oauth2.js';
import '../helpers.js';
import './oauth2.base.js';
import './base.js';

const defaultConfig = {
  id: "twitch",
  scope: "user:read:email",
  accessTokenUrl: "https://id.twitch.tv/oauth2/token",
  authorizationUrl: "https://id.twitch.tv/oauth2/authorize",
  profileUrl: "https://api.twitch.tv/helix/users"
};
class TwitchOAuth2Provider extends OAuth2Provider {
  constructor(config) {
    super({
      ...defaultConfig,
      ...config
    });
  }
  async getUserProfile(tokens) {
    const headers = {
      "Client-ID": this.config.clientId + "",
      Accept: "application/vnd.twitchtv.v5+json",
      Authorization: `Bearer ${tokens.access_token}`
    };
    const { data: [profile] } = await fetch(this.config.profileUrl, { headers }).then((res) => res.json());
    return profile;
  }
}

export { TwitchOAuth2Provider };
//# sourceMappingURL=twitch.js.map
