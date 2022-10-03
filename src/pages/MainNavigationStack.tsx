import { createStack, navigationRef } from '@mobile/services/navigation';
import store from '@mobile/store';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AuthNavigationStack from './Auth/AuthNavigationStack';
import ContentNavigationStack from './Content/ContentNavigationStack';

const MainNavigationStack = () => {
  const MainStack = createStack();

  return (
    <MainStack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Auth" component={AuthNavigationStack} />
      <MainStack.Screen name="Content" component={ContentNavigationStack} />
    </MainStack.Navigator>
  );
};

export default MainNavigationStack;
