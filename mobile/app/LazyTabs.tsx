import React, { Component, FunctionComponent } from 'react'
import Delay from 'components/utility-components/Delay'
type LazyTabsType = {
  padding?: number
  lazy?: boolean
  lazyDelay?: number
  mountOnScroll?: boolean
  animated?: boolean
  index: number
  extraData?: any
  children: React.ReactNode[]
}
class LazyTabs extends Component<LazyTabsType> {
  scrollView = null
  state = {
    mounted: {
      [this.props.index - 1]: true,
    },
  }
  static defaultProps = {
    padding: 0,
    lazyDelay: 500,
    mountOnScroll: false,
    index: 0,
    keyboardShouldPersistTaps: 'handled',
  }
  goTab = (index) => {
    const scrollView: ReactNative.ScrollView = this.scrollView
    scrollView.scrollTo({
      x: (DeviceWidth - this.props.padding) * (index - 1),
      animated: !!this.props.animated,
    })
    const mounted = this.state.mounted
    mounted[index - 1] = true
    this.setState({ activeIndex: index - 1, mounted })
  }
  shouldComponentUpdate(
    nextProps: Readonly<LazyTabsType>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    return (
      nextProps.index !== this.props.index ||
      this.props.extraData !== nextProps.extraData
    )
  }
  componentDidUpdate(
    prevProps: Readonly<LazyTabsType>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ) {
    if (prevProps.index !== this.props.index) {
      this.goTab(this.props.index)
    }
  }
  onRef = (scrollView: ReactNative.ScrollView) => {
    this.scrollView = scrollView
  }
  renderChild = (child, childIndex) => {
    const {
      props: { lazy, padding = 0, index, lazyDelay, mountOnScroll },
      state: { mounted },
    } = this
    const selectedIndex = index - 1
    const width = DeviceWidth - padding
    const isVisible = selectedIndex === childIndex
    return (
      <Delay key={childIndex} delay={lazy && !isVisible ? lazyDelay : 0}>
        <View style={{ width }}>
          <View style={{ display: isVisible ? 'flex' : 'none', flex: 1 }}>
            {!isVisible && mountOnScroll && !mounted[childIndex] ? null : child}
          </View>
        </View>
      </Delay>
    )
  }
  render() {
    const {
      props: { index, padding, children, keyboardShouldPersistTaps },
    } = this
    const width = DeviceWidth - padding
    return (
      <ScrollView
        style={{ width }}
        scrollEnabled={false}
        decelerationRate='fast'
        ref={this.onRef}
        bounces={false}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        {children.map(this.renderChild)}
      </ScrollView>
    )
  }
}
export default LazyTabs
