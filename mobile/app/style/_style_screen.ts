/**
 * Created by kylejohnson on 07/09/15.
 */
// eslint-disable-next-line
import { StyleSheet } from "react-native";
import './style_variables'
import projectBase from './style_base'
import projectButtons from './style_buttons'
import projectForms from './style_forms'
import projectLists from './style_lists'
import projectGrid from './style_grid'
import projectType from './style_type'
import { classNames } from './style-utils/cn'

export const styleTypes = {
  ...{},
  ...projectBase,
  ...projectButtons,
  ...projectForms,
  ...projectLists,
  ...projectGrid,
  ...projectType,
}

const Styles = StyleSheet.create(styleTypes)
// @ts-ignore
global.Styles = Styles
export const cn = classNames<typeof styleTypes>(Styles)
export default Styles
