import { qwikCityGenerate } from '@builder.io/qwik-city/static/node';
import render from './entry.ssr';
import { fileURLToPath } from 'url';
import { join } from 'path';

// Execute Qwik City Static Site Generator
qwikCityGenerate(render, {
  origin: 'https://img-models.vercel.app',
  outDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
});