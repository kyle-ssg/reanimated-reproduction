import React, { Component } from 'react';
import 'react-native-globals';
import '../app/style/style_screen';
import '../app/components/base';
import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StorybookUIRoot, { getStory, withPaddedContainer, withNavbarWrapper, setup } from './setup';
import SharedElementExample from '../app/screens/examples/SharedElementExample';
import ErrorMessage from '../app/components/ErrorMessage';
// import ExampleTabs from './examples/ExampleTabs';
import Button, { ButtonNav, ButtonPrimary } from '../app/components/base/forms/Button';
import StackExample from './examples/StackExample';
import SegmentedControl from 'components/SegmentedControl';
import ExampleTabs from './examples/ExampleTabs';
import TextInputIcon from 'components/TextInputIcon';
import WithSetValue from '../../common/providers/WithSetValue';

import TextInput from '../app/components/base/forms/TextInput';
import SelectBox, { SelectBoxSmall } from '../app/components/base/forms/SelectBox';
import ListItem from '../app/components/base/ListItem';
import CustomModal from 'components/CustomModal';
import BottomDrawer from 'components/BottomDrawer';

setup(() => {
  getStory("Bottom Drawer")
    .add("default", () => (
        <WithSetValue defaultValue={false}>
            {({ value, setValue }) => (
                <View style={Styles.p10}>
                    <BottomDrawer
                      height={DeviceHeight/2}
                      style={Styles.centeredContainer}
                      onDismissPress={() => setValue(false)}
                      visible={value}
                    >
                        <Text>Content</Text>
                    </BottomDrawer>
                    <Button onPress={() => setValue(true)}>
                        {`Toggle Modal(${value})`}
                    </Button>
                </View>
        )}
        </WithSetValue>
    ))
    .add("disable manual dismissing", () => (
        <WithSetValue defaultValue={false}>
            {({ value, setValue }) => (
                <View style={Styles.p10}>
                    <BottomDrawer
                      preventDismiss
                      height={DeviceHeight/2}
                      style={Styles.centeredContainer}
                      onDismissPress={() => setValue(false)}
                      visible={value}
                    >
                        <Text>Content</Text>
                        <Button onPress={() => setValue(false)}>
                            {`Dismiss`}
                        </Button>
                    </BottomDrawer>
                    <Button onPress={() => setValue(true)}>
                        {`Toggle Modal(${value})`}
                    </Button>
                </View>
        )}
        </WithSetValue>
    ))
  getStory("Modal")
    .add("default", () => (
        <WithSetValue defaultValue={false}>
            {({ value, setValue }) => (
                <View style={Styles.p10}>
                    <CustomModal
                      dark
                      style={Styles.centeredContainer}
                      onDismissPress={() => setValue(false)}
                      visible={value}
                    >
                        <View style={{ width:200,height:100, backgroundColor:"white" }}>
                            <Text>
                                Modal content
                            </Text>
                        </View>
                    </CustomModal>
                    <Button onPress={() => setValue(true)}>
                        {`Toggle Modal(${value})`}
                    </Button>
                </View>
      )}
        </WithSetValue>
    ))
    .add("dont fade children with backdrop", () => (
        <WithSetValue defaultValue={false}>
            {({ value, setValue }) => (
                <View style={Styles.p10}>
                    <CustomModal
                      fadeContent={false}
                      dark
                      style={Styles.centeredContainer}
                      onDismissPress={() => setValue(false)}
                      visible={value}
                    >
                        <View style={{ width:200,height:100, backgroundColor:"white" }}>
                            <Text>
                                Modal content
                            </Text>
                        </View>
                    </CustomModal>
                    <Button onPress={() => setValue(true)}>
                        {`Toggle Modal(${value})`}
                    </Button>
                </View>
      )}
        </WithSetValue>
    ));
  getStory('SegmentedControl')
    .add('all',()=>{
      const items = [
        { label:"First", value:1 },
        { label:"Second", value:2 },
        { label:"Third", value:3 },
      ]
      return (
          <Flex style={{ backgroundColor:'white', padding: 20 }}>
              <WithSetValue defaultValue={items[1]}>
                  {({ value,setValue })=>(
                      <SegmentedControl
                        onChange={setValue}
                        value={value}
                        items={items}
                      />
            )}
              </WithSetValue>
              <View style={{ marginTop:10, marginBottom:20 }}>
                  <WithSetValue defaultValue={items[2]}>
                      {({ value,setValue })=>(
                          <SegmentedControl
                            paddingX={20}
                            trackStyle={{ paddingHorizontal:20, backgroundColor:"#222", height:64, paddingVertical:10 }}
                            textStyle={{ color:"#ccc" }}
                            textPressedStyle={{ color:"white" }}
                            textActiveStyle={{ color:"white" }}
                            barStyle={{ backgroundColor:"#333", }}
                            onChange={setValue}
                            value={value}
                            items={items}
                          />
              )}
                  </WithSetValue>
              </View>

              <SegmentedControl
                disabled
                items={items}
                value={items[1]}
              />
          </Flex>
      )
    })

  getStory('Type')
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
        <>
            <H1 style={Styles.mb5}>Header 1</H1>
            <H2 style={Styles.mb5}>Header 2</H2>
            <H3 style={Styles.mb5}>Header 3</H3>
            <H4 style={Styles.mb5}>Header 4</H4>
            <ErrorMessage style={Styles.mb5}>Header 4</ErrorMessage>
        </>
    ));

  getStory('Button')
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
        <>
            <Button>Button</Button>
            <ButtonSecondary>Button Secondary</ButtonSecondary>
            <ButtonTertiary>Button Secondary</ButtonTertiary>
            <ButtonNav>
                <ION
                  style={{
                color: palette.primary,
                fontSize: styleVariables.fontSizeH1,
              }}
                  name="ios-close"
                />
            </ButtonNav>
        </>
    ))

  getStory('Forms')
    .add('all',()=>{

      return (
          <Flex style={{ backgroundColor:'white', padding: 20 }}>

              <TextInput style={Styles.mb10} title={'Name'}/>
              <TextInputIcon
                style={Styles.mb10}
                icon={<ION name="ios-star"/>}
              />

              <SelectBox title="Date" icon={<ION name="ios-search"/>} style={Styles.mb10} >
                  12 July
              </SelectBox>

              <SelectBox style={Styles.mv10} />

              <WithSetValue defaultValue={false}>
                  {({ value, setValue }) => (
                      <Switch
                        style={Styles.mt10}
                      />
                  )}
              </WithSetValue>
          </Flex>
      )
    })
  getStory('Tabs')
    .add('default', () => (
        <>
            <ExampleTabs/>
        </>
    ))
    .add('scrolled', () => (
        <>
            <ExampleTabs scrollEnabled/>
        </>
    ));

  getStory('Routes')
    .add('all', () => (
        <StackExample/>
    ))
  getStory('SharedElement')
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
        <>
            <SharedElementExample/>
            <SharedElementExample/>
            <SharedElementExample/>
            <SharedElementExample/>
            <SharedElementExample/>
            <SharedElementExample/>
        </>
    ));

  getStory('Lists')
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
        <>
            <ListItem icon={<FontAwesome name="plus"/>}><Text>Hey</Text></ListItem>
        </>
    ));

});

export default StorybookUIRoot;
