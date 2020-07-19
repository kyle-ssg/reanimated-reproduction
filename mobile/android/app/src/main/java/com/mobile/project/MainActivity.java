package com.mobile.project;

import com.facebook.react.ReactActivity;


// import io.branch.rnbranch.*; // REACT_NATIVE_BRANCH
// import android.content.Intent; // REACT_NATIVE_BRANCH

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "boilerplate";
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
