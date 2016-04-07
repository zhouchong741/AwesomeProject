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
} from 'react-native';
import MainScreen from './MainScreen';

class AwesomeProject extends Component{
    render(){
        return (<MainScreen/>);
    }
}



AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
