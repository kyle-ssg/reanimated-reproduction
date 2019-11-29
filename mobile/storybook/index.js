import React from 'react';
import 'react-native-globals';

import '../app/style/style_screen';
import '../app/project/base-components';
import ION from 'react-native-vector-icons/Ionicons';
import TheComponent, { getStory, withPaddedContainer, setup } from './setup';
import ErrorMessage from '../app/components/ErrorMessage';
import Tabs from '../app/components/Tabs';

setup(() => {
    getStory('Tabs')
        .addDecorator(withPaddedContainer)
        .add('all', () => (
            <>
                <ExampleTabs/>
            </>
        ));
    getStory('Button')
        .addDecorator(withPaddedContainer)
        .add('all', () => (
            <>
                <Button>Button</Button>
                <ButtonSecondary>Buttondsadas Secondary</ButtonSecondary>
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
                <H1>Header 1</H1>
                <H2>Header 2</H2>
                <H3>Header 3</H3>
                <H4>Header 4</H4>
                <Bold>Header 4</Bold>
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
            <ListItem>
                <View>
                    <Text style={Styles.listItemTitle}>
                        Button
                    </Text>
                    <Text style={Styles.listItemText}>
                        Text
                    </Text>
                </View>
                <ION style={Styles.listIcon} name="ios-arrow-forward"/>
            </ListItem>
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

export default TheComponent;
