import React, { Component } from 'react';
import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class ScaledImage extends Component {
  static displayName = 'ScaledImage'

  static propTypes = {
      source: propTypes.object,
      allowUpscale: propTypes.bool,
      width: propTypes.number,
      height: propTypes.number,
      priority: propTypes.string,
  };

  constructor(props) {
      super(props);
      this.state = { source: this.props.source };
  }

  componentWillMount() {
      Image.getSize(this.props.source.uri, (width, height) => {
          if (this.props.width && !this.props.height) {
              const sensibleWidth = this.props.allowUpscale ? this.props.width : Math.min(this.props.width, width);
              this.setState({
                  width: sensibleWidth,
                  height: height * (sensibleWidth / width),
              });
          } else if (!this.props.width && this.props.height) {
              this.setState({
                  width: width * (this.props.height / height),
                  height: this.props.height,
              });
          } else {
              this.setState({ width, height });
          }
      });
  }

  render() {
      const { priority } = this.props;
      return (
          <FastImage
            source={this.state.source}
            resizeMode={FastImage.resizeMode.contain}
            priority={priority}
            style={{ alignSelf: 'center', height: this.state.height, width: this.state.width }}
          />
      );
  }
}
