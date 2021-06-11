import React from "react";
import Animation from "lottie-react-native";
import { View } from "react-native";

const json = { ...require("./loader.lottie.json") };

json.assets[0].layers[0].shapes[0].it[1].c.k = [0.82, 0.79, 0.8, 1];

export const Loader = () => (
  <View style={{ opacity: 0.75 }}>
    <Animation
      autoPlay
      style={{
        width: 40 * 1.25,
        height: 30 * 1.25,
      }}
      loop
      source={json}
    />
  </View>
);

export default Loader;
