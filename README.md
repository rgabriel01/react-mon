# react-mon
A trial dive on the reactJs framework

Reactjs Setup
# setup package.json
`npm init`

# installing webpack
`npm i webpack -S`

# configuring webpack
create the file webpack.config.js and have this inside
```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
```

to compile `bundle.js` file execute the following command on the CLI
`./node_modules/.bin/webpack -d`

to enable jsx, we install the following; babel-loaders
`npm i babel-loader babel-core babel-preset-es2015 babel-preset-react -S`

create the babelrc file by
`touch .babelrc`

configure the preset used by the said file to
```
{
  "presets" : ["es2015", "react"]
}
```

Make webpack know which loader is used... open up webpack.config.js
```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
```

To install react...
`npm i react react-dom -S`

To have webpack watch-out for changes on the js',
`./node_modules/.bin/webpack -d --watch`

To have webpack have bundle.js minimized
`npm run build`

To have webpack auto watch changes
`npm run dev`
