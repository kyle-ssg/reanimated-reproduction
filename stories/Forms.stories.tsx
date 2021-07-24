import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../styles/Global.scss'
import Message, { ErrorMessage, SuccessMessage } from '../components/Messages'
import Input from "../components/base/forms/Input";
import Select from "../components/base/forms/Select";

export default {
  title: 'Forms',
  component: Input,
}

export const Default: ComponentStory<typeof Input> = (args) => (
  <>
    <>
      <div className='col mb-3'>
        <h5>Input</h5>
        <Input label={'Label'} placeholderChar={'Placeholder text'} {...args} />
      </div>

      <div className='col'>
        <h5>Select</h5>
        <Select {...args} label={'Select'} />
      </div>
    </>
  </>
)

Default.args = {
  children: 'Message',
}
