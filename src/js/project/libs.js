/**
 * Created by kylejohnson on 23/07/2016.
 */
import Switch from 'rc-switch';
window.Switch = Switch;

import * as firebase from 'firebase';
window.firebase = firebase;

window.cn = require('classnames');

import Bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap';

// Segment analytics
import Analytics from 'analytics-node';
window.analytics = new Analytics('eJ4jplD0TFwOmZAyV801eB1quoAKSUBn');

// Segment analytics testing - identify - normally only called once on sign up and then whenever traits change
/*analytics.identify({
 userId: 'luke@solidstategroup.com',
 traits: {
   name: 'Luke Fanning',
   developer: true,
   createdAt: new Date()
 }
});*/
// Can also use an anonymous id
window.anonId = Date.now();
analytics.identify({
  anonymousId: anonId,
  traits: {
    name: 'Anonymous Bro'
  }
});
