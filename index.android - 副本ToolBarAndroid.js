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
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
var SwitchAndroid = require('SwitchAndroid');
class AwesomeProject extends Component {

    render() {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                navIcon={require('./img/ic_menu.png')}
                style={styles.toolbar}
                /*logo={require('./img/ic_logo.png')}*/
                subtitle="副标题"
                title="主标题">
            <SwitchAndroid value={true}/>
            </ToolbarAndroid>
        );
    }
}
var toolbarActions = [
    {title:'Create', icon:require('./img/ic_create.png'),show:'always'},
    {title:'Filter'},
    {title:'Settings',icon:require('./img/ic_settings.png'),show:'always'},
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
