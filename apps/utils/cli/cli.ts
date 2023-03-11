import meow, { AnyFlags, AnyFlag, Result as MeowResult } from 'meow';
import { exitCli } from './errors';

type CliInput = [] | [string] | [string, string];

const getFlagDescriptions = (flags: [string, AnyFlag][]) => {
  return flags
    .map(([name, cfg]) => {
      return `--${name}, -${cfg.alias}, type: ${cfg.type}, default: ${cfg.default}\n `;
    })
    .join(' ');
};

/**
 * Create a meow CLI app with better defaults, input validation, and auto-generated help message
 * @param inputs config of expected command line args
 * @param flags config of expected command line flags
 * @returns meow app
 */
export const cli = <A extends CliInput, B extends AnyFlags>(
  inputs: A,
  flags: B
): MeowResult<B> => {
  const flagsArr = Object.entries(flags);
  const requiredFlags = flagsArr.filter(([_, cfg]) => cfg.isRequired);
  const optionalFlags = flagsArr.filter(([_, cfg]) => !cfg.isRequired);

  // generate help message from input and flag config
  const helpMessage = `
  USAGE:
  $ app ${inputs.map((i) => `<${i}>`).join(' ')} [flags]

  ${requiredFlags.length ? 'REQUIRED FLAGS:' : ''}
  ${getFlagDescriptions(requiredFlags)}

  ${optionalFlags.length ? 'OPTIONAL FLAGS:' : ''}
  ${getFlagDescriptions(optionalFlags)}`;

  // create app
  const app = meow(helpMessage, {
    flags,
    allowUnknownFlags: false,
    hardRejection: true,
  });

  // exit and show help if input/flags are invalid (meow does basic validation first)
  if (app.input.length !== inputs.length) exitCli(app);
  const hasEmptyStrings = Object.entries(flags).some(([name, cfg]) => {
    return cfg.type === 'string' && app.flags[name] === '';
  });
  if (hasEmptyStrings) exitCli(app);

  return app;
};
