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
- To run e2e locally run ``test:e2e:devBundle``
- E2E runs in Git, you'll need to uncomment out steps in [this action](.github/actions/web-test-action/action.yml)


## Git Flow

To see when and where things are built for Mobile and Web, check this [guide](.bin/.docs/GitFlow.md).

## Cross Platform Development

This repository is optimised for creating shared mobile and web applications, see [Cross Platform Development](.bin/.docs/cross-platform-development.md)

## Creating a new web and mobile app

To see how to create a web and mobile app from this repository, see [here](.bin/.docs/AppCreation.md).
