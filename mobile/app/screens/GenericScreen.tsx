import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import NavBackgroundHelper from '../components/utility-components/NavBackgroundHelper';
import CustomNavbar from '../components/CustomNavbar';

type ComponentType = Screen & {
  text: string
}

class GenericScreen extends Component<ComponentType> {
  state = {}
  render() {
      return (
          <>
              <Image
                style={{ height:300 }}
                source={{
                    uri:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}/>

              <CustomNavbar style={{ position:'absolute', top:0, left:0, right:0 }} title="Custom navbar"/>
          </>
      )
  }
}

export default withScreen(GenericScreen)
