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
    Picker,
} from 'react-native';

var AwesomeProject = React.createClass({
    getInitialState() {
        return {
            language: '',
        };
    },
    render() {
        return (
            <View style={styles.container}>
                <Text >
                    Picker选择器实例
                </Text>
                <Picker
                    mode={'dropdown'}/*下拉选择的效果*/
                    /*prompt="请选择编程语言"*//*弹出的效果*/
                    style={{width:150}}
                    selectedValue={this.state.language}
                    onValueChange={(value) => this.setState({language: value})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="javaScript" />
                </Picker>
                <Text>当前选择的是:{this.state.language}</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
