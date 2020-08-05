/**
 * Created by kylejohnson on 07/09/15.
 */
// eslint-disable-next-line
import merge from 'lodash/merge';

global.Styles = StyleSheet.create(
  merge(
    {},
    require("./base/"),
    require("./project/style_base"),
    require("./project/style_buttons"),
    // require('./project/style_modals'),
    // require('./project/style_card'),
    // require('./project/style_backgroundImage'),
    // eslint-disable-next-line
    require('./project/style_platform')));
