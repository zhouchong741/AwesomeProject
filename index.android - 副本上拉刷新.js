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
    ViewPagerAndroid,
    TouchableOpacity,
    ToastAndroid,
    ViewPager,
    TouchableWithoutFeedback,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

var GiftedListView = require('react-native-gifted-listview');

var AwesomeProject = React.createClass({
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];
            if (page === 3) {
                callback(rows, {
                    allLoaded: true,
                });
            } else {
                callback(rows);
            }
        }, 1000);
    },

    _onPress(rowData) {
        console.log(rowData + ' pressed');
    },

    _renderRowView(rowData) {
        return (
            <TouchableHighlight
                style={styles.row}
                underlayColor='#c8c7cc'
                onPress={() => this._onPress(rowData)}>
                <Text>{rowData}</Text>
            </TouchableHighlight>
        );
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}/>
                <GiftedListView
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                    customStyles={{paginationView: {backgroundColor: '#eee'}}}
                    refreshableTintColor="blue"
                />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    navBar: {
        height: 64,
        backgroundColor: '#CCC'
    },
    row: {
        padding: 10,
        height: 44,
    },
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
