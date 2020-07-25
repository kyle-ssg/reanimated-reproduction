import { useRef } from "react";
type Atomic = string | number | boolean;
const { Value } = ReactNative.Animated;
// https://github.com/wcandillon/react-native-redash/blob/master/packages/core/src/Hooks.ts

export const useConst = <T>(initialValue: T | (() => T)): T => {
    const ref = useRef<{ value: T }>();
    if (ref.current === undefined) {
    // Box the value in an object so we can tell if it's initialized even if the initializer
    // returns/is undefined
        ref.current = {
            value:
        typeof initialValue === "function"
            ? (initialValue as Function)()
            : initialValue,
        };
    }
    return ref.current.value;
};

export const useValues = ((<V extends Atomic>(...values: [V, ...V[]]) =>
    useConst(() => values.map((v) => new Value(v)))) as unknown) as UseValues;
export const useValue = <V extends Atomic>(value: V) =>
    useConst(() => new Value(value));
