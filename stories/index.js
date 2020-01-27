import React from 'react';
import propTypes from 'prop-types';
import { getStory, withPaddedContainer } from './setup';
import Button, { ButtonTertiary, ButtonPrimary, ButtonSecondary } from '../components/base/forms/Button';
import { ButtonExamples, TextExamples } from './examples.storybook';
import Panel from '../components/base/forms/Panel';
import Tabs from '../components/base/forms/Tabs';
import 'ionicons/dist/css/ionicons.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../components/Modal';
import Confirm from '../components/ModalConfirm';
import ModalAlert from '../components/ModalAlert';
import Switch from 'rc-switch';
getStory('Buttons')
    .addDecorator(withPaddedContainer)
    .add('all', () => (
        <ButtonExamples/>
    ))
    .add('default', () => <Button>A Button</Button>)
    .add('primary', () => <ButtonPrimary>A Button</ButtonPrimary>)
    .add('secondary', () => <ButtonSecondary>A Button</ButtonSecondary>)
    .add('tertiary', () => <ButtonTertiary>A Button</ButtonTertiary>);


getStory('Type')
    .addDecorator(withPaddedContainer)
    .add('all', () => (
        <TextExamples />
    ));


getStory('Panel')
    .addDecorator(withPaddedContainer)
    .add('default', () => (
        <Panel title="Panel">
            Content
        </Panel>
    ))
    .add('with action', () => (
        <Panel action={<ButtonPrimary>Action</ButtonPrimary>} title="Panel with action">
            Content
        </Panel>
    ))
    .add('with icon', () => (
        <Panel icon="ion-md-heart" title="Panel with icon">
            Content
        </Panel>
    ));


getStory('Tabs')
    .addDecorator(withPaddedContainer)
    .add('uncontrolled', () => (
        <Tabs uncontrolled>
            <div tabLabel="Tab 1">
                Tab 1
            </div>
            <div tabLabel="Tab 2">
                Tab 2
            </div>
        </Tabs>
    ));


getStory('Switch')
    .addDecorator(withPaddedContainer)
    .add('default', () => (
        <Switch/>
    ))

getStory('Modals')
    .addDecorator(withPaddedContainer)
    .add('custom inline modal', () => (
        <Modal isOpen>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Do Something</Button>
                {' '}
                <Button color="secondary">Cancel</Button>
            </ModalFooter>
        </Modal>
    ))
    .add('confirm', () => (
        <Confirm isOpen title="Confirm this thing">
            Test
        </Confirm>
    ))
    .add('alert', () => (
        <ModalAlert isOpen title="Alert">
            Test
        </ModalAlert>
    ))
    .add('Dynamic', () => (
        <>
            <ButtonTertiary
              className="mr-2"
              onClick={() => openConfirm(<div>Confirm</div>, <div>Body</div>,
                  () => {
                      alert('Selected Yes');
                  },
                  () => {
                      alert('Selected No');
                  })}
            >
            Open confirm
            </ButtonTertiary>
            <ButtonTertiary
              onClick={() => openAlert(<div>Alert</div>, <div>Body</div>, () => {
                  alert('Dismissed');
              })}
            >
                Open alert
            </ButtonTertiary>
        </>
    ));
