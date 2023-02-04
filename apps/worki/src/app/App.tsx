/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView } from 'react-native';
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

  // once upon a time, probably now, i needed to do this to make these colors work (!)
  // are you confused? you should be. i was. i still am.
  tw(
    'text-yellow-400 bg-yellow-400 text-blue-600 bg-blue-600 bg-green-600 text-green-600'
  );

  return (
    <SafeAreaView style={tw('h-full')}>
      <Timer />
    </SafeAreaView>
  );
};

export default App;
