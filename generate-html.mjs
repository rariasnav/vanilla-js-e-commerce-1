import fs from 'fs';
import ejs from 'ejs';
import { config } from './config.mjs';

const template = fs.readFileSync('index.template.html', 'utf-8');
const html = ejs.render(template, { config });

fs.writeFileSync('index.html', html);