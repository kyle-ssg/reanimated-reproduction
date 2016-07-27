module.exports = {
    outerCircle:{
        backgroundColor:'rgba(45,87,147,.35)',
        width:DeviceWidth / 1.5,
        height: DeviceWidth / 1.5,
        borderRadius: DeviceWidth / 3
    },
    middleCircle:{
        backgroundColor:'rgba(45,87,147,.60)',
        width:DeviceWidth / 2,
        height: DeviceWidth / 2,
        borderRadius: DeviceWidth / 4
    },
    innerCircle:{
        backgroundColor:'rgba(45,87,147,1)',
        width:DeviceWidth / 3,
        height: DeviceWidth / 3,
        borderRadius: DeviceWidth / 6
    },
    buttonCircle:{
        backgroundColor:'orange',
        height:DeviceWidth / 6,
        width:DeviceWidth / 6,
        borderRadius: DeviceWidth / 12
    },
    wifiInnactive:{
        backgroundColor:'rgba(247,149,41,0.1)',
    },

    wifiDialog:{
        width:250,
        color:'white',
        fontWeight:'bold',
        position:'absolute',
        bottom:15,
        left: (DeviceWidth / 2 ) - 125,
        backgroundColor:'transparent'
    }
}
