import { registerApplication, start } from 'single-spa';

registerApplication(
  'header',
  () => import('nav/Header'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'footer',
  () => import('nav/Footer'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'counter',
  () => import('counter/Counter'),
  location => location.pathname.startsWith('/')
);

start();
