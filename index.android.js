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

var ViewPager = require('react-native-viewpager');
class AwesomeProject extends Component {
    render() {
        return (
            <ViewPager
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                animation={(animatedValue, toValue, gestureState) => {

            var velocity = Math.abs(gestureState.vx);
            var baseDuration = 300;
            var duration = (velocity > 1) ? 1/velocity * baseDuration : baseDuration;

            return Animated.timing(animatedValue,
            {
                toValue: toValue,
                duration: duration,
                easing: Easing.out(Easing.exp)
            });
        }}
            />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
