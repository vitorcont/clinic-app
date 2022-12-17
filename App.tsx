import MainNavigationStack from '@mobile/pages/MainNavigationStack';
import { navigationRef } from '@mobile/services/navigation';
import store from '@mobile/store';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { setupMocks } from '@mobile/mock/utils';
import 'intl';
import 'intl/locale-data/jsonp/en';
import './locale';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('@mobile/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('@mobile/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('@mobile/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('@mobile/assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('@mobile/assets/fonts/Poppins-ExtraLight.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    setupMocks();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <FlashMessage position="top" />
        <NavigationContainer ref={navigationRef}>
          <MainNavigationStack />
        </NavigationContainer>
      </SafeAreaProvider>
      <View onLayout={onLayoutRootView} />
    </Provider>
  );
};

export default App;
