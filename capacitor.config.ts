import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'my-calculator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
