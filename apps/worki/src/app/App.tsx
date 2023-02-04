/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from '../tailwind.json';
import Timer from '../timer/timer';

export const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <AppWithTw />
    </TailwindProvider>
  );
};

/** useTailwind() must be in component that is a child of the one that has tw provider */
const AppWithTw = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={tw('h-full justify-center')}>
      <View style={tw('p-3 items-center')}>
        <Timer />
      </View>
    </SafeAreaView>
  );
};

export default App;
