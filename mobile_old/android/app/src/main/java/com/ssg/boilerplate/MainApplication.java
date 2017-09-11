package com.ssg.boilerplate;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.rnfs.RNFSPackage;
import com.smixx.fabric.FabricPackage;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;
import io.branch.rnbranch.*;
import io.branch.referral.Branch;
import com.proxima.RCTDigits.DigitsPackage;
import com.reactlibrary.googlesignin.RNGoogleSignInPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFSPackage(),
          new FabricPackage(),
          new RNBranchPackage(),
          new DigitsPackage(),
          new RNGoogleSignInPackage(),
          new FIRMessagingPackage(),
          new VectorIconsPackage(),
          new GoogleAnalyticsBridgePackage(),
          new FacebookLoginPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    Branch.getAutoInstance(this);
    Fabric.with(this, new Crashlytics());
  }
}
