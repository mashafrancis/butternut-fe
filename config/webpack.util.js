const path = require('path');

function tryResolve_(url, sourceFilename) {
  // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors when the importer throws
  try {
    return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
  } catch (e) {
    return '';
  }
}

function tryResolveScss(url, sourceFilename) {
  // Support omission of .scss and leading _
  const normalizedUrl = path.extname(url) === '.scss' ? url : `${url}.scss`;
  const relativeUrl = path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`);

  return tryResolve_(normalizedUrl, sourceFilename) || tryResolve_(relativeUrl, sourceFilename);
}

function importer(url, prev) {
  // configuration with material design elements that need resolution of modules
  if (url.startsWith('@material')) {
    const resolved = tryResolveScss(url, prev);
    return {file: resolved || url};
  }
  return {file: url};
}

module.exports = {importer};
