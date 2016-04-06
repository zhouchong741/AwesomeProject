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
    Image,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <CustomButton text="短时间的Toast" onPress={() => ToastAndroid.show('Short Toast',ToastAndroid.SHORT)}/>
            
                <CustomButton text="长时间的Toast" onPress={() => ToastAndroid.show('Long Toast', ToastAndroid.LONG)}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
