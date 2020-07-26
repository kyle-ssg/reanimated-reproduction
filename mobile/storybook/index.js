import React, { Component } from 'react';
import 'react-native-globals';
import '../app/style/style_screen';
import '../app/components/base';
import ION from 'react-native-vector-icons/Ionicons';
import StorybookUIRoot, { getStory, withPaddedContainer, withNavbarWrapper, setup } from './setup';
import SharedElementExample from '../app/screens/examples/SharedElementExample';
import ErrorMessage from '../app/components/ErrorMessage';
// import ExampleTabs from './examples/ExampleTabs';
import Button, { ButtonNav } from '../app/components/base/forms/Button';
import StackExample from './examples/StackExample';
setup(() => {
    getStory('Type')
        .addDecorator(withPaddedContainer)
        .addDecorator(withNavbarWrapper)
        .add('all', () => (
            <>
                <H1 style={Styles.mb5}>Header 1</H1>
                <H2 style={Styles.mb5}>Header 2</H2>
                <H3 style={Styles.mb5}>H4eader 3</H3>
                <H4 style={Styles.mb5}>Header 4</H4>
                <Bold style={Styles.mb5}>Header 4</Bold>
                <ErrorMessage style={Styles.mb5}>Header 4</ErrorMessage>
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
                          fontSize: styleVariables.fontSizeH1
                      }}
                      name="ios-close"
                    />
                </ButtonNav>
            </>
        ))
        .add('default', () => (
            <Button>Button</Button>
        ))
        .add('secondary', () => (
            <ButtonSecondary>Button Secondary</ButtonSecondary>
        ))
        .add('tertiary', () => (
            <ButtonTertiary>Button Secondary</ButtonTertiary>
        ));
});

export default StorybookUIRoot;
