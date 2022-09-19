import { createStack } from '@mobile/services/navigation';
import React from 'react';
import LoginScreen from './Login/LoginScreen';
import RecoveryScreen from './Recovery/RecoveryScreen';

const AuthNavigationStack = () => {
  const AuthStack = createStack();

  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Recovery" component={RecoveryScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigationStack;
