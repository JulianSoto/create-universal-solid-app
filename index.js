#!/usr/bin/env node

const fs = require('fs');
const { argv, cwd } = require('node:process');
const sanitize = require('sanitize-filename');

const projectName = sanitize(argv[2]);
const appRoot = cwd() + '/' + projectName;

fs.mkdirSync(appRoot);
console.info('Initializing project...');
fs.cpSync(__dirname + '/templates/ts', appRoot, { recursive: true });
console.info(`Project initialized! Run 'cd ${projectName}' then 'npm install'`);
