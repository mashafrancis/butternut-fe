const path = require('path');

const CWD = process.cwd();

module.exports = {
  "includePaths": [
    path.resolve(CWD, 'node_modules'),
    path.resolve(CWD, 'node_modules/@material'),
    path.resolve(CWD, 'src')
  ]
};
