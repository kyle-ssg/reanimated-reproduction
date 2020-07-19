import React, { Component } from 'react';
import 'react-native-globals';
import '../app/style/style_screen';
import '../app/components/base';
import ION from 'react-native-vector-icons/Ionicons';
import StorybookUIRoot, { getStory, withPaddedContainer, setup } from './setup';

import ErrorMessage from '../app/components/ErrorMessage';
import ExampleTabs from './examples/ExampleTabs';
import Button from "../app/components/base/forms/Button";
setup(() => {
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
    getStory('Button')
        .addDecorator(withPaddedContainer)
        .add('test',()=>(
            <Button>Test</Button>
        ))
        .add('all', () => (
            <>
                <Button>Button</Button>
                <ButtonSecondary>Button Secondary</ButtonSecondary>
                <ButtonTertiary>Button Secondary</ButtonTertiary>
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
    getStory('Type')
        .addDecorator(withPaddedContainer)
        .add('all', () => (
            <>
                <H1 style={Styles.mb5}>Header 1</H1>
                <H2 style={Styles.mb5}>Header 2</H2>
                <H3 style={Styles.mb5}>Header 3</H3>
                <H4 style={Styles.mb5}>Header 4</H4>
                <Bold style={Styles.mb5}>Header 4</Bold>
                <ErrorMessage style={Styles.mb5}>Header 4</ErrorMessage>
            </>
        ));
    getStory('Fade')
        .addDecorator(withPaddedContainer)
        .add('all', () => (
            <>
                <Fade autostart value={1}>
                    <Button>Button</Button>
                    <ButtonSecondary>Buttondsadas Secondary</ButtonSecondary>
                    <ButtonTertiary>Button Secondary</ButtonTertiary>
                    <H1>Header 1</H1>
                    <H2>Header 2</H2>
                    <H3>Header 3</H3>
                    <H4>Header 4</H4>
                    <Bold>Header 4</Bold>
                </Fade>
            </>
        ))
        .add('slow', () => (
            <>
                <Fade duration={5000} autostart value={1}>
                    <Button>Button</Button>
                    <ButtonSecondary>Buttondsadas Secondary</ButtonSecondary>
                    <ButtonTertiary>Button Secondary</ButtonTertiary>
                    <H1>Header 1</H1>
                    <H2>Header 2</H2>
                    <H3>Header 3</H3>
                    <H4>Header 4</H4>
                    <Bold>Header 4</Bold>
                </Fade>
            </>
        ));
    getStory('ListItem')
        .addDecorator(withPaddedContainer)
        .add('default', () => (
            <>
                <ListItem>
                    <Text style={Styles.listItemTitle}>
                        Settings
                    </Text>
                    <Row>
                        <Text style={Styles.listItemText}>
                            Text
                        </Text>
                        <ION style={Styles.listIconNav} name="ios-chevron-forward"/>
                    </Row>
                </ListItem>
            </>
        ));
    getStory('ErrorMessage')
        .addDecorator(withPaddedContainer)
        .add('default', () => (
            <ErrorMessage>
                This is an error message
            </ErrorMessage>
        ));
    getStory('Loader')
        .addDecorator(withPaddedContainer)
        .add('default', () => (
            <Loader/>
        ));
});

export default StorybookUIRoot;
