import React, { Component } from 'react'
import 'react-native-globals'
import 'common/style/_style_screen'
import '../app/components/base'
import StorybookUIRoot, {
  getStory,
  withPaddedContainer,
  withNavbarWrapper,
  setup,
} from './setup'
import ErrorMessage from '../app/components/ErrorMessage'
import ExampleTabs from './examples/ExampleTabs'
import Button, {
  ButtonNav,
  ButtonPrimary,
} from '../../common/components/forms/Button'
import StackExample from './examples/StackExample'
import SegmentedControl from 'components/SegmentedControl'
import WithSetValue from '../../common/animation-util/WithSetValue'
import TextInput from '../../common/components/forms/TextInput'
import SelectBox from '../../common/components/forms/SelectBox'
import ListItem from '../app/components/base/ListItem'
import CustomModal from 'components/CustomModal'
import BottomDrawer from 'components/BottomDrawer'

setup(() => {
  getStory('Bottom Drawer')
    .add('default', () => (
      <WithSetValue defaultValue={false}>
        {({ value, setValue }) => (
          <View style={Styles.p10}>
            <BottomDrawer
              height={DeviceHeight / 2}
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
    .add('disable manual dismissing', () => (
      <WithSetValue defaultValue={false}>
        {({ value, setValue }) => (
          <View style={Styles.p10}>
            <BottomDrawer
              preventDismiss
              height={DeviceHeight / 2}
              style={Styles.centeredContainer}
              onDismissPress={() => setValue(false)}
              visible={value}
            >
              <Text>Content</Text>
              <Button onPress={() => setValue(false)}>{`Dismiss`}</Button>
            </BottomDrawer>
            <Button onPress={() => setValue(true)}>
              {`Toggle Modal(${value})`}
            </Button>
          </View>
        )}
      </WithSetValue>
    ))
  getStory('Modal')
    .add('default', () => (
      <WithSetValue defaultValue={false}>
        {({ value, setValue }) => (
          <View style={Styles.p10}>
            <CustomModal
              dark
              style={Styles.centeredContainer}
              onDismissPress={() => setValue(false)}
              visible={value}
            >
              <View
                style={{ width: 200, height: 100, backgroundColor: 'white' }}
              >
                <Text>Modal content</Text>
              </View>
            </CustomModal>
            <Button onPress={() => setValue(true)}>
              {`Toggle Modal(${value})`}
            </Button>
          </View>
        )}
      </WithSetValue>
    ))
    .add('dont fade children with backdrop', () => (
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
              <View
                style={{ width: 200, height: 100, backgroundColor: 'white' }}
              >
                <Text>Modal content</Text>
              </View>
            </CustomModal>
            <Button onPress={() => setValue(true)}>
              {`Toggle Modal(${value})`}
            </Button>
          </View>
        )}
      </WithSetValue>
    ))
  getStory('SegmentedControl').add('all', () => {
    const items = [
      { label: 'First', value: 1 },
      { label: 'Second', value: 2 },
      { label: 'Third', value: 3 },
    ]
    return (
      <Flex style={{ backgroundColor: 'white', padding: 20 }}>
        <WithSetValue defaultValue={items[1]}>
          {({ value, setValue }) => (
            <SegmentedControl onChange={setValue} value={value} items={items} />
          )}
        </WithSetValue>
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <WithSetValue defaultValue={items[2]}>
            {({ value, setValue }) => (
              <SegmentedControl
                paddingX={20}
                trackStyle={{
                  paddingHorizontal: 20,
                  backgroundColor: '#222',
                  height: 64,
                  paddingVertical: 10,
                }}
                textStyle={{ color: '#ccc' }}
                textPressedStyle={{ color: 'white' }}
                textActiveStyle={{ color: 'white' }}
                barStyle={{ backgroundColor: '#333' }}
                onChange={setValue}
                value={value}
                items={items}
              />
            )}
          </WithSetValue>
        </View>

        <SegmentedControl disabled items={items} value={items[1]} />
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
        <ErrorMessage style={Styles.mb5}>Error Text</ErrorMessage>
      </>
    ))

  getStory('Button')
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
      <>
        <ButtonPrimary style={Styles.mb5}>Primary</ButtonPrimary>
        <ButtonSecondary style={Styles.mb5}>Button Secondary</ButtonSecondary>
        <ButtonTertiary style={Styles.mb5}>Button Tertiary</ButtonTertiary>
        <ButtonText style={Styles.mb5}>Text Button</ButtonText>
        <ButtonNav>
          <FA5Pro name='times' size={20} color={palette.primary} light />
        </ButtonNav>
      </>
    ))

  getStory('Forms').add('all', () => {
    return (
      <Flex style={[{ backgroundColor: 'white' }, Styles.p10]}>
        <TextInput
          selectionColor={palette.primary}
          placeholder={'Enter Name'}
          placeholderTextColor={'lightgrey'}
          title={'Name'}
        />
        <SelectBox
          title='Date'
          icon={
            <FA5Pro
              name='calendar-alt'
              size={20}
              color={palette.primary}
              light
            />
          }
        >
          12 July
        </SelectBox>

        <SelectBox style={Styles.mv10} />

        <WithSetValue defaultValue={false}>
          {({ value, setValue }) => <Switch />}
        </WithSetValue>
      </Flex>
    )
  })
  getStory('Tabs')
    .add('default', () => (
      <>
        <ExampleTabs />
      </>
    ))
    .add('scrolled', () => (
      <>
        <ExampleTabs scrollEnabled />
      </>
    ))

  getStory('Animation').add('default', () => (
    <View style={Styles.p10}>
      <H2 style={Styles.mb15}>Animation</H2>
      <Loader />
    </View>
  ))

  getStory('Routes').add('all', () => <StackExample />)

  getStory('Lists')
    .addDecorator(withPaddedContainer)
    .addDecorator(withNavbarWrapper)
    .add('all', () => (
      <>
        <ListItem
          icon={<FA5Pro name='plus' size={20} color={palette.primary} light />}
        >
          <Text>List Item text</Text>
        </ListItem>
        <ListItem>
          <Text>List Item text</Text>
        </ListItem>
      </>
    ))
})

export default StorybookUIRoot
