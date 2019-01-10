package com.ssg.boilerplate;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;

// This is here for 'react-native link'
// import com.facebook.react.ReactApplication;

import io.branch.rnbranch.RNBranchPackage;
import io.branch.referral.Branch;

import com.wix.interactable.Interactable;

import com.smixx.fabric.FabricPackage;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // <-- Add this line
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // <-- Add this line
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line

import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.airbnb.android.react.lottie.LottiePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.entria.views.RNViewOverflowPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.clipsub.rnbottomsheet.RNBottomSheetPackage;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            // the following line is present so that `react-native link` works correctly
            // new MainReactPackage(),
            new RNViewOverflowPackage(),
            new RNBottomSheetPackage(),
            new Interactable(),

            //REACT_NATIVE_FIRE_BASE
            new RNFirebasePackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseAnalyticsPackage(),
            new RNFirebaseNotificationsPackage(),
            //END OF REACT_NATIVE_FIRE_BASE

            new FabricPackage(),
            new LottiePackage(),
            new VectorIconsPackage(),
            new RNDeviceInfo(),
            new RNBranchPackage(),
            new LinearGradientPackage()
        );
    }

    @Override public
    String getJSMainModuleName() { return "index"; }


    @Override
    public void onCreate() {
        super.onCreate();
        Branch.getAutoInstance(this);
    }

}