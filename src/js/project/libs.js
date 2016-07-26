/**
 * Created by kylejohnson on 23/07/2016.
 */

import VirtualizedSelect from 'react-virtualized-select';
import Select from 'react-select';
import 'react-virtualized/styles.css';
import 'react-select/dist/react-select.css';
import 'react-virtualized-select/styles.css';
window.Select = VirtualizedSelect;
window.SelectOld = Select;

import '../../styles/custom/rc-switch.scss';
import Switch from 'rc-switch';
window.Switch = Switch;

import * as firebase from 'firebase';
window.firebase = firebase;