import TextInput, { FlatInput } from './forms/TextInput';

// Forms
import Button, {
    ButtonPrimary,
    ButtonSecondary,
    ButtonNav,
    ButtonTertiary,
} from './forms/Button';

// Grid
import Flex from './grid/Flex';
import Text from './forms/Text';

import H1 from './type/H1';
import H2 from './type/H2';
import H3 from './type/H3';
import H4 from './type/H4';
import './forms/SelectBox';

// Animation
global.Fade = require('./animation/Fade');
global.SlideUp = require('./animation/SlideUp');

// Typography
global.Text = Text;
global.Strong = global.Bold = require('./type/Bold');

global.H1 = H1;
global.H2 = H2;
global.H3 = H3;
global.H4 = H4;

global.Flex = Flex;
global.Container = require('./grid/Container');
global.FormGroup = require('./grid/FormGroup');

const { Column, FCol } = require('./grid/Column');

global.Column = Column;
global.FCol = FCol;

global.Row = require('./grid/Row');

global.Button = Button;
global.ButtonPrimary = ButtonPrimary;
global.ButtonSecondary = ButtonSecondary;
global.ButtonTertiary = ButtonTertiary;
global.ButtonNav = ButtonNav;

global.Checkbox = require('./forms/Checkbox');

global.TextInput = TextInput;
global.FlatInput = FlatInput;
global.Loader = require('./Loader');
global.Select = require('./forms/Select');

// Navs
global.Delay = require('../utility-components/Delay');
global.ListItem = require('./ListItem');
