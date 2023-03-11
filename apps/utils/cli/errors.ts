import { AnyFlags, Result } from 'meow';
import { red } from 'chalk';

const logError = (msg: string): void => console.warn(red(msg));

/** show help and exit */
export const exitCli = <T extends AnyFlags>(app: Result<T>): void => {
  logError(`You did it all wrong.`);
  app.showHelp();
};
