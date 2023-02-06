import React from 'react';

import { Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

/* eslint-disable-next-line */
export interface TickerProps {
  textClass: string;
  minutes: number;
  seconds: number;
}

export function Ticker({ textClass, minutes, seconds }: TickerProps) {
  const tw = useTailwind();

  return (
    <Text style={tw(`text-9xl font-bold ${textClass}`)}>
      {toTimeFormat(minutes)}:{toTimeFormat(seconds)}
    </Text>
  );
}

function toTimeFormat(num: number): string {
  return String(Math.floor(num)).padStart(2, '0');
}

export default Ticker;
