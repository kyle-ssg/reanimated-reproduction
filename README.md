# React + Redux w/ ES6 Starter Project

A boilerplate using React, Flux, webpack + hot module reloading, and ES6 + JSX via Babel.

The provided boilerplate enables client-side ES6 via the following technologies:

- [webpack](http://webpack.github.io/) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [npm](https://www.npmjs.com/) as a package manager and task runner (say [**NO**](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/) to gulp/grunt).
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [ESLint](http://eslint.org/) as a reporter for syntax and style issues. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.
- [Sass](http://sass-lang.com/) as a compiler of CSS styles with variables, mixins, and more.
- [Mocha](https://mochajs.org/) as a test framework.
- [Chai](http://chaijs.com/) as a BDD assertion library that works along with `Mocha`.

## Getting Started

### Installation

```
$ npm install
```

## Development

There are two ways in which you can build and run the web app:

* Hot reloading via webpack dev server:
  * `$ npm start`
  * Point your browser to http://localhost:8080/, page hot reloads automatically when there are changes


* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver


## Testing

To execute all unit tests, use:

```sh
npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
npm run test:watch
```

## Further Information

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## Updating npm packages
- This is very useful to keep the boilerplate up to date, the following will update your package.json to use latest compatible packages
npm install -g npm-check-updates
ncu (ncu -u to perform the updates)

# APIS
##Modals
openModal(body, header, footer)
openConfirm(body, header, onYes, onNo)

##Share (requires import Share from 'apis/share/share')
Share.facebook(url)
Share.twitter(url)

##Firebase auth - handles user management, email based auth and profile data. Requires import FireAuth from 'apis/firebase/fire-auth'
FireAuth.init(this.onLogin, this.onUserChange, this.onLogout, this.onError);

login(email, password)
register(email, password)
facebookLogin() - Uses Project.Google.APIKey, clientID
googleLogin()
update(traits)
resendVerification() - if !(profile.emailVerified)

##Vanilla auth (requires import Auth from 'apis/auth/auth')
Auth.Google.login()
    .then((res)=>{})

Auth.Facebook.login()
    .then((res)=>{})


#Application Flow
1. Component emits an action defined in
2: