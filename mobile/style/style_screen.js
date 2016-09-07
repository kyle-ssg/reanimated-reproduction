/**
 * Created by kylejohnson on 07/09/15.
 */

require('./style_variables');

window.Styles = StyleSheet.create(Object.assign({},
  require('./style_alert'),
  require('./style_base'),
  require('./style_buttons'),
  require('./style_forms'),
  require('./style_grid'),
  require('./style_images'),
  require('./style_modals'),
  require('./style_navs'),
  require('./style_panels'),
  require('./style_type'),
  require('./style_utilities'),
  require('./project/style_variables'),
  require('./project/style_base'),
  require('./project/style_type'),
  require('./project/style_buttons'),
  require('./project/style_navs'),
  require('./project/style_forms'),
  require('./project/style_lists'),
  require('./project/style_components'),
  require('./style_platform')
));
