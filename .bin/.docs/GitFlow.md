
The results of the instructions in the [App Creation Guide](./AppCreation.md) is a web and mobile application with branch based deployments.

# Git Flow Web

**Production Deployments**

Pushing to main will deploy to the production version of the vercel project. It will use project_prod.js.

The workflow can be found [here](../../.github/workflows/web-deploy-production.yml).

**Branch Based Deployments**

Pushing to any other branch will deploy the  
