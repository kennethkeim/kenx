/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { View, Text } from '../styled-components/Themed';
import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from '../tailwind.json';

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
    <SafeAreaView style={tw('h-full')}>
      <ScrollView>
        <View style={tw('p-3 items-center')}>
          <Text>Hello there 👋</Text>
          <Text>Time to get to Worki</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
