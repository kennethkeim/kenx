import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { sessions, sessionTimes } from '../constants/sessions';
import Ticker from '../ticker/ticker';

/* eslint-disable-next-line */
export interface TimerProps {}

/** keep this just under a full second to ensure it runs every second even if setInterval has small inconsistencies */
const intervalMs = 990;

export function Timer(props: TimerProps) {
  const [now, setNow] = useState(getCurrentTime());
  const minSinceTopOfHr = now.diff(now.startOf('hour')).as('minutes');
  const secSinceTopOfMin = now.diff(now.startOf('minute')).as('seconds');
  const tw = useTailwind();

  // update time every second
  useEffect(() => {
    const interval = setInterval(() => setNow(getCurrentTime()), intervalMs);
    return () => clearInterval(interval);
    // empty array ensures this only runs once
  }, []);

  // set session
  let session = sessions.intro;
  if (
    minSinceTopOfHr >= sessionTimes.focus[0] &&
    minSinceTopOfHr < sessionTimes.focus[1]
  ) {
    session = sessions.focus;
  } else if (minSinceTopOfHr >= sessionTimes.retro[0]) {
    session = sessions.retro;
  }

  // add visual cues if starting new session
  const minSinceSessionStart = minSinceTopOfHr - sessionTimes[session.name][0];
  let bgClass = '';
  let textClass = `text-${session.color}`;
  if (minSinceSessionStart < 1) {
    bgClass =
      Math.floor(secSinceTopOfMin) % 2 === 0 ? `bg-${session.color}` : '';
    textClass = !bgClass ? textClass : '';
  }

  return (
    <View style={tw(`items-center flex-1 ${bgClass}`)}>
      {/* top row */}
      <View>
        <Text style={tw('text-xl')}>{session.name}</Text>
      </View>

      {/* main center view */}
      <View style={tw('flex-1 justify-center')}>
        <Ticker
          textClass={textClass}
          minutes={minSinceTopOfHr}
          seconds={secSinceTopOfMin}
        />

        <View style={tw('items-center')}>
          {session.todos.map((todo) => (
            <Text key={todo} style={tw('text-lg')}>
              {todo}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

function getCurrentTime(): DateTime {
  return DateTime.now();
}

export default Timer;
