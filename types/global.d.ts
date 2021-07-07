import _Project, { ProjectType } from 'common/project';
import { AppActions, Actions } from 'common/app-actions';
import Strings from "common/strings";
import { APIType } from "../common/api-type";
type API = APIType & {
};
declare global {
  namespace NodeJS {
    interface Global {
      RouteUrls: {};
      E2E: any;
      _data: any;
      Actions: Actions;
      AppActions: AppActions;
      API: API
      Project: ProjectType;
      AsyncStorage: any;
      Button: any;
      ButtonPrimary: any;
      ButtonSecondary: any;
      ButtonTertiary: any;
      Column: any;
      Constants: any;
      ErrorMessage: any;
      FormGroup: any;
      __JEST__: boolean;
      Format: any;
      Flex: any;
      Input: any;
      InputGroup: any;
      Link: any;
      Loader: any;
      MaskedInput: any;
      Row: any;
      Select: any;
      Strings: any;
      SuccessMessage: any;
      Utils: any;
      _: any;
      __DEV__: any;
      __dirname: any;
      ga: any;
      mixpanel: any;
      toast: any;
      module: any;
      openAlert: any;
      openConfirm: any;
      process: any;
      require: any;
      grecaptcha: any;
      closeModal: any;
      openModal: any;
      window?: any;
    }
  }
}

declare global {
  declare let API: APIType;
  declare let closeModal: Function;
  declare let openModal: (title: string, body: React.ReactChildren) => void;
  declare let Actions = AppActions;
  declare let AppActions = AppActions;
  declare let AsyncStorage: any;
  declare let Button: any;
  declare let ButtonPrimary: any;
  declare let ButtonSecondary: any;
  declare let ButtonTertiary: any;
  declare let Column: any;
  declare let Project = _Project;
  declare let Constants: any;
  declare let E2E: any;
  declare let ErrorMessage: any;
  declare let FormGroup: any;
  declare let Format: any;
  declare let Flex: any;
  declare let Input: any;
  declare let InputGroup: any;
  declare let Link: any;
  declare let Loader: any;
  declare let MaskedInput: any;
  declare let styleVariables = projectStyles;
  declare let Row: any;
  declare let Select: any;
  declare let Strings = Strings.en;
  declare let SuccessMessage: any;
  declare let Utils: any;
  declare let _data: any;
  declare let _: any;
  declare let __DEV__: any;
  declare let __dirname: any;
  declare let toast: (message:String)=>void;
  declare let ga: any;
  declare let mixpanel: any;
  declare let module: any;
  declare let openAlert: any;
  declare let openConfirm: any;
  declare let process: any;
  declare let require: any;
  declare let grecaptcha: any;
}
