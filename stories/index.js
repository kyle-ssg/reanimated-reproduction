import React from 'react';
import { getStory, withPaddedContainer } from './setup';
import Button, {
  ButtonTertiary,
  ButtonPrimary,
  ButtonSecondary,
} from '../components/base/forms/Button';
import {
  ButtonExamples,
  MessagesExamples,
  TextExamples,
} from './examples.storybook';
import Panel from '../components/base/forms/Panel';
import Tabs from '../components/base/forms/Tabs';
import 'ionicons/dist/css/ionicons.css';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '../components/Modal';
import Confirm from '../components/ModalConfirm';
import ModalAlert from '../components/ModalAlert';
import Message, { ErrorMessage, SuccessMessage } from '../components/Messages';
import Header from '../components/Header';
import DatePicker from '../components/DatePicker';
import moment from 'moment/min/moment.min';

getStory('Buttons')
  .addDecorator(withPaddedContainer)
  .add('all', () => <ButtonExamples />)
  .add('default', () => <Button>A Button</Button>)
  .add('primary', () => <ButtonPrimary>A Button</ButtonPrimary>)
  .add('secondary', () => <ButtonSecondary>A Button</ButtonSecondary>)
  .add('tertiary', () => <ButtonTertiary>A Button</ButtonTertiary>);

getStory('Messages')
  .addDecorator(withPaddedContainer)
  .add('all', () => <MessagesExamples />)
  .add('default', () => <Message>A Message</Message>)
  .add('error', () => <ErrorMessage>An Error Message</ErrorMessage>)
  .add('success', () => <SuccessMessage>An Error Message</SuccessMessage>);

getStory('Navbar')
  .addDecorator(withPaddedContainer)
  .add('all', () => <Header />);

getStory('Type')
  .addDecorator(withPaddedContainer)
  .add('all', () => <TextExamples />);

getStory('Panel')
  .addDecorator(withPaddedContainer)
  .add('default', () => <Panel title="Panel">Content</Panel>)
  .add('with action', () => (
    <Panel
      action={<ButtonPrimary>Action</ButtonPrimary>}
      title="Panel with action"
    >
      Content
    </Panel>
  ))
  .add('with icon', () => (
    <Panel icon="ion-md-heart" title="Panel with icon">
      Content
    </Panel>
  ));

getStory('Tabs', { ignoreProps: ['children'] })
  .addDecorator(withPaddedContainer)
  .add('uncontrolled', () => (
    <Tabs tabLabels={['Tab 1', 'Tab 2']} uncontrolled>
      <div>Tab 1</div>
      <div>Tab 2</div>
    </Tabs>
  ));

getStory('Date Picker')
  .addDecorator(withPaddedContainer)
  .add('default', () => (
    <DatePicker dateFormat="do MMM yyyy" selected={new Date()} />
  ))
  .add('highlight/exclude date', () => (
    <DatePicker
      selected={new Date()}
      excludeDates={[
        moment().add('days', 1).toISOString(),
        moment().add('days', 2).toISOString(),
      ]}
      highlightDates={[
        moment().add('days', 3).toISOString(),
        moment().add('days', 4).toISOString(),
      ]}
    />
  ))
  .add('minmax', () => (
    <DatePicker
      minDate={new Date().toISOString()}
      maxDate={moment().add('days', 5).toISOString()}
    />
  ))
  .add('time', () => <DatePicker showTimeSelect />)
  .add('time only', () => <DatePicker dateFormat="HH:mma" showTimeSelect />)
  .add('time format', () => (
    <DatePicker selected={new Date()} timeFormat="HH:mm" showTimeSelect />
  ))

  .add('time interval', () => (
    <DatePicker selected={new Date()} timeIntervals={20} showTimeSelect />
  ))
  .add('time only', () => (
    <DatePicker
      selected={new Date()}
      timeIntervals={20}
      dateFormat="HH:mma"
      showTimeSelectOnly
      showTimeSelect
    />
  ));

getStory('Modals')
  .addDecorator(withPaddedContainer)
  .add('custom inline modal', () => (
    <Modal isOpen>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Do Something</Button>{' '}
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
        onClick={() =>
          openConfirm(
            <div>Confirm</div>,
            <div>Body</div>,
            () => {
              alert('Selected Yes');
            },
            () => {
              alert('Selected No');
            },
          )
        }
      >
        Open confirm
      </ButtonTertiary>
      <ButtonTertiary
        onClick={() =>
          openAlert(<div>Alert</div>, <div>Body</div>, () => {
            alert('Dismissed');
          })
        }
      >
        Open alert
      </ButtonTertiary>
    </>
  ));
