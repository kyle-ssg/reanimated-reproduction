/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLinkingManager.h>

//FACEBOOK_LOGIN
//#import <FBSDKCoreKit/FBSDKCoreKit.h>
//GOOGLE_LOGIN
//#import "RNGoogleSignin.h"
//REACT_NATIVE_FIREBASE
@import Firebase;
//REACT_NATIVE_NAVIGATION
#import <ReactNativeNavigation/ReactNativeNavigation.h>
//REACT_NATIVE_BRANCH
//#import <RNBranch/RNBranch.h> // at the top
//REACT_NATIVE_CODE_PUSH
#import <CodePush/CodePush.h>


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //REACT_NATIVE_FUREBASE
  [FIRApp configure];

//  [RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES]; // <-- add this

#if DEBUG
  for (NSString* family in [UIFont familyNames])
  {
    NSLog(@"%@", family);
    for (NSString* name in [UIFont fontNamesForFamilyName: family])
    {
      NSLog(@" %@", name);
    }
  }
#endif

  [ReactNativeNavigation bootstrap:[self sourceURLForBridge:nil] launchOptions:launchOptions];

//  [[FBSDKApplicationDelegate sharedInstance] application:application
//                           didFinishLaunchingWithOptions:launchOptions];

  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [CodePush bundleURL];
#endif
}


// Facebook/Google/Branch.io URL handling
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {

// REACT_NATIVE_GOOGLE_SIGNIN
//  if ([RNGoogleSignin application:application
//                          openURL:url
//                sourceApplication:sourceApplication
//                       annotation:annotation
//       ]) {
//    return YES;
//  }

  //
//  if ([RNBranch.branch application:application openURL:url sourceApplication:sourceApplication annotation:annotation]) {
//    return YES;
//  }

  // REACT_NATIVE_FACEBOOK_SIGNIN
//  if ([[FBSDKApplicationDelegate sharedInstance] application:application
//                                                     openURL:url
//                                           sourceApplication:sourceApplication
//                                                  annotation:annotation
//       ]) {
//    return YES;
//  }

  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

// REACT_NATIVE_BRANCH
//- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
//  return [RNBranch continueUserActivity:userActivity];
//}
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
  return [RCTLinkingManager application:application
                   continueUserActivity:userActivity
                     restorationHandler:restorationHandler];
}
@end
