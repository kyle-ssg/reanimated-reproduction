# SSG Frontend Boilerplate

This README will help get you started using the SSG Frontend Boilerplate to set up a new project for both web and mobile or work on an existing project.

## Prerequisites
```
brew update
brew install yarn
```

## Installation (running this installs both web and mobile)
```yarn```


## Development

#### iOS start
```npm run ios```

#### Android start
```npm run android```

#### Web start
```npm start```

## Useful mobile commands (paste these into ~/.bash_profile)
- Display sha1 key for signing
- run ios
- run android
- create an apk for android

```
alias andKey='keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android'

alias ios='react-native run-ios'

alias and='adb reverse tcp:8081 tcp:8081  && react-native run-android'

alias andDeploy='cd ./android && ./gradlew assembleRelease && ./gradlew installRelease && cd ../'
```


## Creating a new project

Install the SSG Frontend CLI if you haven't done so already.

```
npm i ssg-frontend-cli -g
```

Run it to create a new project

```
ssg-frontend {project-name}
```
## Components

Further detail on React components and the flux architecture used throughout the boilerplate can be seen in the [Components Guide](https://git.solidstategroup.com/solidstategroup/ssg-frontend-boilerplate/blob/master/Components.md)

## Tasks

For details are various tasks including changing the bundle ID, deploying builds and generating app icons please see the [Tasks Guide](https://git.solidstategroup.com/solidstategroup/ssg-frontend-boilerplate/blob/master/Tasks.md)

## 3rd party integrations

If you need support for 3rd party integrations such as Firebase, Facebook and Fabric Digits please see [3rd Party Guide](https://git.solidstategroup.com/solidstategroup/ssg-frontend-boilerplate/blob/master/ThirdParty.md)
