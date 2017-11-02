const path = require('path');
const pwd = process.cwd();

module.exports = {
  source: {
    include: [path.join(pwd, '..', 'src')],
  },

  opts: {
    destination: process.env.DEST,
    recurse: true,
  },

  plugins: [
    'plugins/markdown',
    'jsdoc-stale',
  ],

  markdown: {
    idInHeadings: true,
  },

  articles: ['**/*.md'],

  templates: {
    cleverLinks: true,
    baseDir: path.join(pwd, '..'),
    baseUrl: '/api/',

    default: {
      layoutFile: `./layout.tmpl`,
    },
  },
};
