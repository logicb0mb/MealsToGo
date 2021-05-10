import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';

import { ThemeProvider } from 'styled-components/native';

import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation/index';
import { theme } from './src/infrastructure/theme/index';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import firebaseConfig from './firebaseConfiguration';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldFontsLoaded] = useFontsOswald({ Oswald_400Regular });
  const [latoFontsLoaded] = useFontsLato({ Lato_400Regular });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
