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

var PARSE_URL = "http://api.juheapi.com/japi/toh?key=68582dad2f97d117c267f6716eaf68d5&v=1.0&month=11&day=1";

var AwesomeProject = React.createClass ({

  getInitialState() {
      this.getByFetch();
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
            dataSource: ds.cloneWithRows(this._getRows()),
              title:'',
              pic:'http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201109/18/7D2278978.jpg',
              des:'',
      };
    },

    _getRows: function(): Array<string> {
        var data = [];
        for (var i = 0; i < 10; i++) {
          var pressedText = "this is item :" +i;
          data.push(pressedText);
        }
        return data;
      },

      getByFetch(){
          fetch(PARSE_URL)
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
      },

      _renderRow: function() {
          return (
          <TouchableHighlight>
            <View>
              <View style={styles.row}>
                <Image style={styles.thumb} source={{uri: this.state.pic}} />
                <Text style={styles.text}>
                  {this.state.des}
                </Text>
              </View>
              <View style={styles.separator} />
            </View>
          </TouchableHighlight>
    );
  },

    render() {
        return (
          <ListView
             dataSource={this.state.dataSource}
            //  renderRow={(rowData) => (<TouchableOpacity><Text style= {styles.rowStyle}>{rowData}</Text></TouchableOpacity>)}
             renderRow={this._renderRow} //不同的表现形式
            />
         );
    }
});

var styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f98765',
    alignItems: 'center',    //#水平居中
    justifyContent: 'center',//  #垂直居中
    textAlign: 'center',  // #文字水平居中
    height: 40,
    padding: 5,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 70,
    height: 70,
  },
  text: {
    flex: 1,
    marginTop:20,
    marginLeft:10,
    alignItems: 'center',    //#水平居中
    justifyContent: 'center',//  #垂直居中
      // #文字水平居中
  },
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
