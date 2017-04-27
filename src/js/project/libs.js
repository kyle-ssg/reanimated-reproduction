/**
 * Created by kylejohnson on 23/07/2016.
 */
import Switch from 'rc-switch';
window.Switch = Switch;

import * as firebase from 'firebase';

import FireAuth from 'simple-firebase-auth';
window.FireAuth = FireAuth;

window.cn = require('classnames');

import Bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap';

import {Link} from 'react-router';
global.Link = Link;

window._ = require('lodash');
