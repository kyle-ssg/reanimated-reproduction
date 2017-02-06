# 3rd Party Integrations

## Contents

1. [Firebase](#firebase)
2. [Facebook](#facebook)
3. [Google](#google)
4. [Fabric Digits](#fabric-digits)
5. [Google Analytics](#google-analytics)
6. [Branch.io](#branchio)

### Firebase

Follow the steps located here https://git.solidstategroup.com/solidstategroup/firebase-project-starter. After cloning the repo in step 1, copy the contents of the folder to the fire-auth folder in the boilerplate root directory. ```cd``` to the folder and continue following the remaining steps. Note that for step 4 you need to select hosting and for most of the other questions you simply hit enter except to "Do not overwrite index.html" which you should answer with "n"

Add Firebase to your web app in the Firebase console in order to get the basic Firebase JSON configuration object

Update the `firebase` object in `env/project_*.js`

##### iOS

Add an iOS app in the Firebase console giving your bundle ID, download the `GoogleService-Info.plist` file and replace the existing one in the ios folder. Ignore the additional steps.

From `GoogleService-Info.plist` copy the `CLIENT_ID` value to `env/project_*.js` and replace `google.iosClientId` with it

Open up project settings with XCode and under the Capabilities tab update Keychain Sharing with the bundle ID

##### Android

Get your debug SHA-1 signing certificate by running
```
keytool -list -alias androiddebugkey -keystore ~/.android/debug.keystore -storepass android -keypass android
```
Add an Android app in the Firebase console giving your package name and debug SHA-1 signing certificate, download the `google-services.json` file and replace the existing one in ```mobile/android/app/src```. Ignore the additional steps.

From the `google-services.json` file copy the `client_id` value where `client_type == 3` to `env/project_*.js` and replace the `google.webClientId` value with it.

### Facebook

Create a Facebook app on https://developers.facebook.com/apps/ to get a Facebook ID

Update the `facebook` object in `env/project_*.js`

##### iOS

Open up project settings with XCode and under the Info tab update `FacebookAppId` and `FacebookDisplayName`.

Update the three URL types, first one with the Facebook ID, 2nd with iosClientID from `env/project_*.js` and third with the bundle ID

![iOS Facebook](http://g.recordit.co/GDqmbyI6Gb.gif)

##### Android

Open `android/app/src/main/res/values/strings.xml` and change the Facebook app ID's for `fb_app_id` and `fb_login_protocol_scheme`.

### Google

You should only follow this section if you do not intend to add Firebase support in your application.

##### iOS

Go to [Google Developers Console](https://developers.google.com/mobile/add?platform=ios&cntapi=signin&cnturl=https:%2F%2Fdevelopers.google.com%2Fidentity%2Fsign-in%2Fios%2Fsign-in%3Fconfigured%3Dtrue&cntlbl=Continue%20Adding%20Sign-In) and generate a `GoogleService-Info.plist` configuration file from either a new Google app or an existing one and replace the existing one in `mobile/ios`.

##### Android

Go to [Google Developers Console](https://developers.google.com/mobile/add?platform=android&cntapi=signin&cnturl=https:%2F%2Fdevelopers.google.com%2Fidentity%2Fsign-in%2Fandroid%2Fsign-in%3Fconfigured%3Dtrue&cntlbl=Continue%20Adding%20Sign-In) and generate a `google-services.json`configuration file from either a new Google app or an existing one and replace the existing one in `mobile/android/app/src`.

### Fabric Digits

##### iOS

Go to the [Fabric Digits installation guide for iOS](https://fabric.io/kits/ios/digits/install). You will need to log in to create Twitter applications and get API keys.

Update the Run Script build phase from within Xcode with the correct API key and secret.

![Digits Run Script](https://git.solidstategroup.com/solidstategroup/ssg-frontend-boilerplate/raw/master/ThirdPartyDigits.png)

In the Project Navigator, right click on Info.plist within the mobile folder and 'Open as' -> 'Source Code'. Under the Fabric key update the APIKey, consumerKey and consumerSecret.

![Digits Run Script](https://git.solidstategroup.com/solidstategroup/ssg-frontend-boilerplate/raw/master/ThirdPartyDigits2.png)

##### Android

Go to the [Fabric Digits installation guide for Android](https://fabric.io/kits/android/digits/install). You will need to log in to create Twitter applications and get API keys.

Update the API Key and API secret in `mobile/android/app/src/main/AndroidManifest.xml` under the `<react-native-fabric-digits>` comment.

### Google Analytics

Once you have your Google Analytics tracking code (https://support.google.com/analytics/answer/1032385?hl=en), update the `analytics` value in `env/project_*.js`.

### Branch.io

Create a Branch.io app at https://branch.io in order to get a API key and secret.

##### iOS

Open up `Info.plist` inside the `mobile` folder and update the `branch_key` live and test values

Under URL types update Item 0 -> URL Schemes -> Item 0 from `ssgfeb` to the URL scheme you are going to use.

For universal linking support, go to Project Settings and under Capabilites update the Associated Domains to the 4 character domain name found in your Branch.io apps settings.

![iOS Branch.io](http://g.recordit.co/u9xPBrOoGn.gif)

##### Android

Open up `AndroidManifest.xml` and find the `<intent-filter>` with `android:scheme` set to `ssgfeb`. Update this value with the URL scheme you are going to use.

Within the same file update the `io.branch.sdk.BranchKey` metadata value with the live Branch.io API key.

