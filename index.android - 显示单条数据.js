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

class AwesomeProject extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            pic:'http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201109/18/7D2278978.jpg',
            des:''
        };
    }

    componentDidMount(){
      this.getByFetch();
    }

    getByFetch () {
        fetch('http://api.juheapi.com/japi/toh?key=68582dad2f97d117c267f6716eaf68d5&v=1.0&month=11&day=1')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    title: responseData.result[0].title,
                    pic: responseData.result[0].pic,
                    des: responseData.result[0].des,
                })
            }).catch((error) => {
                console.warn(error);
            });
    };

    render () {
        return (
            <View  style={{flexDirection:'row'}}>
                <View style={{flex:1,}}>
                    <Image source={{uri: this.state.pic}} style={styles.listimage} />
                </View>
                <View style={{flex:3,}}>
                    <Text style={styles.listcontent}>{this.state.des}</Text>
                </View>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    listimage:{
      width:80,
      height:80,
      margin:5,
    },
    listcontent:{
      marginTop:30,
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
