import data from './base/_data';
module.exports = {
    get(params) {
        return data.dummy({data:{}});
    },
    getOtherStuff(params) {
        return data.get(`Project.api.live/user/${params.id}`);
    }
};