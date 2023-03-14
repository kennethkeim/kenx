---
to: apps/utils/<%= name %>/index.ts
---
#!/usr/bin/env ts-node
import { cli } from '../cli/cli';

const app = cli([], {
  recursive: { type: 'boolean', alias: 'r', default: false },
});

const { flags, input } = app;

console.log('input:', input);
console.log('flags:', flags);
