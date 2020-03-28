package com.mobile.project;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationPackage;
import com.reactnativenavigation.react.NavigationReactNativeHost;

// import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
// import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line
// import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // <-- Add this line
import com.microsoft.codepush.react.CodePush;

import java.util.ArrayList;
import java.util.List;

public class MainApplication extends NavigationApplication {

    private final ReactNativeHost mReactNativeHost =
            new NavigationReactNativeHost(this) {
                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }

                @Override
                protected String getJSBundleFile() {
                    return CodePush.getJSBundleFile();
                }

                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                public List<ReactPackage> getPackages() {
                    ArrayList<ReactPackage> packages = new PackageList(this).getPackages();

                    //              packages.add(new RNFirebaseNotificationsPackage());
                    return packages;
                }
            };


    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
