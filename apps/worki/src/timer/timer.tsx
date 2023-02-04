import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

/* eslint-disable-next-line */
export interface TimerProps {}

const introEnd = 5;
const focusEnd = 55;
/** keep this just under a full second to ensure it runs every second even if setInterval has small inconsistencies */
const intervalMs = 990;

type SessionName = 'intro' | 'focus' | 'retro';
interface Session {
  name: SessionName;
  end: number;
  color: string;
}

const sessions: Record<SessionName, Session> = {
  intro: { name: 'intro', end: 5, color: 'yellow-400' },
  focus: { name: 'focus', end: 55, color: 'blue-600' },
  retro: { name: 'retro', end: 59.9, color: 'green-600' },
};

// session changes
// display visual cues when the session is about to change
// display visual cues when the session changes
// (session changes need to be noticeable while wearing headphones)
// zero-padding

// TODO: phase two
// build out the intro and retro sessions to specify what i should be doing
// i.e.
// intro: plan work in the upcoming focus session
// retro: review what i did, what i learned, exercise, stand, check notifications, etc.

// something to keep in mind, i need to communicate with team members
// that probably means finding a slot for it in the intro or retro sessions
// i also don't have to do focus sessions every hour...

// TODO: phase three
// use clock ticker audio for the focus session (unless i do audio for the other sessions)
// use audio cues when session is about to change
// use audio cues when session changes

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
  let session = sessions.intro;
  if (minSinceTopOfHr > introEnd && minSinceTopOfHr < focusEnd) {
    session = sessions.focus;
  } else if (minSinceTopOfHr > focusEnd) {
    session = sessions.retro;
  }

  return (
    <View style={tw(`items-center flex-1`)}>
      {/* top row */}
      <View>
        <Text style={tw('text-xl')}>{session.name}</Text>
      </View>

      {/* main center view */}
      <View style={tw('flex-1 justify-center')}>
        <Text style={tw(`text-9xl font-bold text-${session.color}`)}>
          {Math.floor(minSinceTopOfHr)}:{Math.floor(secSinceTopOfMin)}
        </Text>
      </View>
    </View>
  );
}

function getCurrentTime(): DateTime {
  return DateTime.now();
}

export default Timer;
