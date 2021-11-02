import React from 'react'
import { ComponentStory } from '@storybook/react'
import '../../styles/Global.scss'
import DatePicker from 'components/DatePicker'

export default {
  title: 'forms/DatePicker',
  component: DatePicker,
}

export const Default: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker dateFormat='do MMM yyyy' selected={new Date()} />
}

export const MinMax: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <DatePicker
      minDate={new Date().toISOString()}
      maxDate={new Date(new Date().valueOf() + 864000 * 5)}
    />
  )
}

export const Time: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker showTimeSelect />
}

export const TimeOnly: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker timeFormat='HH:mm' showTimeSelectOnly showTimeSelect />
}

export const TimeInterval: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker selected={new Date()} timeIntervals={20} showTimeSelect />
}
