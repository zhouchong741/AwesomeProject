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
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';
class MoreCustomButton extends React.Component {
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
            <MoreCustomButton
                onPress={() => {
          ToastAndroid.show('点击了', ToastAndroid.SHORT)}}
                text="请点击我~"
            />
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
