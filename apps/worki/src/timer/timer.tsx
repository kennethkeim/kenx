import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

/* eslint-disable-next-line */
export interface TimerProps {}

const introEnd = 5;
const focusEnd = 50;
/** keep this just under a full second to ensure it runs every second even if setInterval has small inconsistencies */
const intervalMs = 990;

enum Session {
  Intro = 'intro',
  Focus = 'focus',
  Retro = 'retro',
}

// TODO
// display visual and audio cues when the session changes

export function Timer(props: TimerProps) {
  const [now, setNow] = useState(getCurrentTime());
  const isIntervalRunning = React.useRef(false);
  const minSinceTopOfHr = now.diff(now.startOf('hour')).as('minutes');
  const secSinceTopOfMin = now.diff(now.startOf('minute')).as('seconds');
  const tw = useTailwind();

  // update time every second
  if (!isIntervalRunning.current) {
    isIntervalRunning.current = true;
    setInterval(() => setNow(getCurrentTime()), intervalMs);
  }

  // set session
  let session: Session = Session.Intro;
  if (minSinceTopOfHr > introEnd && minSinceTopOfHr < focusEnd) {
    session = Session.Focus;
  } else if (minSinceTopOfHr > focusEnd) {
    session = Session.Retro;
  }

  return (
    <View style={tw('items-center')}>
      <Text style={tw('text-2xl text-pink-600')}>{session}</Text>
      <Text style={tw('text-4xl')}>
        {Math.floor(minSinceTopOfHr)}:{Math.floor(secSinceTopOfMin)}
      </Text>
    </View>
  );
}

function getCurrentTime(): DateTime {
  return DateTime.now();
}

export default Timer;
