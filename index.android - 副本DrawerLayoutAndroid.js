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
    DrawerLayoutAndroid,
} from 'react-native';

class AwesomeProject extends Component {

    render() {
        var navigationView = (
            <View style={{flex:1, backgroundColor:'gray'}}>
                <Text style={{margin:10,color:'#fff',fontSize:13,textAlign:'center'}}>导航栏标题</Text>
                <Text style={{marginTop:10, marginLeft:20,color:'#fff',fontSize:13,textAlign:'left'}}>项目1</Text>
                <Text style={{marginTop:10, marginLeft:20,color:'#fff',fontSize:13,textAlign:'left'}}>项目2</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid drawerWidth={150} drawerPosition={DrawerLayoutAndroid.positions.left}
                                 renderNavigationView={() => navigationView}>
                <View style={{flex:1, alignItems:'center'}}>
                    <Text style={{margin:10,fontSize:13,textAlign:'right'}}>
                        布局内容
                    </Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
