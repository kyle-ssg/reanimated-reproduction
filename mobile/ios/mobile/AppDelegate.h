#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@class RCTBridge; // REACT_NATIVE_REANIMATED


@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, readonly) RCTBridge *bridge; // REACT_NATIVE_REANIMATED

@end
