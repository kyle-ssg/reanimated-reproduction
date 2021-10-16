import _Project, { ProjectType } from 'common/project'
import { AppActions, Actions } from 'common/app-actions'
import API from '../project/api'
import Strings from 'common/strings'
import { APIType } from '../common/api-type'
import ReactNative from 'react-native'
import { ButtonType } from '../mobile/app/components/base/forms/Button'
import { ColumnType } from '../mobile/app/components/base/grid/Column'
import { ContainerType } from '../mobile/app/components/base/grid/Container'
import { FadeType } from '../mobile/app/components/base/animation/Fade'
import { FlexType } from '../mobile/app/components/base/grid/Flex'
import { ListItemType } from '../mobile/app/components/base/ListItem'
import { RowType } from '../mobile/app/components/base/grid/Row'
import { TextInputProps } from '../mobile/app/components/base/forms/TextInput'
import { styleTypes } from '../mobile/app/style/_style_screen'
type API = APIType & {}
declare global {
  namespace NodeJS {}
}

declare global {
  const Animated: typeof ReactNative.Animated
  const ReactNative: typeof ReactNative
  let Button: React.ComponentType<ButtonType>
  let ButtonPrimary: React.ComponentType<ButtonType>
  let Column: React.ComponentType<ColumnType>
  let Container: React.ComponentType<ContainerType>
  let Dimensions: ReactNative.Dimensions
  let Easing: ReactNative.Easing
  let Fade: React.ComponentType<FadeType>
  let Flex: React.ComponentType<FlexType>
  let H1: React.ComponentType<ReactNative.TextProps>
  let H2: React.ComponentType<ReactNative.TextProps>
  let H3: React.ComponentType<ReactNative.TextProps>
  let H4: React.ComponentType<ReactNative.TextProps>
  let KeyboardAvoidingView: React.ComponentType<ReactNative.KeyboardAvoidingView>
  let ListItem: React.ComponentType<ListItemType>
  let Row: React.ComponentType<RowType>
  let SafeAreaView: React.ComponentType<ReactNative.ViewProps>
  let ScrollView: React.ComponentType<ReactNative.ScrollViewProps>
  let Text: React.ComponentType<ReactNative.TextProps>
  let TextInput: React.ComponentType<TextInputProps>
  let TouchableOpacity: React.ComponentType<ReactNative.TouchableOpacityProps>
  let View: React.ComponentType<ReactNative.ViewProps>
  let Styles = styleTypes

  declare let API: APIType
  declare let closeModal: Function
  declare let openModal: (title: string, body: React.ReactChildren) => void
  declare let Actions = AppActions
  declare let AppActions = AppActions
  declare let AsyncStorage: any
  declare let Button: any
  declare let ButtonPrimary: any
  declare let ButtonSecondary: any
  declare let ButtonTertiary: any
  declare let Column: any
  declare let Project = _Project
  declare let Constants: any
  declare let E2E: any
  declare let ErrorMessage: any
  declare let FormGroup: any
  declare let Format: any
  declare let Flex: any
  declare let Input: any
  declare let InputGroup: any
  declare let Link: any
  declare let Loader: any
  declare let MaskedInput: any
  declare let styleVariables = projectStyles
  declare let Row: any
  declare let Select: any
  declare let Strings = Strings.en
  declare let SuccessMessage: any
  declare let Utils: any
  declare let _data: any
  let Text: React.ComponentType<ReactNative.TextProps>
  declare let _: any
  declare let __DEV__: any
  declare let __dirname: any
  declare let toast: (message: String) => void
  declare let ga: any
  declare let mixpanel: any
  declare let module: any
  declare let openAlert: any
  declare let openConfirm: any
  declare let process: any
  declare let require: any
  declare let grecaptcha: any
}
