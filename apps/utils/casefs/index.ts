#!/usr/bin/env ts-node

import { join, resolve } from 'path';
import fs from 'fs';
import { userInfo } from 'os';
import { program } from 'commander';
import winston from 'winston';
import chalk from 'chalk';
const { printf } = winston.format;

const format = printf(({ level, message, label, timestamp }) => {
  return level === 'warn' ? chalk.yellow(message) : message;
});
const { info, warn } = winston.createLogger({
  transports: [new winston.transports.Console()],
  format,
});

const app = program
  .argument('<directory>', 'Directory to convert')
  .option('--dry-run', 'Dry run');
app.parse();

const isDryRun = app.opts().dryRun;
const rawFolderPath = app.args[0];

const unsafeFolers = [
  userInfo().homedir,
  'node_modules',
  '.git',
  'out-tsc',
  'dist',
  'build',
];

// resolve folder path
if (!rawFolderPath) throw new Error('No folder path provided');
const rootFolderToRename = resolve(rawFolderPath);
if (!fs.existsSync(rootFolderToRename))
  throw new Error('Folder path does not exist');

warn(`dry run: ${isDryRun}\n`);

const renameFilesAndDirs = (dirPath: string) => {
  const dirName = dirPath.split('/').pop() as string;
  if (unsafeFolers.includes(dirName)) {
    warn(`🤡 SKIPPING "${dirPath}" 🤡`);
    return;
  }

  console.group(`🗂  ${dirPath}`);
  const fileAndDirNames = fs
    .readdirSync(dirPath)
    .filter((name) => name !== '.DS_Store');

  const newPaths = fileAndDirNames.map((ogName) => {
    // get new name
    // replace spaces and underscores with dashes
    let newName = ogName.replace(/[ _]/g, '-').toLowerCase();
    // replace multiple dashes with single dash
    newName = newName.replace(/[-]{1,}/g, '-');
    const ogPath = join(dirPath, ogName);
    const newPath = join(dirPath, newName);

    if (!isDryRun && newName !== ogName) {
      warn(ogName);
      info(newName);
      fs.renameSync(ogPath, newPath);
      return newPath;
    } else if (newName !== ogName) {
      warn(ogName);
      return ogPath;
    } else {
      return ogPath;
    }
  });

  console.groupEnd();

  newPaths.forEach((newPath) => {
    const isDir = fs.lstatSync(newPath).isDirectory();
    if (isDir) renameFilesAndDirs(newPath);
  });
};

renameFilesAndDirs(rootFolderToRename);
