# What

It's a Pomodoro-ish timer app built with React Native.

The timer is quite opinionated and I made it for my own personal use, so not a lot of config options.

In the unlikely event anyone ever reads this, feel free to fork it.

# What but more detailed

- Timer is always running if app is open, cannot be paused
- Timer starts top of the hour
- Timer is 5 intro, 55 focus, 5 retro
- One of the 5 min blocks will include prompts to exercise, probably the retro block
- Exercise will include: carpal-tunnel-prevention exercises, whole-body exercises, pranamat, etc
- Exercises will be highly optimized for the equipment I own and the problems I'm trying to solve

# Todo

- use clock ticker audio for the focus session (unless i do audio for the other sessions)
- use audio cues when session is about to change
- see if i can reduce re-renders or move the once-per-second re-renders to a smaller component
- have the todos list be more specific e.g. stand every other session or do pranamat in the afternoon
- open a pr on the mistyped TailwindProvider - would be good open source experience
- investigate the issue with tw colors
