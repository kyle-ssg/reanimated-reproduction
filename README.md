## Preinstall - using nvm and .nvmrc
In order to standardise the node environment of the team, this project uses an .nvmrc.

- Install zhsrc [here](https://ohmyz.sh/#install)
- Install NVM [here](https://github.com/nvm-sh/nvm#installing-and-updating)
- Add the following to the bottom of ``~/.zshrc`` [here](https://github.com/nvm-sh/nvm#zsh)
- Install XCode (App Store)
- Install Android Studio [here](https://developer.android.com/studio?gclid=CjwKCAjw3K2XBhAzEiwAmmgrAjN1PHIK0Qkxa9fR83LrMUx2dVWu2FqpLmJl1RBdPax_zhZfJRCgwxoCV7cQAvD_BwE&gclsrc=aw.ds)
Add the following to ``~/.zshrc``
  
```shell
export PATH=$PATH:~/Library/Android/sdk/platform-tools
export PATH=$PATH:~/Library/Android/sdk
export PATH=$PATH:~/.android/avd
export PATH=$PATH:~/Downloads/flutter/bin
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export ANDROID_AVD_HOME=~/.android/avd
```

**Bonus: Aliases** - Here are a few useful aliases to add to ~/.zshrc 

```shell
alias build="npm run build"
alias build="npm run start"

alias dev="npm run dev"
alias ws="/Applications/WebStorm.app/Contents/MacOS/webstorm ./"
alias xcode="open ./ios/mobile.xcworkspace/"
```

## Preinstall - Setup Android Environment 
[See Guide](./.bin/.docs/android.md)


## Running
**Development**

Hot reloading for client / server
```
npm run dev
```

## E2E
- To run e2e locally run ``npm run test:e2e``
- Make sure you have an env file at the root of the repository that has login credentials, or set them via env variables.
- If there is a CI image that has java/chrome installed you can run ``npm run test:e2e:prod``
- Make sure you have an env file at the root of the repository that has login credentials, or set them via env variables.
- If there is a CI image that has java/chrome installed you can run ``npm run test:e2e:prod``

## Core Principles: Common Layer Development - Repository Structure

The project is set up to run mobile applications and web applications in the same codebase.

- /mobile: A React Native app that contains no web code
- /common: Redux and common functionality that contains no web or mobile specific code
- .bin - internal folders bundled together to reduce clutter
  - docs: the docs 
  - .husky - git hooks that force linting before commiting 
  - .ssgrtk - the source code for the CLI
  - .webpack - any webpack configuration
- .e2e - the e2e tests
- .github - the github actions
- .storybook - storybook config
- .env - on npm preinstall, the relevant project_<$ENV> gets coppied to common/project.js - this allows us to setup environments for web and mobile
- stories - the storybook stories
- other root folders: folders that are for the website

## Core Principles: Common Layer Development  - Platform based API.ts

The mobile and website have a file called API.ts, this allows web and mobile to implement common functionality with different native libraries that can be called by common.
e.g.

This hook in common can redirect the user to the logged out screen on mobile and web. The loginRedirect in web uses a NextJS router approach, in mobile react-native-navigation.

```shell
import { useUser } from './useUser'
import { useEffect } from 'react'
import { getApi } from '../api'

export default function () {
  const { user } = useUser()
  useEffect(() => {
    if (user) {
      getApi().loginRedirect()
    }
  }, [user])
}
```
