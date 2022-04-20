package com.mobile.project;

import com.facebook.react.ReactActivity;

// REACT_NATIVE_REANIMATED
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "boilerplate";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       ReactRootView reactRootView = new RNGestureHandlerEnabledRootView(MainActivity.this);
       // If you opted-in for the New Architecture, we enable the Fabric Renderer.
       reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
       return reactRootView;
      }
    };
  }

  //         @Override
  //         public void onNewIntent(Intent intent) {
  //             super.onNewIntent(intent);
  //             setIntent(intent);
  //         }
}
