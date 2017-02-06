## Changing the mobile bundle ID

Install the react-native-app-id package globally if you haven't already done so

`npm i react-native-app-id -g`

Run it to change the bundle ID on the app

`react-native-app-id <my-bundle-id>`

## Fastlane

From the `mobile` folder.

#### iOS

Generate app icons:

`fastlane icon`

Deploy Testflight build:

`fastlane beta`

Release production build:

`fastlane release`

#### Android

Generate app icons:

`fastlane android icon`

Deploy beta build:

`fastlane android beta`

Release production build

`fastlane android release`
