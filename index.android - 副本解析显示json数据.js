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
    ListView,
    ViewPagerAndroid,
    TouchableOpacity,
    ToastAndroid,
    ViewPager,
    Alert,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

class AwesomeProject extends Component{

    constructor(props) {
        super(props);
        this.state = {
            description:''
        };
    }
    getByFetch = (enableCallback) => {
        fetch('http://test.jiae.com:8580/test/services/queryCategory?uToken=680b6a70bfb06a815c569c45b6153c7357c0d338&sysType=A&deviceId=A&parentId=1002')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    description: responseData.data.pcchildrenList[0].description,
                })
            }).catch((error) => {
                console.warn(error);
            });
    };

    render () {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity onPress={this.getByFetch} style={ styles.button }>
                    <Text>获得json</Text>
                </TouchableOpacity>

                <Text>json：{this.state.description}</Text>
            </View>


        );
    }
};
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
