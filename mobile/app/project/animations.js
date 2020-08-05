let { Easing } = require("react-native");

const EPSILON = 1e-9;

// See Apple's "CAMediaTimingFunction Class Reference" for the Bezier control
// points
export const easeIn = Easing.bezier(0.42, 0, 1, 1, EPSILON);
export const easeOut = Easing.bezier(0, 0, 0.58, 1, EPSILON);
export const easeInOut = Easing.bezier(0.42, 0, 0.58, 1, EPSILON);
export const ease = Easing.bezier(0.25, 0.1, 0.25, 1, EPSILON);
