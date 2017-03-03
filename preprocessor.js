const  appRoot  = require('app-root-path');
const typescript = require( 'typescript' );
const babelJest = require( 'babel-jest' );

const tsConfig = require(`${appRoot.path}/tsconfig.json`);

module.exports = {
  process(src, path) {
    const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx');
    const isJavaScript = path.endsWith('.js') || path.endsWith('.jsx');

  if (isTypeScript) {
    src = typescript.transpile( 
      src,
      tsConfig.compilerOptions,
      path,
      []
    ); //method class = transpile
  }
  
  if (isJavaScript || isTypeScript) {
      const fileName = isJavaScript ? path : 'file.js';
      src = babelJest.process(src, fileName);
  }
  
  return src;
  }
};
