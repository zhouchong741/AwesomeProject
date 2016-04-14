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
    Button,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import MainScreen from './MainScreen';

class AwesomeProject extends Component{
    constructor(props){
      super(props);
      this.state = {
        title:''
      };
    }
    fetcData = (enableCallback) =>{
      fetch('http://bbs.reactnative.cn/api/category/3')
          .then((response) => response.json())
          .then((responseText) => {
              this.setState({
                title: responseText.topics[2].title,
              })
          })
          .catch((error) => {
              console.warn(error);
          });
    };
    render() {
        return (
            <View>
              <Text>{this.state.title}</Text>
              <Text onPress={this.fetcData}>tttttt</Text>
            </View>
        );
    }
};
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
