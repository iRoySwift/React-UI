import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);

configure([
  require.context('../src/stories', true, /\.stories\.js$/),
  require.context('../packages/', true, /\.stories\.js$/)
], module);

