/**
 * Ports Google analytics to a segment like API
 */
var RNGa = require('react-native-google-analytics');
import {
    Analytics,
    Hits as GAHits,
    Experiment as GAExperiment
} from 'react-native-google-analytics';

window.analytics = {
    ga: new RNGa.Analytics(Project.analytics, DeviceInfo.getUniqueID(), '1', DeviceInfo.getUserAgent()),
    screen: function(screen, properties) {
        analytics.ga.send(new RNGa.Hits.ScreenView(
            'FTY',
            screen,
            DeviceInfo.getReadableVersion(),
            DeviceInfo.getBundleId()
        ));
    },
    track: function(event, properties) {

        analytics.ga.send(new GAHits.Event(
            DeviceInfo.getBundleId(),
            event,
            'React Native',
            100));
    },
};

