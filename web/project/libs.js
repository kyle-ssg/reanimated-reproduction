import 'ionicons/dist/css/ionicons.min.css';

// Optimise lodash
import each from 'lodash/each';
import merge from 'lodash/merge';
import map from 'lodash/map';
import filter from 'lodash/filter';
import find from 'lodash/find';
import partial from 'lodash/partial';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';
import keyBy from 'lodash/keyBy';
import 'bootstrap/dist/js/bootstrap.bundle';
import Project from '../../common/project';

window.moment = require('moment/min/moment.min');

window._ = {
  each, filter, find, merge, partial, findIndex, range, map, cloneDeep, keyBy,
};

window.React = require('react');
window.ReactDOM = require('react-dom');
window.Link = require('react-router-dom').Link;

// Analytics
/* eslint-disable */
if (Project.ga) {
  (function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
  ga('create', Project.ga, 'auto');
}
