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
    ViewPagerAndroid,
    TouchableOpacity,
    ToastAndroid,
    ViewPager,
    Alert,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

var AwesomeProject = React.createClass({
    getByFetch: function () {
        fetch('http://test.jiae.com:8580/test/services/queryCategory?uToken=680b6a70bfb06a815c569c45b6153c7357c0d338&sysType=A&deviceId=A&parentId=1002')
            .then((response) => response.text())
            .then((responseText) => {
                ToastAndroid.show(responseText, ToastAndroid.LONG);
                console.warn(new Date().getMilliseconds());
            })
            .catch((error) => {
                console.warn(error);
            }).done();
        console.warn('请求是异步的:' + new Date().getMilliseconds());
    },
    getByXMLHttpRequest: function () {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                ToastAndroid.show('success' + request.responseText, ToastAndroid.LONG);
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'http://www.zc741.com');
        request.send();
    },

    postSource: function () {
        fetch('http://www.zc741.com')
            .then((response) => response.text())
            .then((responseText) => {
                // Works on both iOS and Android
                Alert.alert(
                    '请求结果',
                    responseText.substring(0, 100),
                    [
                        {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.warn('OK Pressed')},
                    ]
                )
            })
            .catch((error) => {
                console.warn(error);
            }).done();

    },
    
    render: function () {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity onPress={this.getByFetch} style={ styles.button }>
                    <Text  >GET by fetch</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getByXMLHttpRequest} style={ styles.button }>
                    <Text >GET by XmlHttpRequest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.postSource } style={ styles.button }>
                    <Text >POST</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    button: {
        width: 180,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        margin: 10,
    }
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
