/**
 * Created by kylejohnson on 07/11/2016.
 */
import './style_pxToEm';
require('../project/style_variables');
require('./style_variables');

import base from './style_base'
import buttons from './style_base'
import forms from './style_forms'
import grid from './style_grid'
import type from './style_grid'
import lists from './style_lists'
import overlays from './style_overlays'

const baseStyles = {
  ...base,
  ...buttons,
  ...forms,
  ...grid,
  ...type,
  ...lists,
  ...overlays,
};

export default baseStyles
