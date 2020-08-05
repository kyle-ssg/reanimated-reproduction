import "react-native-globals"; // Adds <View etc to global scope
import DeviceInfo from "react-native-device-info";
import "./polyfill";
import "./api/api";
import "../../strings";
import "common/utils";
import "components/base";

global.DeviceInfo = DeviceInfo;
