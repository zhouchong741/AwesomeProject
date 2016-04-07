/**
 * Created by jiae on 2016/4/7.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import MyAccountHeader from '../header/MyAccountHeader';
export default class MyAccountPage extends Component {
    render(){
        return(

            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <MyAccountHeader/>
                <Image style={styles.style_image} source={require('../img/logo.png')}/>
                <TextInput style={styles.style_user_input} placeholder='手机号/邮箱' numberOflines={1} autoFocus={true}
                           underlineColorAndroid={'transparent'} textAlign='center'/>
                <View style={{height:1,backgroundColor:'#f4f4f4'}}/>

                <TextInput style={styles.style_user_input} placeholder='密码' numberOflines={1} autoFocus={true}
                           underlineColorAndroid={'transparent'} textAlign='center'/>
                <View style={styles.style_view_commit}>
                    <Text style={{color:'#fff'}}>登录</Text>
                </View>

                <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:10}}>
                    <Text style={styles.style_view_unlogin}>无法登录？</Text>
                    <Text style={styles.style_view_register}>新用户</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        marginBottom: 30,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        height: 35,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 35,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#e25a5b',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin: {
        fontSize: 12,
        color: '#e24a5b',
        marginLeft: 10,
    },
    style_view_register: {
        fontSize: 12,
        color: '#e24a5b',
        marginRight: 10,
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row',
        textAlign: 'right',
    }
});