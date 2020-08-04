/**
 * Created by kylejohnson on 09/09/15.
 */
import React, { PureComponent } from 'react';
import Animation from 'lottie-react-native';

const json = { ...require('./loader.json') };

json.assets[0].layers[0].shapes[0].it[1].c.k = [1, 0, 0, 1];

export const Loader = class extends PureComponent {
  static displayName = 'LOADER';

  render() {
    return (
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
  }
};

Loader.propTypes = {};

module.exports = Loader;
