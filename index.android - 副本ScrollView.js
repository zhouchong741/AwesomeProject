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
    ScrollView,
    Image,
} from 'react-native';

class AwesomeProject extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    ScrollView测试
                </Text>
                <ScrollView showVerticalScrollIndicator={true} contentContainerStyle={styles.contentContainer}>
                    <Text style={{color:'#fff', margin:5, fontSize:16,backgroundColor:'#ebebeb'}}>
                        测试Scroll 图文混
                    </Text>
                    <Image source={require('./img/fourth.jpg')} style={{height:170,width:360}}/>
                    <Text style={{color:'#fff', margin:5, fontSize:16,backgroundColor:'#ebebeb'}}>
                        测试Scroll 图文混
                    </Text>
                    <Image source={require('./img/second.jpg')} style={{height:170,width:360}}/>
                    <Text style={{color:'#fff', margin:5, fontSize:16,backgroundColor:'#ebebeb'}}>
                        测试Scroll 图文混
                    </Text>
                    <Image source={require('./img/third.jpg')} style={{height:170,width:360}}/>
                    <Text style={{color:'#fff', margin:5, fontSize:16,backgroundColor:'#ebebeb'}}>
                        测试Scroll 图文混 
                    </Text>
                    <Image source={require('./img/first.jpg')} style={{height:170,width:360}}/>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        backgroundColor: "#fff",
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
