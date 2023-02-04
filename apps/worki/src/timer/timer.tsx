import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';

/* eslint-disable-next-line */
export interface TimerProps {}

/** keep this just under a full second to ensure it runs every second even if setInterval has small inconsistencies */
const intervalMs = 990;

type SessionName = 'intro' | 'focus' | 'retro';
interface Session {
  name: SessionName;
  end: number;
  color: string;
  todos: string[];
}

const sessions: Record<SessionName, Session> = {
  intro: {
    name: 'intro',
    end: 5,
    color: 'yellow-400',
    todos: [
      '💭 Plan upcoming focus session - alternate between studying and practicing',
    ],
  },
  focus: {
    name: 'focus',
    end: 55,
    color: 'blue-600',
    todos: ['💪 Get it done'],
  },
  retro: {
    name: 'retro',
    end: 59.9,
    color: 'green-600',
    todos: [
      '🧍‍♂️ Stand up',
      '🧐 Review what you got done',
      '💬 Respond to notifications',
      "🐪 Don't think about work",
      '--------- one of ---------',
      '✋ Carpal tunnel exercise',
      '🏋️‍♀️ 15 reps of pushups/situps/squats',
      '🌵 Pranamat',
    ],
  },
};

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
  if (
    minSinceTopOfHr > sessions.intro.end &&
    minSinceTopOfHr < sessions.focus.end
  ) {
    session = sessions.focus;
  } else if (minSinceTopOfHr > sessions.focus.end) {
    session = sessions.retro;
  }

  // add visual cues if nearing end of session
  const minLeft = session.end - minSinceTopOfHr;
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
        <Text style={tw(`text-9xl font-bold ${textClass}`)}>
          {toTimeFormat(minSinceTopOfHr)}:{toTimeFormat(secSinceTopOfMin)}
        </Text>

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

function toTimeFormat(num: number): string {
  return String(Math.floor(num)).padStart(2, '0');
}

export default Timer;
