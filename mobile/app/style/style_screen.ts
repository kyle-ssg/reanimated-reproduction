/**
 * Created by kylejohnson on 07/09/15.
 */
// eslint-disable-next-line
import * as _ from "lodash"

import base from './base';
import projectBase from './project/style_base';
import projectButtons from './project/style_buttons';
import projectForms from './project/style_forms';
import projectLists from './project/style_lists';
const styleObj = _.merge(
  {},
  base,
  projectBase,
  projectButtons,
  projectForms,
  projectLists,
)

export const styleTypes = {
  ...{},
  ...base,
  ...projectBase,
  ...projectButtons,
  ...projectForms,
  ...projectLists,
}

const Styles = ReactNative.StyleSheet.create(styleObj);
global.Styles = Styles;
export default Styles
