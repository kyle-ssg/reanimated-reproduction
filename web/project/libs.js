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
import omit from 'lodash/omit';
import get from 'lodash/get';
import last from 'lodash/last';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import every from 'lodash/every';
import sortBy from 'lodash/sortBy';
import differenceWith from 'lodash/differenceWith';
import throttle from 'lodash/throttle';
import reduce from 'lodash/reduce';
import chunk from 'lodash/chunk';
import set from 'lodash/set';
import groupBy from 'lodash/groupBy';
import 'bootstrap/dist/js/bootstrap.bundle';
import Cookies from 'js-cookie';

window.moment = require('moment/min/moment.min');

window._ = {
    each,
    filter,
    find,
    merge,
    partial,
    findIndex,
    range,
    map,
    cloneDeep,
    keyBy,
    omit,
    get,
    last,
    isEmpty,
    isEqual,
    every,
    sortBy,
    differenceWith,
    throttle,
    reduce,
    chunk,
    set,
    groupBy,
};

window.React = require('react');
window.ReactDOM = require('react-dom');
global.Link = require('react-router-dom').Link;

global.Cookies = Cookies;

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

if (Project.mixpanel) {
  (function (e, a) {
      if (!a.__SV) {
          var b = window; try { var c, l, i, j = b.location, g = j.hash; c = function (a, b) { return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null }; g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search))) } catch (m) { } var k, h; window.mixpanel = a; a._i = []; a.init = function (b, c, f) {
              function e(b, a) {
                  var c = a.split("."); 2 == c.length && (b = b[c[0]], a = c[1]); b[a] = function () {
                      b.push([a].concat(Array.prototype.slice.call(arguments,
                          0)))
                  }
              } var d = a; "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel"; d.people = d.people || []; d.toString = function (b) { var a = "mixpanel"; "mixpanel" !== f && (a += "." + f); b || (a += " (stub)"); return a }; d.people.toString = function () { return d.toString(1) + ".people (stub)" }; k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
              for (h = 0; h < k.length; h++)e(d, k[h]); a._i.push([b, c, f])
          }; a.__SV = 1.2; b = e.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js"; c = e.getElementsByTagName("script")[0]; c.parentNode.insertBefore(b, c)
      }
  })(document, window.mixpanel || []);
  mixpanel.init(Project.mixpanel);
}


import Project from '../../common/project';
