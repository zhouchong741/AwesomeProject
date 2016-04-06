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
    WebView,
} from 'react-native';
var DEFAULT_URL = 'http://www.jiae.com';
var AwesomeProject = React.createClass({
    render: function () {
        return (
            <View style={{flex:1}}>
                <Text style={{height:30}}>WebView网页显示</Text>
                <WebView style={styles.webview_style}
                         url={DEFAULT_URL}
                         startInLoadingState={true}
                         domStorageEnable={true}
                         automaticallyAdjustContentInsets={true}
                         javaScriptEnable={true}>
                </WebView>
            </View>
        );
    },
});
var styles = StyleSheet.create({
    webview_style:{
        backgroundColor:'#FFF'
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
