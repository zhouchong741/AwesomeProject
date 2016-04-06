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
} from 'react-native';

var Carousel = require('react-native-carousel');

class AwesomeProject extends Component {
    //头部轮播







    //分类区
    render() {

        


        return (
            <View style={{marginLeft:10,marginTop:10,marginRight:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:85}}>
                        <Image source={require('./img/one.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>优选家居</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/two.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>品味厨房</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/three.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>生活电器</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/four.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>极客数码</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', marginTop:10}}>
                    <View style={{width:85}}>
                        <Image source={require('./img/five.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>美酒伴侣</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/six.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>轻松办公</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/seven.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>新品专区</Text>
                    </View>
                    <View style={{width:85}}>
                        <Image source={require('./img/eight.png')} style={{alignSelf:'center',width:70,height:70}}/>
                        <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>翻牌福利</Text>
                    </View>
                </View>
            </View>
        );

    }
}

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
