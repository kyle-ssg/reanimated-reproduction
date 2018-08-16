import React, {Component, PropTypes} from 'react';
import {BleManager} from 'react-native-ble-plx';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.manager = new BleManager()
        this.startScanning();
        this.prefixUUID = "f000aa"
        this.suffixUUID = "-0451-4000-b000-000000000000"

    }

    info(message) {
        this.setState({info: message})
    }

    error(message) {
        this.setState({info: "ERROR: " + message})
    }

    serviceUUID(num) {
        return this.prefixUUID + num + "0" + this.suffixUUID
    }

    notifyUUID(num) {
        return this.prefixUUID + num + "1" + this.suffixUUID
    }

    writeUUID(num) {
        return this.prefixUUID + num + "2" + this.suffixUUID
    }

    updateValue(key, value) {
        this.setState({values: {...this.state.values, [key]: value}})
    }

    async setupNotifications(device) {
        for (const id in this.sensors) {
            const service = this.serviceUUID(id)
            const characteristicW = this.writeUUID(id)
            const characteristicN = this.notifyUUID(id)

            const characteristic = await device.writeCharacteristicWithResponseForService(
                service, characteristicW, "AQ==" /* 0x01 in hex */
            )

            this.sensors = {
                0: "Temperature",
                1: "Accelerometer",
                2: "Humidity",
                3: "Magnetometer",
                4: "Barometer",
                5: "Gyroscope"
            }


            device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
                if (error) {
                    this.error(error.message)
                    return
                }
                this.updateValue(characteristic.uuid, characteristic.value)
            })
        }
    }

    startScanning = () => {
        this.manager.startDeviceScan(null, null, (err, res) => { //step 1 get the list of devices
            if (err) {
                console.log(err);
                setTimeout(() => {
                    this.startScanning();
                }, 200);
            } else {
                if (res.isConnectable && (res.name || res.localName)) {
                    console.log(res.id, res.name);
                    res.connect() // step 2: connect to the device
                        .then((device) => { //step 3 discover the device's services
                            this.info("Discovering services and characteristics");
                            return device.discoverAllServicesAndCharacteristics();
                        })
                        .then((device) => {
                            this.setState({
                                devices:
                                    _.uniqBy((this.state.devices || []).concat([device])
                                        , "id")
                            });
                        })
                }
            }
        })
    }

    writeData = (device) => {

        return device.services()
            .then((services) => {
                return Promise.all(services.map((service) => {//step 4: for each service, get all the characteristics
                    return service.characteristics()
                        .then((characteristics) => {
                            _.each(characteristics, (c) => {
                                if (c.isWritableWithoutResponse) {
                                    console.log("Writing to characteristic")
                                    c.writeWithoutResponse("RElDS1M=")
                                }
                                if(c.isNotifiable) {
                                    c.monitor((err,c)=>{
                                        alert(c.value)
                                    })
                                }
                            })
                            return {
                                service,
                                characteristics
                            }
                        })
                }))
            })
            .then((services) => {
                this.setState({services})
                this.info("Listening...")
            }, (error) => {
                this.error(error.message)
            })
    }

    render() {
        return this.state.devices && this.state.devices.length ? (
            <View>
                {this.state.devices.map((d) => (
                    <ListItem onPress={()=>this.writeData(d)}>
                        <Text style={Styles.listItemText}>
                            {d.localName || d.name}
                        </Text>
                    </ListItem>
                ))}
            </View>
        ) : (
            <Text>Searching...</Text>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;