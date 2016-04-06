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
    BackAndroid,
    ToastAndroid,
} from 'react-native';
var count = 2;
class AwesomeProject extends Component {
    //组件挂载的时候调用
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress',function(){
           if (count>=1){
               ToastAndroid.show('收到点击返回键信息...'+count,ToastAndroid.SHORT);
               count--;
               return true;
           }else {
               return false;
           }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    BackAndroid实例
                </Text>
                <Text style={styles.instructions}>点击返回键查看效果</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
