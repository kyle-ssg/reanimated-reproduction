package com.mobile.project;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.List;

import androidx.annotation.Nullable;
import com.facebook.react.BuildConfig;

// import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
// import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line
// import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // <-- Add this line
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.PackageList;


import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;

public class MainApplication extends NavigationApplication {

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    protected ReactNativeHost createReactNativeHost() {
        return new NavigationReactNativeHost(this) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }

            @Override
            protected String getJSBundleFile() {
                return CodePush.getJSBundleFile();
            }
        };
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
         @SuppressWarnings("UnnecessaryLocalVariable")
             List<ReactPackage> packages = new PackageList(this).getPackages();
             // Packages that cannot be autolinked yet can be added manually here, for example:
//              packages.add(new RNFirebaseMessagingPackage());
//              packages.add(new RNFirebaseNotificationsPackage());
//              packages.add(new RNFirebaseAnalyticsPackage());
             // packages.add(new MyReactNativePackage());
             return packages;
    }
}
