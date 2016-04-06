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
    ScrollView,
    Image,
    Switch,
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
var SwitchAndroid = require('SwitchAndroid');

var AwesomeProject =React.createClass({
    getInitialState() {
        return {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Switch实例
                </Text>
                <Switch
                    disabled={true}/*设置不可点击*/
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    style={{marginBottom:10,marginTop:10}}
                    value={this.state.falseSwitchIsOn} />
                <Switch
                    disabled={false}
                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn} />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
