import React from "react";
import { SafeAreaView } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native'
export const decorators = [
  (StoryFn) => (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
            <StoryFn />
          </SafeAreaView>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>

  ),
];

export const parameters = {
};
