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

class CustomButton extends React.Component {
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

class AwesomeProject extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource:''
        };
    }


    getByFetch() {
        fetch('http://test.jiae.com:8580/test/services/queryCategory?uToken=680b6a70bfb06a815c569c45b6153c7357c0d338&sysType=A&deviceId=A&parentId=1002')
            .then((response) => response.text())
            .then((responseData) => {
                ToastAndroid.show(responseData, ToastAndroid.LONG);
                this.state({
                    dataSource: this.state.dataSource
                })
            })
            .catch((error) => {
                console.log(error);
            }).done();

    }

    render () {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <TouchableOpacity onPress={this.getByFetch} style={ styles.button }>
                    <Text>获得json</Text>
                </TouchableOpacity>
                <View>
                    
                    <CustomButton text="短时间的Toast" onPress={() => ToastAndroid.show('Short Toast',ToastAndroid.SHORT)}/>
                </View>
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
