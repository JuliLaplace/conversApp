import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.conservapp.app',
  appName: 'ConversApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      "launchAutoHide": true,
      "androidScaleType": "CENTER_CROP",
      splashImmersive: true,
      splashFullScreen: true,
      androidSplashResourceName: "splash",
      "useDialog": false,
    },
  },
};

export default config;
