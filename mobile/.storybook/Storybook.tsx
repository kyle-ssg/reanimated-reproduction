import { getStorybookUI } from "@storybook/react-native";

try {
  require('./storybook.requires')
} catch (e){}
const StorybookUIRoot = getStorybookUI({
  // initialSelection: { kind: 'Radio control', name: 'Basic' },
  shouldPersistSelection: true,
})

export default StorybookUIRoot
