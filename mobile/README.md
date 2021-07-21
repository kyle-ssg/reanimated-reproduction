Manual changes from a vanilla react-native setup

- disabled flipper for now since it doesnt compile in prod mode 
- added .jsconfig for aliases
- added appcenter pre/postbuild
- changed app.json
- changed prettierrc
- changed babel.config - adds module-resolver aliases for import "common/x" 
- changed babel.config - transform-remove-console for production 
- changed .gitignore to include useful things 
- added eslintrc/eslintignore
- added postinstall step to auto pod install
- added pre-build/post-build step sh files for appcenter 
- added react-native-reanimated and turbo module support, see babel.config 
- using hermes engine, mainly due to react-native-reanimated

** iOS Changes **
- added Swift Bridging Header
- remove tvIOS / Tests from xcode project + pod file

**CodePush iOS**
- see AppDelegate.m 
- see info.plist

**CodePush android**
- see app/build.gradle 
- see MainApplication.java
- strings.xml contains codepush deployment key

**Android Flavours**
- There are 2 flavours of build (see app/build.gradle)
google-services.json and keys are contained within here
    - UAT used for local and uat builds (android/src/uat)
    - prod used for production builds (android/src/prod)
    - check package.json for running these
**iOS Flavours**
- There are 3 targets with 2 plist files
    - mobile: local pointing to info.plist and using uat bundle id
    - appcenter-staging: release config pointing to info.plist and using uat bundle id
    - appcenter: release config pointing to production_appcenter.plist and using production bundle id

**Android Multidex**
    def multidex_version = "2.0.1"
    implementation 'androidx.multidex:multidex:$multidex_version'

**Android appname**
    MainActivity.java and settings.gradle resolve the name to boilerplate to match app.json

**Storybook**
 - adds "core-js": "^3.0.1" for smartknobs
 - adds smartknobs / react

**Firebase iOS**
- Added GoogleService-Info.plist / GoogleService-Staging.plist to ios/mobile
- Added REACT_NATIVE_FIREBASE build step, targets other than appcenter-procution copy  GoogleService-Staging.plist, check each
- see AppDelegate.m 

**Firebase Android**
- Added google-services.json to src/flavour_name
- see build.gradle 
- see app/build.gradle
- Contrary to docs, needed classpath 'com.google.gms:google-services:4.3.3' //REACT_NATIVE_FIREBASE 

Dev dependencies 
babel-plugin-module-resolver: used to allow aliases such as import "common/x"

**Non-vanilla concepts**
- react-native-globals means you don't have to import react native components
- Don't use AsyncStorage directly, use API.storage
- There's a global stylesheet accessibile via Styles.xStyle, see styles/style_screen.js
- See metro.config for module 
- .eslint lives in parent folder
- common folder is outside of mobile folder for cross platform purposes 

**Fastlane appicons**
Fastlane allows you to automatically set icons according to AppIcon.png in ios, to run:
- brew install fastlane
- cd ios && fastlane install_plugins
- cd ios && fastlane icon  // This will override your app icons with AppIcon.png
- for android, the simplest approach is to just use android studio since it resizes icons for you 

**Extras** 
Disabled optional functionality
- Branch.io (AndroidManifest, MainApplication) (info.plist, production_appcenter.plist and AppDelegate) 
- api.js uses some libraries that may or may not be installed, you'll generally get an alert if something is missing



**Detox** 
Detox is used for end to end testing, to use install applesimutils

```
brew tap wix/brew
brew install applesimutils
```

