/**
 * Created by jiae on 2016/4/7.
 */
'use strict';

import React, {
    Component,
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet,
    Text,
} from 'react-native';

export default class MyAccountHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./../images/header/header_logo.png')} style={styles.logo}/>
                <Text style={{marginLeft: 90,width:30,flex:1,alignItems:'center',fontSize: 15,color: '#fff'}}>登录</Text>
                <Image source={require('./../images/header/sign.png')} style={styles.scanIcon}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#e25a5b',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'  // 设置拉伸模式
    },

    scanIcon: {
        height: 26.7,
        width: 36.7,
        resizeMode: 'stretch',
        alignItems: 'center'
    }
});