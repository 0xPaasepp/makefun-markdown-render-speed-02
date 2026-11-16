import fs from 'node:fs';
import path from 'node:path';
import { parse } from './parse.js';

const inputDirectory = process.env.MAKEFUN_INPUT_DIR || '/input';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const cases = JSON.parse(fs.readFileSync(path.join(inputDirectory, 'cases.json'), 'utf8'));
const html = cases.map(({ markdown }) => parse(markdown));
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, 'html.json'), JSON.stringify(html));
