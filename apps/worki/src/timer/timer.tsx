import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { sessions, sessionEnds } from '../constants/sessions';
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
    minSinceTopOfHr > sessionEnds.intro &&
    minSinceTopOfHr < sessionEnds.focus
  ) {
    session = sessions.focus;
  } else if (minSinceTopOfHr > sessionEnds.focus) {
    session = sessions.retro;
  }

  // add visual cues if nearing end of session
  const minLeft = sessionEnds[session.name] - minSinceTopOfHr;
  let bgClass = '';
  let textClass = `text-${session.color}`;
  if (minLeft < 1) {
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
