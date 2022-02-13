#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

//REACT_NATIVE_BASELAYOUT enable linking based on Linking manager
#import <React/RCTLinkingManager.h>

//REACT_NATIVE_REANIMATED
#import <React/RCTCxxBridgeDelegate.h>
#import <ReactCommon/RCTTurboModuleManager.h>

// add headers (start)
#import <React/RCTDataRequestHandler.h>
#import <React/RCTFileRequestHandler.h>
#import <React/RCTHTTPRequestHandler.h>
#import <React/RCTNetworking.h>
#import <React/RCTLocalAssetImageLoader.h>
#import <React/RCTGIFImageDecoder.h>
#import <React/RCTImageLoader.h>
#import <React/JSCExecutorFactory.h>
#import <RNReanimated/RETurboModuleProvider.h>
#import <RNReanimated/REAModule.h>
// add headers (end)

//#ifdef FB_SONARKIT_ENABLED
//#import <FlipperKit/FlipperClient.h>
//#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
//#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
//#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
//#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
//#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>
//
//static void InitializeFlipper(UIApplication *application) {
//  FlipperClient *client = [FlipperClient sharedClient];
//  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
//  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
//  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
//  [client addPlugin:[FlipperKitReactPlugin new]];
//  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
//  [client start];
//}

//#endif
#import <Firebase.h> // REACT_NATIVE_FIREBASE
#import <CodePush/CodePush.h> // REACT_NATIVE_CODEPUSH

@interface AppDelegate() <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate> {
    RCTTurboModuleManager *_turboModuleManager;
}
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTEnableTurboModule(YES); // <- add
// #ifdef FB_SONARKIT_ENABLED
//   InitializeFlipper(application);
// #endif

  [FIRApp configure]; // REACT_NATIVE_FIREBASE

  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"boilerplate"
                                            initialProperties:nil];
  // Set the app background colour
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [CodePush bundleURL]; // REACT_NATIVE_CODEPUSH
//  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  _bridge_reanimated = bridge;
  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge
                                                              delegate:self
                                                             jsInvoker:bridge.jsCallInvoker];
 #if DEBUG
  [_turboModuleManager moduleForName:"RCTDevMenu"]; // <- add
 #endif
 __weak __typeof(self) weakSelf = self;
 return std::make_unique<facebook::react::JSCExecutorFactory>([weakSelf, bridge](facebook::jsi::Runtime &runtime) {
   if (!bridge) {
     return;
   }
   __typeof(self) strongSelf = weakSelf;
   if (strongSelf) {
     [strongSelf->_turboModuleManager installJSBindingWithRuntime:&runtime];
   }
 });
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

  // REACT_NATIVE_FACEBOOK_SIGNIN
//  if ([[FBSDKApplicationDelegate sharedInstance] application:application
//                                                     openURL:url
//                                           sourceApplication:sourceApplication
//                                                  annotation:annotation
//       ]) {
//    return YES;
//  }

  return [RCTLinkingManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (Class)getModuleClassFromName:(const char *)name
{
 return facebook::react::RETurboModuleClassProvider(name);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker
{
 return facebook::react::RETurboModuleProvider(name, jsInvoker);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                      instance:(id<RCTTurboModule>)instance
                                                     jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker
{
 return facebook::react::RETurboModuleProvider(name, instance, jsInvoker);
}

- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass
{
 if (moduleClass == RCTImageLoader.class) {
   return [[moduleClass alloc] initWithRedirectDelegate:nil loadersProvider:^NSArray<id<RCTImageURLLoader>> *{
     return @[[RCTLocalAssetImageLoader new]];
   } decodersProvider:^NSArray<id<RCTImageDataDecoder>> *{
     return @[[RCTGIFImageDecoder new]];
   }];
 } else if (moduleClass == RCTNetworking.class) {
   return [[moduleClass alloc] initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *{
     return @[
       [RCTHTTPRequestHandler new],
       [RCTDataRequestHandler new],
       [RCTFileRequestHandler new],
     ];
   }];
 }
 return [moduleClass new];
}

@end
