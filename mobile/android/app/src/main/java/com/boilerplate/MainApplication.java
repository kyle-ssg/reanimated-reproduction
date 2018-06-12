//STANDARD REACT_NATIVE STUFF
package com.boilerplate;
import android.app.Application;
import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

//REACT_NATIVE_BRANCH
import io.branch.rnbranch.RNBranchPackage;
import io.branch.referral.Branch;

//REACT_NATIVE_CRASHLYTICS
import com.smixx.fabric.FabricPackage;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

//REACT_NATIVE_FIREBASE
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // <-- Add this line
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // <-- Add this line

import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;

//REACT_NATIVE_LOTTIE
import com.airbnb.android.react.lottie.LottiePackage;

//VECTOR_ICONS
import com.oblador.vectoricons.VectorIconsPackage;

//REACT_NATIVE_DEVICE_INFO
import com.learnium.RNDeviceInfo.RNDeviceInfo;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new NavigationReactPackage(),

          //REACT_NATIVE_FIRE_BASE
              new RNFirebasePackage(),
              new RNFirebaseMessagingPackage(),
              new RNFirebaseAnalyticsPackage(),
          //END OF REACT_NATIVE_FIRE_BASE

          new FabricPackage(),
          new LottiePackage(),
          new VectorIconsPackage(),
          new RNDeviceInfo(),
          new RNBranchPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(this, new Crashlytics());
    Branch.getAutoInstance(this);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
