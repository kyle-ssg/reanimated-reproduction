# Boilerplate Guide

This guide will walk you through using the SSG Frontend Boilerplate to set up a new project for both web and mobile.

## Basics

Install the SSG Frontend CLI if you haven't done so already.

```
npm i ssg-frontend-cli -g
```

Run it to create a new project

```
ssg-frontend {project-name}
```

### Optional Extras

## Firebase

Follow the steps located here https://git.solidstategroup.com/solidstategroup/firebase-project-starter. After cloning the repo in step 1, copy the contents of the folder to the fire-auth folder in the boilerplate root directory. ```cd``` to the folder and continue following the remaining steps. Note that for step 4 you need to select hosting and for most of the other questions you simply hit enter except to "Do not overwrite index.html" which you should answer with "n"

Add Firebase to your web app in the Firebase console in order to get the basic Firebase JSON configuration object

Update the `firebase` object in `env/project_*.js`

# iOS

Add an iOS app in the Firebase console giving your bundle ID, download the `GoogleService-Info.plist` file and replace the existing one in the ios folder. Ignore the additional steps.

From `GoogleService-Info.plist` copy the `CLIENT_ID` value to `env/project_*.js` and replace `google.iosClientId` with it

Open up project settings with XCode and under the Capabilities tab update Keychain Sharing with the bundle ID

# Android

Get your debug SHA-1 signing certificate by running
```
keytool -list -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android
```
Add an Android app in the Firebase console giving your package name and debug SHA-1 signing certificate, download the `google-services.json` file and replace the existing one in ```mobile/android/app/src```. Ignore the additional steps.

From the `google-services.json` file copy the `client_id` value where `client_type == 3` to `env/project_*.js` and replace the `google.webClientId` value with it

## Facebook

Create a Facebook app on https://developers.facebook.com/apps/ to get a Facebook ID

Update the `facebook` object in `env/project_*.js`

# iOS

Open up project settings with XCode and under the Info tab update `FacebookAppId` and `FacebookDisplayName`.

Update the three URL types, first one with the Facebook ID, 2nd with iosClientID from `env/project_*.js` and third with the bundle ID

# Android

Open `android/app/src/main/res/values/strings.xml` and change the Facebook app ID's for `fb_app_id` and `fb_login_protocol_scheme`.

## Fastlane

From the `mobile` folder.

Generate app icons:

`fastlane icon`

Deploy Testflight build:

`fastlane beta`

Release production build:

`fastlane release`
