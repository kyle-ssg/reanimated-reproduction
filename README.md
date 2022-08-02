# Deployment with Now
Out the box, this setup supports deploying to https://zeit.co
```$xslt
npm i now -g
now
```

## Preinstall - using nvm and .nvmrc
In order to standardise the node environment of the team, this project uses an .nvmrc. In combination with nvm and the following [.bashrc/.zshrc setup](https://github.com/nvm-sh/nvm#bash) this will ensure the correct node version is used whenever you ``cd`` into the directory. 

## Running
**Development**

Hot reloading for client / server
```
npm run dev
```

## Deploying

Every branch gets deployed with Vercel. See the deployments tab in this GitHub.

## ENV variables

Variables that differ per environment are exported globally to ``window.Project in`` [common/project.js](./common/project.js), this file gets replaced by a project.js located in [env](./env) by webpack based on what is set to the "ENV" environment variable (e.g. ENV=prod).
 
You can override each variable individually or add more by editing [environment.js](env/environment-variables.js). 

e.g. with  ``API_URL=test npm run dev`` Project.api will be "test"

## Storybook

This project uses storybook, running the project in dev mode will launch storybook on port 4000, this will render stories according to /stories/index.

## Web Entrypoint

pages/_app.js is where the initial app code is run


## Creating pages

As with any standard nextjs project you need to add any pages to /pages/url.js. See https://nextjs.org/learn/basics/navigate-between-pages/using-link.

There's a standardised Page component which will add any seo meta tags necessary. Usage:
todo: Look at using next-seo 


## E2E
- To run e2e locally run ``npm run test:e2e``
- Make sure you have an env file at the root of the repository that has login credentials, or set them via env variables.
- If there is a CI image that has java/chrome installed you can run ``npm run test:e2e:prod``
- Make sure you have an env file at the root of the repository that has login credentials, or set them via env variables.
- If there is a CI image that has java/chrome installed you can run ``npm run test:e2e:prod``


