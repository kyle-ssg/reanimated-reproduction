import data from './base/_data';
module.exports = {
    get() {
        return data.dummy({data:{}});
    },
    getOtherStuff(params) {
        return data.get(`Project.api.live/user/${params.id}`);
    }
};