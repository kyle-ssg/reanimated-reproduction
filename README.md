<img src="http://g.recordit.co/TY8wciTsQH.gif"/>


## Prerequisites

What things you need to install the software and how to install them


| Location                                                     | Suggested Version       |
| -------------                                                |:-------------:|
| <a href="https://nodejs.org/en/">NodeJS</a>                     | >= 6.0.0 |
| <a href="https://nodejs.org/en/">npm</a>                        | >= 4.0.0 |

# Deployment with Now
Out the box, this setup supports deploying to https://zeit.co
```$xslt
npm i now -g
now
```

## Installing
```
npm i
```

## Running
**Development**

Hot reloading for client / server
```
npm run dev
```

## Deploying

Every branch gets deployed with Zeit. See the deployments tab in this GitHub.


## Testing with jest
allows component level, unit, saga and reducer testing
```
npm run test
```

## E2E tests with nightwatch
requires dependencies listed in tests/e2e/readme.md

```
npm run test:e2e
```

## Generating pact tests files
Only really relevant if the backends use pact requires dependencies listed in tests/pact/readme.md

```
npm run test:pct
```

## Running a pact mock server 
Can be done regardless of if pact is installed
```
npm run test:pact:server
```

## ENV variables

Variables that differ per environment are exported globally to ``window.Project in`` [common/project.js](./common/project.js), this file gets replaced by a project.js located in [env](./env) by webpack based on what is set to the "ENV" environment variable (e.g. ENV=prod).
 
You can override each variable individually or add more by editing [environment.js](.env/environment-variables.js). 

e.g. with  ``API_URL=test npm run test`` Project.API will be "test"

## Storybook

This project uses storybook, running the project in dev mode will launch storybook on port 4000, this will render stories according to /stories/index.

## Web Entrypoint

pages/_app.js is where the initial app code is run


## Creating pages

As with any standard nextjs project you need to add any pages to /pages/url.js. See https://nextjs.org/learn/basics/navigate-between-pages/using-link.

There's a standardised Page component which will add any seo meta tags necessary. Usage:

```$xslt
          <Page title={Constants.titles.partners} canonical="partners">
               <div>Content</div>
          </Page>
```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.

## Libraries of note
    "react-autocomplete": "^1.8.1", for a suitable autocomplete
    "react-autolinker": "^1.0.7", converting @ # etc to html
    "react-json-tree": "^0.11.2", debugging json in UI
