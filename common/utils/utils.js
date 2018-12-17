import _ from 'lodash';

import data from '../stores/base/_data';

module.exports = window.Utils = Object.assign({}, require('./base/_utils'), {
    decimalPlaces: (value) => {
        if (!value) return 0;
        if (Math.floor(value) === value) return 0;
        const parts = value.toString().split('.');
        return (parts[1] && parts[1].length) || 0;
    },
    isGEZero: num => typeof num === 'number' && num >= 0,
    isValidPercentage: num => typeof num === 'number' && num >= 0 && num <= 100,
    scrollToTop /* istanbul ignore next */: (timeout = 500) => {
        $('html,body').animate({ scrollTop: 0 }, timeout);
    },
    scrollToElement   /* istanbul ignore next */: (selector, timeout = 500) => {
        $('html,body').animate({ scrollTop: $(selector).offset().top }, timeout);
    },
    isInteger: num => typeof num === 'number' && Math.floor(num) === num,
    fieldShouldShowError: (errors, touched, path, touchPath) => {
        if (!errors || !path) {
            return false;
        }
        return _.get(errors, path) && _.get(touched, touchPath || path);
    },
    // TODO move into a routeHelper type thing
    routeToApplication: (history, quote) => {
        data.get(`${Project.api}document/documents/application/${quote.applicationId}`)
            .then((documents) => {
                if (quote.companyEid) {
                    return data.get(`${Project.api}company/companies/${quote.companyEid}`)
                        .then((company) => {
                            history.replace('/application', { quote, company, documents });
                        });
                }
                // This is supposed to be impossible.. a quote cannot have documents but no company
                if (documents && documents.length) {
                    console.warn('WARNING: Application found with documents but no company');
                }
                history.replace('/application', { quote });
            })
            .catch((err) => {
                // TODO handle better
                console.error('Failed to route to application', err);
                history.replace('/dashboard');
            });
    },
});
