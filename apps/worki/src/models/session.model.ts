export type SessionName = 'intro' | 'focus' | 'retro';

export interface Session {
  name: SessionName;
  color: string;
  todos: string[];
}
