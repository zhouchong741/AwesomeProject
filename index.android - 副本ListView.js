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
    TouchableHighlight,
} from 'react-native';
var THUMB_URLS = [
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),
    require('./img/ic_logo.png'),

];
var AwesomeProject = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
        };
    },
    _pressData: ({}: {[key: number]: boolean}),
    componentWillMount: function() {
    this._pressData = {};
},
render: function() {
    return (
        <ListView
            initialListSize={12}
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
        />
    );
},
_renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var imgSource = THUMB_URLS[rowID];
    return (
        <TouchableHighlight underlayColor="red">
            <View>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={imgSource} />
                    <Text style={styles.text}>
                        {rowData}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
},
_genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < THUMB_URLS.length; ii++) {
        dataBlob.push('单元格 ' + ii);
    }
    return dataBlob;
},
});
var styles = StyleSheet.create({
    list: {
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 85,
        height: 85,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb: {
        width: 45,
        height: 45
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
