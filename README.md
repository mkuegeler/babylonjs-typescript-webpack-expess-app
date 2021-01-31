# babylonjs-typescript-webpack-expess-app
A sample project for writing a Node.js web application using Babylonjs, TypeScript, Webpack and Express

The intention of this project is to provide a template to get started with the development of 3D web applicaions using the Babylonjs web rendering engine.
The setup comprises Node.js as the platform, TypeScript as the programming language, Babylonjs as the rendering engine, WebPack to bundle the assets and Express as the web framework and runtime.

## Preconditions:

- Node.js is installed
- TypeScript is installed

Please see the links in the "References" section for details.

## Installation
Assuming you’ve already installed Node.js and TypeScript, clone this repository, and make that your working directory.

```
npm install
```

## Build

```
npm run build
```

## Start application

```
npm start
```

## Open in browser

```
http://localhost:3000
```

## Getting started
Start writing your own code in the `src` directory. The command `npm run build` writes the compiled result to folder `public/dist`.

This is the folder structure of the project:

```
├── server.js
├── package.json
├── tsconfig.json
├── README.md
├── src
│   ├── app.ts
│   ├── scene.ts
├── public
│   ├── index.html
│   └── dist
```

## References
This project refers to the following sources:

https://nodejs.org/

https://www.typescriptlang.org/

https://www.babylonjs.com/

https://webpack.js.org/

https://expressjs.com/

https://github.com/serebrov/so-questions/tree/master/nodejs-typescript

https://github.com/icezee/babylonjs-ts-template

https://github.com/jsecademy/webpack-express-typescript

https://github.com/hrkt/babylonjs-typescript-webpack-boilerplate
