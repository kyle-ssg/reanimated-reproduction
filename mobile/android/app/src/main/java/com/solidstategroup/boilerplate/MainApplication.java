package com.solidstategroup.boilerplate;

import android.app.Application;
import android.util.Log;
import android.support.annotation.Nullable;
import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactApplication;
import ga.piroro.rnt.RNTPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.clipsub.rnbottomsheet.RNBottomSheetPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.reactlibrary.googlesignin.RNGoogleSignInPackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.wix.interactable.Interactable;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import cl.json.RNSharePackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rnfs.RNFSPackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.horcrux.svg.SvgPackage;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import io.branch.rnbranch.RNBranchPackage;
import io.branch.referral.Branch;


public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
         return Arrays.<ReactPackage>asList(
             new FIRMessagingPackage(),
             new FacebookLoginPackage(),
             new RNBottomSheetPackage(),
             new PickerPackage(),
             new RNGoogleSignInPackage(),
             new ImageResizerPackage(),
             new SvgPackage(),
             new Interactable(),
             new RNBranchPackage(),
             new LinearGradientPackage(),
             new LottiePackage(),
             new MPAndroidChartPackage(),
             new RCTCameraPackage(),
             new ReactNativeContacts(),
             new RNDeviceInfo(),
             new RNFetchBlobPackage(),
             new RNFSPackage(),
             new RNSharePackage(),
             new VectorIconsPackage()
         );
    }

     @Override
      public void onCreate() {
        super.onCreate();
        Branch.getAutoInstance(this);
      }

}


