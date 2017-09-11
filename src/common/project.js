module.exports = {
    debug: false,
    appVersion: 1,
    sessionLength:60000 * 30,
    topic: '-results',
    env: 'prod',
    // api: 'https://7d34d656.ngrok.io/api/'
    api: 'https://patientview.org/api/',
    cloudinary: {
        cloudName: "dpvktd6ds",
        presetName: "accaapp",
        apiKey: "648942953663437",
        apiSecret: "EsWMkrsvqOBW5EWhGVm1bHZBDNU"
    },
    google: {
        iosClientId: '603463597415-em1lk1r3fe779jnsetq85ouapdfma0c3.apps.googleusercontent.com',
        webClientId: '603463597415-q6nnmv7tihkm52m5eg0hetakktppcmdf.apps.googleusercontent.com'
    },
};
