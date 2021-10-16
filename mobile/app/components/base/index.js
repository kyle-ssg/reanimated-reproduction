// Forms
import Button, {
  ButtonPrimary,
  ButtonOutlinePrimary,
  ButtonText,
  ButtonSecondary,
  ButtonNav,
  ButtonTertiary,
} from './forms/Button'

import TextInput from './forms/TextInput'
import Select from './forms/Select'
import './forms/SelectBox'
import Checkbox from './forms/Checkbox'

// Grid
import './grid'
//Type
import './type'
//Base
import Loader from 'components/base/Loader.tsx'

import ListItem from 'components/base/ListItem'
// Animation
global.Fade = require('./animation/Fade')

global.Button = Button
global.ButtonPrimary = ButtonPrimary
global.ButtonText = ButtonText
global.ButtonOutlinePrimary = ButtonOutlinePrimary
global.ButtonSecondary = ButtonSecondary
global.ButtonTertiary = ButtonTertiary
global.ButtonNav = ButtonNav

global.Checkbox = Checkbox

global.TextInput = TextInput
global.Loader = Loader
global.Select = Select

// Navs
global.Delay = require('../utility-components/Delay')
global.ListItem = ListItem
