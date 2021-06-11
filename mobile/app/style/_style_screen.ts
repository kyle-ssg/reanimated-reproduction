/**
 * Created by kylejohnson on 07/09/15.
 */
import {StyleSheet} from 'react-native';
// eslint-disable-next-line
import './style_variables';
import projectBase from './style_base';
import projectButtons from './style_buttons';
import projectForms from './style_forms';
import projectLists from './style_lists';
import projectGrid from './style_grid';
import projectType from './style_type';

export const styleTypes =  {
  ...{},
  ...projectBase,
  ...projectButtons,
  ...projectForms,
  ...projectLists,
  ...projectGrid,
  ...projectType,
}

const Styles = StyleSheet.create(styleTypes);
// @ts-ignore
global.Styles = Styles;
export default Styles
