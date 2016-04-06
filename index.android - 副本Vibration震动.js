/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// frist app

'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    ToastAndroid,
    PixelRatio,
    Vibration,
    TouchableHighlight,
} from 'react-native';

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.button}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Virbration实例
                </Text>
                <CustomButton text="点击设备震动" onPress={()=>Vibration.vibrate()}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
