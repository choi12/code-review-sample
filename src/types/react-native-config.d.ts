type Url = `https://${string}`;
type EmailAddress = `${string}@${string}.${string}`;

declare module 'react-native-config' {
  interface NativeConfig {
    ENV: 'DEVELOPMENT' | 'PRODUCTION';
    SENTRY_DSN: Url;
    CODEPUSH_KEY_ANDROID: string;
    CODEPUSH_KEY_IOS: string;
    API_SERVER: string;
    API_LOCAL: string;
    SERVER_IP: string;
    EMAIL_ADDRESS: EmailAddress;
    GOOGLE_CLIENT_ID_IOS: string;
    GOOGLE_CLIENT_ID_ANDROID: string;
    APPLE_CLIENT_ID_ANDROID: string;
    APPLE_REDIRECT_URI: Url;
    GOOGLE_PLAY_STORE_LINK: Url;
    APPLE_APP_STORE_LINK: Url;
  }

  const Config: NativeConfig;
  export default Config;
}
