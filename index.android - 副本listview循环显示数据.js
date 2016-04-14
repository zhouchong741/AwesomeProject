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

var AwesomeProject = React.createClass ({
  getInitialState() {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
          dataSource: ds.cloneWithRows(this._getRows()),
      };
    },

    _getRows: function(): Array<string> {
        var data = [];
        for (var i = 0; i < 100; i++) {
          var pressedText = "this is item :" +i;
          data.push(pressedText);
        }
        return data;
      },
      _renderRow: function() {
          return (
          <TouchableHighlight>
            <View>
              <View style={styles.row}>
                <Image style={styles.thumb} source={require('./img/logo.png')} />
                <Text style={styles.text}>
                  {'this is aa'}
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
             renderRow={(rowData) => (<TouchableOpacity><Text style= {styles.rowStyle}>{rowData}</Text></TouchableOpacity>)}
            //  renderRow={this._renderRow} //不同的表现形式
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
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 50,
    height: 50,
  },
  text: {
    flex: 1,
    alignItems: 'center',    //#水平居中
    justifyContent: 'center',//  #垂直居中
    textAlign: 'center',  // #文字水平居中
  },
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
