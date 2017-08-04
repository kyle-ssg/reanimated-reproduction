const REACT_NATIVE_DIR = './node_modules/react-native';
const exec = require('child_process').execSync;

exec(`cp ../bin/react-native-xcode.sh ${REACT_NATIVE_DIR}/packager/react-native-xcode.sh`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
})