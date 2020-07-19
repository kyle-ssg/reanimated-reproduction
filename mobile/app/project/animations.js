// Standardise
import { Easing } from 'react-native';

const acceleration = Easing.bezier(0.4, 0.0, 1, 1);
const deceleration = Easing.bezier(0.0, 0.0, 0.2, 1);
const standard = Easing.bezier(0.0, 0.0, 0.0, 1.0);
const linear = Easing.linear();
const Animations = {
    smallElementDuration: 200,
    expandDuration: 200,
    collapseDuration: 150,
    expandEasing: deceleration,
    collapseEasing: linear,
    acceleration, // See https://material.io/design/motion/speed.html#easing
    deceleration, // See https://material.io/design/motion/speed.html#easing
    standard, // See https://material.io/design/motion/speed.html#easing
};
export default Animations;

global.Animations = Animations;
