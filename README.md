This project is my RxJS playground, which was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

At this stage it just implemented a demo case of RxJS `debounced` streams flow, and it is actually a re-implement of a `lodash.debounce` as [this](http://codepen.io/dcorb/pen/KVxGqN).

## Little story behind
Recently I was attracted by the RxJS related stuff, and watched some videos from `BenLesh` and `André Staltz`. The most exciting thing to me is that it gave me a new way to think about programming, just like `React` hit me before. Things becomes `streams` or `observable`s, and you just need to compose them together, and even manipulate them with operators. Also the `push` mechnism, instead of traditional `pull` mechnism really make a deal.You may want to know the metaphor `cold-observable` vs `hot-ovservable` and `hot-observable-replay` if you want to dig out how RxJS comes up.

As mentioned may times from BenLesh's videos, RxJS can be thought of `lodash` for async operations. Really? I know some `lodash` things, then I found the `debounce` from RxJS operators. It is similar and I probably can do in RxJS. So this project comes!

Why React for this project?
uh... basically for RxJS you do not have to be on top of React, but I am just too lazy to setup the dev environment(ES6/babel/Webpack etc), and `create-react-app` help me do all the dirty things, and it quite nice to support `yarn` in latest version.


## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    demo.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
* `src/demo.js` is the original implementation of RxJS debounce with jQuery.


## Available Scripts (Referred from [create-react-app](https://github.com/facebookincubator/create-react-app))

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

