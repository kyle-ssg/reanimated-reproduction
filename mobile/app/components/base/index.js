// Forms
import Button, {
  ButtonPrimary,
  ButtonOutlinePrimary,
  ButtonText,
  ButtonSecondary,
  ButtonNav,
  ButtonTertiary,
} from '../../../../common/components/forms/Button'

import TextInput, {
  FlatInput,
} from '../../../../common/components/forms/TextInput'
import Select from '../../../../common/components/forms/Select'
import '../../../../common/components/forms/SelectBox'
import Checkbox from '../../../../common/components/forms/Checkbox'

// Grid
import 'common/components/grid'
//Type
import 'common/components/type'
//Base
import Loader from 'common/components/Loader.tsx'

// Animation
global.Fade = require('common/components/animation/Fade')

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
