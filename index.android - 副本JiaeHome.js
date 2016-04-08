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
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import MainScreen from './MainScreen';

var AwesomeProject = React.createClass({
    render() {
        return (
            <MainScreen/>
        );
    }
});



AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
