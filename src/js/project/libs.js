/**
 * Created by kylejohnson on 23/07/2016.
 */

import './polyfil';

//React
window.React = require('react');
window.ReactDOM = require('react-dom');
window.render = require('react-dom').render;

//PropTypes
React.PropTypes = require('prop-types');
window.OptionalArray = React.PropTypes.array;
window.OptionalBool = React.PropTypes.bool;
window.OptionalFunc = React.PropTypes.func;
window.OptionalNumber = React.PropTypes.number;
window.OptionalObject = React.PropTypes.object;
window.OptionalString = React.PropTypes.string;
window.OptionalNode = React.PropTypes.node;
window.OptionalElement = React.PropTypes.element;
window.oneOf = React.PropTypes.oneOf;
window.oneOfType = React.PropTypes.oneOfType;
window.RequiredArray = React.PropTypes.array.isRequired;
window.RequiredBool = React.PropTypes.bool.isRequired;
window.RequiredFunc = React.PropTypes.func.isRequired;
window.RequiredNumber = React.PropTypes.number.isRequired;
window.RequiredObject = React.PropTypes.object.isRequired;
window.RequiredString = React.PropTypes.string.isRequired;
window.RequiredNode = React.PropTypes.node.isRequired;
window.RequiredElement = React.PropTypes.node.isRequired;

import Switch from 'rc-switch';

window.Switch = Switch;

import * as firebase from 'firebase';

global.firebase = firebase;

import FireAuth from 'simple-firebase-auth';
global.FireAuth = FireAuth;

import Bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap';

import cn from 'classnames'

global.cn = cn;

window.moment = require('moment/min/moment.min');
window._ = require('lodash');

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.ttf';


