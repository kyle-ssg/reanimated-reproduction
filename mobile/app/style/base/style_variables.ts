/**
 * Created by kylejohnson on 18/04/2016.
 */

import { projectStyles } from '../project/style_variables';

export const styleVariables =  global.styleVariables = {
  ...projectStyles
};

global.colour = { ...palette,

  ...global.colour };

