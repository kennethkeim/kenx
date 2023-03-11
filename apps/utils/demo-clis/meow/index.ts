#!/usr/bin/env ts-node
import { cli } from '../../cli/cli';

const app = cli([], {
  recursive: { type: 'boolean', alias: 'r', default: false },
  // foo: { type: 'string', alias: 'f', isRequired: true },
  // bar: { type: 'string', alias: 'b', isRequired: true },
});

const { flags, input } = app;

console.log('input:', input);
console.log('flags:', flags);
