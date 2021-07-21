import React from 'react'
import propTypes from 'prop-types'
import Button, {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from '../components/base/forms/Button'
import Message, { SuccessMessage, ErrorMessage } from '../components/Messages'
import Input from '../components/base/forms/Input'
import InputDropdown from '../components/base/forms/InputDropdown'
import InputGroup from '../components/base/forms/InputGroup'
import Select from '../components/base/forms/Select'
import SelectCustomDropdown from '../components/base/forms/SelectCustomDropdown'

export const TextExamples = ({ text }) => (
  <>
    <h1>{text}</h1>
    <h2>{text}</h2>
    <h3>{text}</h3>
    <h4>{text}</h4>
    <p>{text}</p>
    <p>{text}</p>
    <div>
      <a href='#'>{text}</a>
    </div>
    <div>
      <strong>{text}</strong>
    </div>
  </>
)
export const MessagesExamples = ({ text }) => (
  <>
    <Message>{text}</Message>
    <SuccessMessage>{text}</SuccessMessage>
    <ErrorMessage>{text}</ErrorMessage>
  </>
)

export const ButtonExamples = ({ text }) => (
  <>
    <Button>{text}</Button>
    <ButtonPrimary>{text}</ButtonPrimary>
    <ButtonSecondary>{text}</ButtonSecondary>
    <ButtonTertiary>{text}</ButtonTertiary>
  </>
)

export const FormExamples = ({}) => (
  <>
    <div className='col mb-3'>
      <h5>Input</h5>
      <Input label={'Label'} placeholderChar={'Placeholder text'} />
    </div>

    {/*<div className="col">*/}
    {/*  <InputDropdown dropdownItem={<p>Text</p>}/>*/}
    {/*</div>*/}

    {/*<div className="col">*/}
    {/*  <InputGroup />*/}
    {/*</div>*/}

    <div className='col'>
      <h5>Select</h5>
      <Select label={'Select'} />
    </div>
  </>
)

ButtonExamples.propTypes = {
  text: propTypes.string,
}
ButtonExamples.defaultProps = {
  text: 'Text',
}
TextExamples.propTypes = {
  text: propTypes.string,
}
MessagesExamples.propTypes = {
  text: propTypes.string,
}
MessagesExamples.defaultProps = {
  text: 'Text',
}
TextExamples.defaultProps = {
  text: 'Text',
}
