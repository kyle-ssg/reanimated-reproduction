/**
 * Created by kylejohnson on 07/09/15.
 */
// eslint-disable-next-line
import merge from "lodash/merge";
import './base/style_variables'
import base from './base';
import projectBase from './project/style_base';
import projectButtons from './project/style_buttons';
import projectForms from './project/style_forms';
import projectLists from './project/style_lists';
const styleObj = merge(
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
