/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <Fabric/Fabric.h>
#import <DigitsKit/DigitsKit.h>
#import <Crashlytics/Crashlytics.h>
#import "RNFIRMessaging.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>
#import <react-native-branch/RNBranch.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Branch.io
  // Uncomment this line to use the test key instead of the live one.
  // [RNBranch useTestInstance]
  [RNBranch initSessionWithLaunchOptions:launchOptions isReferrable:YES];
  
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"mobile"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  [Fabric with:@[[Digits class], [Crashlytics class]]];

  [FIRApp configure];
  [[UNUserNotificationCenter currentNotificationCenter] setDelegate:self];
  
  NSError* configureError;
  [[GGLContext sharedInstance] configureWithError: &configureError];
  NSAssert(!configureError, @"Error configuring Google services: %@", configureError);
  
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                  didFinishLaunchingWithOptions:launchOptions];
}

// FCM
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler
{
  [RNFIRMessaging willPresentNotification:notification withCompletionHandler:completionHandler];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler
{
  [RNFIRMessaging didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
}

//You can skip this method if you don't want to use local notification
-(void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
  [RNFIRMessaging didReceiveLocalNotification:notification];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(nonnull NSDictionary *)userInfo fetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler{
  [RNFIRMessaging didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

// Facebook
- (void)applicationDidBecomeActive:(UIApplication *)application {
  [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
  [FBSDKAppEvents activateApp];
}

// Facebook/Google/Branch.io URL handling
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  if (![RNBranch handleDeepLink:url]) {
    if( [url.absoluteString rangeOfString: @"com.googleusercontent.apps" ].location != NSNotFound ) {
      return [[GIDSignIn sharedInstance] handleURL:url sourceApplication:sourceApplication annotation:annotation];
    }
    
    return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                          openURL:url
                                                sourceApplication:sourceApplication
                                                       annotation:annotation];
  }
  
  return YES;
}
  
// Branch.io
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *restorableObjects))restorationHandler {
  return [RNBranch continueUserActivity:userActivity];
}

@end
