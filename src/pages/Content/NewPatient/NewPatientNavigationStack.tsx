import { createStack, navigationRef } from '@mobile/services/navigation';
import React from 'react';
import Confirmation from './Confirmation/Confirmation';
import Form from './Form/Form';

const NewPatientNavigationStack = () => {
  const NewPatientStack = createStack();

  return (
    <NewPatientStack.Navigator
      initialRouteName="Form"
      screenOptions={{ headerShown: false }}
    >
      <NewPatientStack.Screen name="Form" component={Form} />
      <NewPatientStack.Screen name="Confirmation" component={Confirmation} />
    </NewPatientStack.Navigator>
  );
};

export default NewPatientNavigationStack;
