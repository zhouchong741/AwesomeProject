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

class AwesomeProject extends Component {

    render() {
        return (
            <View style={{flexDirection:'column'}}>
                <View style={styles.list}>
                    <View style={{marginTop:10}}>
                        <Image source={require('./img/one.png')}/>
                    </View>
                    <View style={{marginTop: 10,marginLeft:35}}>
                        <View>
                            <Text style={{ fontSize:20}}>标题</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <Text style={{ fontSize:16}}>单肩包</Text>
                            <Text style={{marginLeft:30,fontSize:16}}>1120件</Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Text>￥20.00</Text>
                            <Text style={{marginLeft:30}}>2016.4.14</Text>
                        </View>
                    </View>

                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:40}}>
                    <Text>编辑</Text>
                    <Text style={{marginLeft:35}}>删除</Text>
                </View>
            </View>
        );
    }
}
;

var styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
       

    },


});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
