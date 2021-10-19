package com.mobile.project;

import com.facebook.react.ReactActivity;

// import io.branch.rnbranch.*; // REACT_NATIVE_BRANCH
// import android.content.Intent; // REACT_NATIVE_BRANCH
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
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  // REACT_NATIVE_BRANCH:
  //         @Override
  //         protected void onStart() {
  //             super.onStart();
  //             RNBranchModule.initSession(getIntent().getData(), this);
  //         }
  //
  //         @Override
  //         public void onNewIntent(Intent intent) {
  //             super.onNewIntent(intent);
  //             setIntent(intent);
  //         }
}
