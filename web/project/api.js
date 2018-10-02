global.API = {
  ajaxHandler(store, res) {
    switch (res.status) {
      case 404:
        // ErrorModal(null, 'API Not found: ');
        break;
      case 503:
        // ErrorModal(null, error);
        break;
      default:
            // ErrorModal(null, error);
    }

    res.json().then((error) => {
      if (store) {
        // eslint-disable-next-line
        store.error = error;
        store.goneABitWest();
      }
    }).catch((err) => {
      // TODO?
      if (store) {
        // eslint-disable-next-line
        console.log('Unknown error', err);
        const error = 'Unknown error';
        // eslint-disable-next-line
        store.error = error;
        store.goneABitWest();
      }
    });
  },
  trackEvent(data) {
    if (Project.ga) {
      if (!data) {
        // eslint-disable-next-line
        console.error('GA: Passed null event data');
        return;
      }
      if (__DEV__) {
        // eslint-disable-next-line
        console.info('track', data);
      }
      if ((!data || !data.category || !data.event) && __DEV__) {
        // eslint-disable-next-line
        console.error('Invalid event provided', data);
      }
      ga('send', {
        hitType: 'event',
        eventCategory: data.category,
        eventAction: data.event,
        eventLabel: data.label,
      });
    }
  },
  trackPage(title) {
    if (Project.ga) {
      ga('send', {
        hitType: 'pageview',
        title,
        location: document.location.href,
        page: document.location.pathname,
      });
    }
  },
};
