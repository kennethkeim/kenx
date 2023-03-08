import { Session, SessionName } from '../models/session.model';

export const sessions: Record<SessionName, Session> = {
  intro: {
    name: 'intro',
    color: 'yellow-400',
    todos: [
      '💭 Plan upcoming focus session - alternate between studying and practicing',
    ],
  },
  focus: {
    name: 'focus',
    color: 'blue-600',
    todos: ['💪 Get it done!'],
  },
  retro: {
    name: 'retro',
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

export const sessionTimes: Record<SessionName, [number, number]> = {
  intro: [0, 5],
  focus: [5, 55],
  retro: [55, 59.9],
};
