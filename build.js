'use strict';
const rollupGlobal = require('./rollup.global')
let globals = {
  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/common/http': 'ng.common.http',
  '@angular/router': 'ng.router',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/common/testing': 'ng.common.testing',
  '@angular/common/http/testing': 'ng.common.http.testing',

  '@angular/cdk': 'ng.cdk',
  '@angular/cdk/keycodes': 'ng.cdk.keycodes',
  '@angular/cdk/a11y': 'ng.cdk.a11y',
  '@angular/cdk/accordion': 'ng.cdk.accordion',
  '@angular/cdk/bidi': 'ng.cdk.bidi',
  '@angular/cdk/coercion': 'ng.cdk.coercion',
  '@angular/cdk/collections': 'ng.cdk.collections',
  '@angular/cdk/layout': 'ng.cdk.layout',
  '@angular/cdk/observers': 'ng.cdk.observers',
  '@angular/cdk/overlay': 'ng.cdk.overlay',
  '@angular/cdk/platform': 'ng.cdk.platform',
  '@angular/cdk/portal': 'ng.cdk.portal',
  '@angular/cdk/scrolling': 'ng.cdk.scrolling',
  '@angular/cdk/stepper': 'ng.cdk.stepper',
  '@angular/cdk/table': 'ng.cdk.table',

  'moment': 'moment',
  'moment/locale/zh-cn': null,

  'rxjs/Observer': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Scheduler': 'Rx',

  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/throw': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',

  'rxjs/operators/finalize': 'Rx.Observable',
  'rxjs/operators/catchError': 'Rx.Observable',
  'rxjs/operators/combineLatest': 'Rx.Observable',

  'rxjs/add/observable/merge': 'Rx.Observable',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable',
  'rxjs/add/observable/interval': 'Rx.Observable',
  'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/add/operator/first': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',


  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/observable/fromPromise': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',

  // Legacy operators used by 3rd packages like @angular/core
  'rxjs/operator/auditTime': 'Rx.Observable.prototype',
  'rxjs/operator/catch': 'Rx.Observable.prototype',
  'rxjs/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/operator/delay': 'Rx.Observable.prototype',
  'rxjs/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/operator/do': 'Rx.Observable.prototype',
  'rxjs/operator/filter': 'Rx.Observable.prototype',
  'rxjs/operator/finally': 'Rx.Observable.prototype',
  'rxjs/operator/first': 'Rx.Observable.prototype',
  'rxjs/operator/map': 'Rx.Observable.prototype',
  'rxjs/operator/pluck': 'Rx.Observable.prototype',
  'rxjs/operator/share': 'Rx.Observable.prototype',
  'rxjs/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/operator/takeUntil': 'Rx.Observable.prototype',
  'rxjs/operator/throttleTime': 'Rx.Observable.prototype',

  // Operators with chain-functionality itself (from rxjs 5.x) used by us
  'rxjs/operators/auditTime': 'Rx.Observable.prototype',
  'rxjs/operators/catch': 'Rx.Observable.prototype',
  'rxjs/operators/debounceTime': 'Rx.Observable.prototype',
  'rxjs/operators/delay': 'Rx.Observable.prototype',
  'rxjs/operators/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/operators/do': 'Rx.Observable.prototype',
  'rxjs/operators/filter': 'Rx.Observable.prototype',
  'rxjs/operators/finally': 'Rx.Observable.prototype',
  'rxjs/operators/first': 'Rx.Observable.prototype',
  'rxjs/operators/map': 'Rx.Observable.prototype',
  'rxjs/operators/pluck': 'Rx.Observable.prototype',
  'rxjs/operators/share': 'Rx.Observable.prototype',
  'rxjs/operators/startWith': 'Rx.Observable.prototype',
  'rxjs/operators/switchMap': 'Rx.Observable.prototype',
  'rxjs/operators/takeUntil': 'Rx.Observable.prototype',
  'rxjs/operators/throttleTime': 'Rx.Observable.prototype',
  'rxjs/operators/tap': 'Rx.Observable.prototype',

  'rxjs/operators/concatMap': 'Rx.Observable.prototype',
  '@angular/common/http': 'ng.commmon.http',
};

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const camelCase = require('camelcase');
const ngc = require('@angular/compiler-cli/src/main').main;
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const inlineResources = require('./inline-resources');

const libName = require('./package.json').name;
const rootFolder = path.join(__dirname);
const compilationFolder = path.join(rootFolder, 'out-tsc');
const srcFolder = path.join(rootFolder, './lib');
const distFolder = path.join(rootFolder, 'dist');
const tempLibFolder = path.join(compilationFolder, 'lib');
const es5OutputFolder = path.join(compilationFolder, 'lib-es5');
const es2015OutputFolder = path.join(compilationFolder, 'lib-es2015');

return Promise.resolve()
  // Copy library to temporary folder and inline html/css.
  .then(() => _relativeCopy(`**/*`, srcFolder, tempLibFolder)
    .then(() => inlineResources(tempLibFolder))
    .then(() => console.log('Inlining succeeded.'))
  )
  // Compile to ES2015.
  .then(() => ngc(['--project', `${tempLibFolder}/tsconfig.lib.json`]))
  .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
  .then(() => console.log('ES2015 compilation succeeded.'))
  // Compile to ES5.
  .then(() => ngc(['--project', `${tempLibFolder}/tsconfig.es5.json`]))
  .then(exitCode => exitCode === 0 ? Promise.resolve() : Promise.reject())
  .then(() => console.log('ES5 compilation succeeded.'))
  // Copy typings and metadata to `dist/` folder.
  .then(() => Promise.resolve()
    .then(() => _relativeCopy('**/*.d.ts', es2015OutputFolder, distFolder))
    .then(() => _relativeCopy('**/*.metadata.json', es2015OutputFolder, distFolder))
    .then(() => console.log('Typings and metadata copy succeeded.'))
  )
  // Bundle lib.
  .then(() => {
    // Base configuration.
    const es5Entry = path.join(es5OutputFolder, `${libName}.js`);
    const es2015Entry = path.join(es2015OutputFolder, `${libName}.js`);
    const rollupBaseConfig = {
      moduleName: camelCase(libName),
      sourceMap: true,
      // ATTENTION:
      // Add any dependency or peer dependency your library to `globals` and `external`.
      // This is required for UMD bundle users.
      // globals: {
      //   // The key here is library name, and the value is the the name of the global variable name
      //   // the window object.
      //   // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals for more.
      //   '@angular/core': 'ng.core',
      //   'rxjs/operator/map':            'Rx.Observable.prototype',
      // },
      // globals:  rollupGlobal,
      globals:  Object.keys(globals),
      external: [
        // List of dependencies
        // See https://github.com/rollup/rollup/wiki/JavaScript-API#external for more.
        '@angular/core',
        '@angular/common',
        '@angular/common/http',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/router',
        '@angular/material',
        '@ngrx/core',
        '@ngrx/core/index',
        '@ngrx/effects',
        '@ngrx/effects/index',
        '@ngrx/router-store',
        '@ngrx/router-store/index',
        '@ngrx/store',
        '@ngrx/store/index',
        'ng2-bootstrap3-grid',
        'my-sdk-js',
        'lodash',
        'lodash/index',
        'ngx-cookie',
        'ngx-cookie/index',
        'reselect',
        'reselect/index',
        'rxjs',
        'rxjs/add/operator/catch',
        'rxjs/add/operator/combineLatest',
        'rxjs/add/operator/debounceTime',
        'rxjs/add/operator/filter',
        'rxjs/add/operator/first',
        'rxjs/add/operator/map',
        'rxjs/add/operator/mergeMap',
        'rxjs/add/operator/pluck',
        'rxjs/add/operator/skip',
        'rxjs/add/operator/switchMap',
        'rxjs/add/operator/takeUntil',
        'rxjs/add/operator/throttleTime',
        'rxjs/add/operator/withLatestFrom',
        'rxjs/Observable',
        'rxjs/observable/empty',
        'rxjs/observable/fromEvent',
        'rxjs/observable/fromPromise',
        'rxjs/observable/merge',
        'rxjs/observable/of',
        'rxjs/observable/of',
        'rxjs/observable/throw',
        'rxjs/ReplaySubject',
        'rxjs/Subject',        
        'rxjs/operators/concatMap',
      ],
      plugins: [
        commonjs({
          include: ['node_modules/rxjs/**']
        }),
        sourcemaps(),
        nodeResolve({ jsnext: true, module: true })
      ]
    };

    // UMD bundle.
    const umdConfig = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: path.join(distFolder, `bundles`, `${libName}.umd.js`),
      format: 'umd',
    });

    // Minified UMD bundle.
    const minifiedUmdConfig = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: path.join(distFolder, `bundles`, `${libName}.umd.min.js`),
      format: 'umd',
      plugins: rollupBaseConfig.plugins.concat([uglify({})])
    });

    // ESM+ES5 flat module bundle.
    const fesm5config = Object.assign({}, rollupBaseConfig, {
      entry: es5Entry,
      dest: path.join(distFolder, `${libName}.es5.js`),
      format: 'es'
    });

    // ESM+ES2015 flat module bundle.
    const fesm2015config = Object.assign({}, rollupBaseConfig, {
      entry: es2015Entry,
      dest: path.join(distFolder, `${libName}.js`),
      format: 'es'
    });

    const allBundles = [
      umdConfig,
      minifiedUmdConfig,
      fesm5config,
      fesm2015config
    ].map(cfg => rollup.rollup(cfg).then(bundle => bundle.write(cfg)));

    return Promise.all(allBundles)
      .then(() => console.log('All bundles generated successfully.'))
  })
  // Copy package files
  .then(() => Promise.resolve()
    .then(() => _relativeCopy('LICENSE', rootFolder, distFolder))
    .then(() => _relativeCopy('package.json', srcFolder, distFolder))
    .then(() => _relativeCopy('README.md', rootFolder, distFolder))
    .then(() => console.log('Package files copy succeeded.'))
  )
  .catch(e => {
    console.error('\Build failed. See below for errors.\n');
    console.error(e);
    process.exit(1);
  });


// Copy files maintaining relative paths.
function _relativeCopy(fileGlob, from, to) {
  return new Promise((resolve, reject) => {
    glob(fileGlob, { cwd: from, nodir: true }, (err, files) => {
      if (err) reject(err);
      files.forEach(file => {
        const origin = path.join(from, file);
        const dest = path.join(to, file);
        const data = fs.readFileSync(origin, 'utf-8');
        _recursiveMkDir(path.dirname(dest));
        fs.writeFileSync(dest, data);
        resolve();
      })
      if (!files || files.length == 0) {
        resolve();
      }
    })
  });
}

// Recursively create a dir.
function _recursiveMkDir(dir) {
  if (!fs.existsSync(dir)) {
    _recursiveMkDir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
}
