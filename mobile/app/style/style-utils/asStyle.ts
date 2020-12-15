
export default function asStyle<T extends { [key: string]: ReactNative.ViewStyle|ReactNative.ImageStyle|ReactNative.TextStyle }>(arg: T): T {
  return arg;
}
