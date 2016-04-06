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
    Alert,
    ToastAndroid,
    TouchableHighlight,
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

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <Text style={{height:30,color: 'black', margin: 8}}>
                    弹出框实例
                </Text>
                <CustomButton text='点击弹出默认Alert' onPress={()=>Alert.alert('确定退出吗?')}/>
                <CustomButton text='点击弹出两个默认Alert' onPress={()=>Alert.alert('温馨提示','确定退出吗?',[
                    {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消按钮',ToastAndroid.SHORT)},
                    {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定按钮',ToastAndroid.SHORT)}
                ])}/>
                <CustomButton text='点击弹出三个默认Alert' onPress={()=>Alert.alert('温馨提示','确定退出吗?',[
                    {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消按钮',ToastAndroid.SHORT)},
                    {text:'稍后再说',onPress:()=>ToastAndroid.show('你点击了稍后再说',ToastAndroid.SHORT)},
                    {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定按钮',ToastAndroid.SHORT)}
                ])}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
