import React, { Component } from 'react'
import { Image } from 'react-native'

type ComponentType = {
  uri: string
  width?: number
  height?: number
}
type StateType = {
  width: number
  height: number
}
export default class AutoScaleImage extends Component<
  ComponentType,
  StateType
> {
  state: StateType = {
    width: 0,
    height: 0,
  }

  constructor(props) {
    super(props)
    Image.getSize(this.props.uri, (width, height) => {
      if (this.props.width && !this.props.height) {
        this.setState({
          width: this.props.width,
          height: height * (this.props.width / width),
        })
      } else if (!this.props.width && this.props.height) {
        this.setState({
          width: width * (this.props.height / height),
          height: this.props.height,
        })
      } else {
        this.setState({ width: width, height: height })
      }
    })
  }

  render() {
    return (
      <Image
        source={{ uri: this.props.uri }}
        style={{ height: this.state.height, width: this.state.width }}
      />
    )
  }
}
