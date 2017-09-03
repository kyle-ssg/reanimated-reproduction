/**
 * Created by kylejohnson on 23/07/2016.
 */
import Switch from 'rc-switch';

window.Switch = Switch;

// import * as firebase from 'firebase';
// import FireAuth from 'simple-firebase-auth';
// window.FireAuth = FireAuth;

window.cn = require('classnames');

import Bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap';

window._ = require('lodash');


// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/fonts/fontawesome-webfont.ttf';

import FroalaEditor from 'react-froala-wysiwyg';
window.FroalaEditor = FroalaEditor;
window.Editor = require('../components/Editor');


import ReactTable from 'react-table'
import 'react-table/react-table.css'
window.ReactTable = ReactTable;
window.Table = require('../components/Table')

import cn from 'classnames';
window.cn = cn;
