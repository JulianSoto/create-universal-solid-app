#!/usr/bin/env node

import fs from 'fs';
import { argv } from 'node:process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sanitize from 'sanitize-filename';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectName = sanitize(argv[2]);
const appRoot = dirname + '/' + projectName;

console.log(appRoot);

fs.mkdirSync(appRoot);
console.info('Initializing project...');
fs.cpSync('./templates/ts', appRoot, { recursive: true });
console.info(`Project initialized! Run 'cd ${projectName}' then 'npm install'`);
