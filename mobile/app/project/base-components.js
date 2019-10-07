import TextInput, { FlatInput } from '../components/base/forms/TextInput';

// Forms
import Button, {
    ButtonAlt,
    ButtonPrimary,
    ButtonSecondary,
    ButtonTertiary,
    ButtonFlat,
    ButtonDashed,
    ButtonOutlinePrimary,
    ButtonCommon,
    TabPillButton,
    ButtonGoogle,
    LinkTextButton,
} from '../components/base/forms/Button';

// Grid
import Flex from '../components/base/grid/Flex';
import Text from '../components/base/forms/Text';

import H3 from '../components/base/type/H3';

// Animation
global.Fade = require('../components/base/animation/Fade');
global.Carousel = require('../components/base/animation/Carousel');
global.SlideUp = require('../components/base/animation/SlideUp');

// Typography
global.Text = Text;
global.Strong = global.Bold = require('../components/base/type/Bold');
global.H1 = require('../components/base/type/H1');
global.H2 = require('../components/base/type/H2');
global.H4 = require('../components/base/type/H4');

global.H3 = H3;

global.Flex = Flex;
global.Container = require('../components/base/grid/Container');
global.FormGroup = require('../components/base/grid/FormGroup');

const { Column, FCol } = require('../components/base/grid/Column');

global.Column = Column;
global.FCol = FCol;

global.Row = require('../components/base/grid/Row');

global.Button = Button;
global.ButtonAlt = ButtonAlt;
global.ButtonPrimary = ButtonPrimary;
global.ButtonSecondary = ButtonSecondary;
global.ButtonTertiary = ButtonTertiary;
global.ButtonFlat = ButtonFlat;
global.ButtonDashed = ButtonDashed;
global.ButtonOutlinePrimary = ButtonOutlinePrimary;
global.ButtonCommon = ButtonCommon;
global.TabPillButton = TabPillButton;
global.ButtonGoogle = ButtonGoogle;
global.LinkTextButton = LinkTextButton;

global.Checkbox = require('../components/base/forms/Checkbox');

global.TextInput = TextInput;
global.FlatInput = FlatInput;
global.Loader = require('../components/base/Loader');
global.Select = require('../components/base/forms/Select');

// Navs
global.Delay = require('../components/base/Delay');
global.ListItem = require('../components/base/ListItem');
