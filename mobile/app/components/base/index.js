// Forms
import Button, {
  ButtonPrimary,
  ButtonOutlinePrimary,
  ButtonText,
  ButtonSecondary,
  ButtonNav,
  ButtonTertiary,
} from './forms/Button'

import TextInput, { FlatInput } from './forms/TextInput'
import Select from './forms/Select'
import './forms/SelectBox'
import Checkbox from './forms/Checkbox'
import TextComponent from './forms/Text'

// Grid
import Flex from './grid/Flex'
import Row from './grid/Row'
import FormGroup from './grid/FormGroup'
import ListItem from './ListItem'
import Column from './grid/Column'
import Container from './grid/Container'

//Type
import H1 from './type/H1'
import H2 from './type/H2'
import H3 from './type/H3'
import H4 from './type/H4'

//Base
import Loader from './../base/Loader.tsx'

// Animation
global.Fade = require('./animation/Fade')

// Typography
global.Text = TextComponent

global.H1 = H1
global.H2 = H2
global.H3 = H3
global.H4 = H4

global.Flex = Flex
global.Container = Container
global.FormGroup = FormGroup

global.Column = Column

global.Row = Row

global.Button = Button
global.ButtonPrimary = ButtonPrimary
global.ButtonText = ButtonText
global.ButtonOutlinePrimary = ButtonOutlinePrimary
global.ButtonSecondary = ButtonSecondary
global.ButtonTertiary = ButtonTertiary
global.ButtonNav = ButtonNav

global.Checkbox = Checkbox

global.TextInput = TextInput
global.FlatInput = FlatInput
global.Loader = Loader
global.Select = Select

// Navs
global.Delay = require('../utility-components/Delay')
global.ListItem = ListItem
