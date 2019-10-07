import Project from '../project';
import BaseUtils from './base/_utils';

const Utils = global.Utils = Object.assign({}, BaseUtils, {
    formatPoundsToStone: (weightInPounds) => {
        const quotient = Math.floor(weightInPounds / 14);
        const remainder = Math.round(weightInPounds - quotient * 14);
        return `${quotient}-${remainder}`;
    },
    getImageURL(id, imageId) {
        return `${Project.CMS}/image/${id}/${imageId}`;
    },
});

export default Utils;
