import React, { Component, FunctionComponent } from 'react';
import Delay from 'components/utility-components/Delay';

type LazyTabsType = {
  padding?: number;
  lazy?: boolean;
  index: number;
  children: React.ReactNode[];
}

class LazyTabs extends Component<LazyTabsType> {

  scrollView = null;

  static defaultProps = {
    padding: 0
  }

  goTab = (index) => {
    const scrollView: ReactNative.ScrollView = this.scrollView;
    scrollView.scrollTo({
      x: (DeviceWidth - this.props.padding) * (index - 1),
      animated: false,
    });
    this.setState({ activeIndex: index - 1 });
  };

  shouldComponentUpdate(nextProps: Readonly<LazyTabsType>, nextState: Readonly<{}>, nextContext: any): boolean {
    return nextProps.index!== this.props.index;
  }

  componentDidUpdate(prevProps: Readonly<LazyTabsType>, prevState: Readonly<{}>, snapshot?: any) {
    if(prevProps.index!==this.props.index) {
      this.goTab(this.props.index)
    }
  }


  onRef = (scrollView: ReactNative.ScrollView) => {
    this.scrollView = scrollView;
  };

  renderChild = (child,childIndex)=> {
    const { props:{ lazy,padding=0,index } } = this;
    const selectedIndex = index-1;
    const width = DeviceWidth-padding;
    const isVisible = selectedIndex === childIndex;
    return (
        <Delay key={childIndex} delay={lazy && !isVisible?500:0 }>
            <View style={{ width }}>
                <View style={{ display:isVisible?"flex":"none" }}>
                    {child}
                </View>
            </View>
        </Delay>
    )
  }

  render() {
    const {
      props: { index, padding, children },
    } = this;
    const width = DeviceWidth-padding;
    return (
        <ScrollView style={{ width }}
          scrollEnabled={false}
          ref={this.onRef}
          bounces={false}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
            {
              children.map(this.renderChild)
            }
        </ScrollView>
    );
  }
}


export default LazyTabs;
