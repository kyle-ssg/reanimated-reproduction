/**
 * Created by kylejohnson on 07/09/15.
 */
// eslint-disable-next-line
import merge from "lodash/merge";
import './base/style_variables'
import projectBase from './project/style_base';
import projectButtons from './project/style_buttons';
import projectForms from './project/style_forms';
import projectLists from './project/style_lists';
import projectGrid from './project/style_grid';
import projectType from './project/style_type';

const styleObj = merge(
  {},
  projectBase,
  projectButtons,
  projectForms,
  projectLists,
  projectGrid,
  projectType,
)

export const styleTypes = {
  ...{},
  ...projectBase,
  ...projectButtons,
  ...projectForms,
  ...projectLists,
  ...projectGrid,
  ...projectType,
}

const Styles = ReactNative.StyleSheet.create(styleObj);
global.Styles = Styles;
export default Styles
