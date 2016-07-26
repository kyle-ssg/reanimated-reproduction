# React + Redux w/ ES6 Starter Project
A boilerplate using React, Flux, webpack + hot module reloading, and ES6 + JSX via Babel. Includes useful apis for getting started.

## Getting Started

### Installation
```
$ npm install
```
### Running with hot reloading / eslinting / tests
```
$ npm start
```

## Routing
```routes.js``` contain all page routes

## How it all works
1. ```ExampleComponent``` emits an action defined in ```app-actions``` (e.g. ```AppActions.sendMeme(url);``` after clicking a button)
2. ```app-actions.js``` takes the params along with an action type defined in action-constants (e.g. ```ActionConstants.SEND_MEME```)
3. ```meme-store.js``` picks up the action and calls events such as
    - store.loading()
    - store.change()
    - store.loaded()
    - store.saving()
    - store.saved()
4. Components listen to events and update state : ```this.listenTo(MemeStore, 'change', ()=>{this.setState({meme: MemeStore.model}})```

# APIS
## Modals
Globally accessible by default
* ```openModal(body, header, footer)```
* ```openConfirm(body, header, onYes, onNo)```

## Share (requires)
``import Share from 'apis/share/share'``
* ``Share.facebook(url)``
* ``Share.twitter(url)``

## Firebase auth - handles user management, fb/google/email based auth and profile data.
``FireAuth from 'apis/firebase/fire-auth';``

``FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, this.onError);``

* ``login(email, password)``
* ``register(email, password)``
* ``resendVerification()`` - if !(profile.emailVerified)
* ``resetPassword(email)``
* ``facebookLogin()`` - Uses Project.Google.APIKey, clientID
* ``googleLogin()``
* ``update(traits)``

## Vanilla auth (requires import Auth from 'apis/auth/auth')
* ``Auth.Google.login().then((token)=>{})``
* ``Auth.Facebook.login().then((res)=>{})``

### Prod build
* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver, the build folder can be deployed anywhere

## Further Information

The provided boilerplate enables client-side ES6 via the following technologies:

- [webpack](http://webpack.github.io/) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [npm](https://www.npmjs.com/) as a package manager and task runner.
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [ESLint](http://eslint.org/) as a reporter for syntax and style issues. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.
- [Sass](http://sass-lang.com/) as a compiler of CSS styles with variables, mixins, and more.
- [Mocha](https://mochajs.org/) as a test framework.
- [Chai](http://chaijs.com/) as a BDD assertion library that works along with `Mocha`.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

## Updating npm packages
This is very useful to keep the boilerplate up to date, the following will update your ```package.json``` to use latest compatible packages
* ```npm install -g npm-check-updates```
* ```ncu (ncu -u to perform the updates)```