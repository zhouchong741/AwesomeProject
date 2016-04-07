/**
 * Created by jiae on 2016/4/7.
 */
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

export default class LoadingMore extends Component {

    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = [
                'row ' + ((page - 1) * 6 + 1),
                'row ' + ((page - 1) * 6 + 2),
                'row ' + ((page - 1) * 6 + 3),
                'row ' + ((page - 1) * 6 + 4),
                'row ' + ((page - 1) * 6 + 5),
                'row ' + ((page - 1) * 6 + 6),
            ];
            if (page === 6) {
                callback(rows, {
                    allLoaded: true,
                });
            } else {
                callback(rows);
            }
        }, 1000);
    }

    /*_onPress(rowData) {
        console.log(rowData + ' pressed');
    //    不可用
    }*/

    _renderRowView(rowData) {
        return (
            <TouchableHighlight
                style={styles.row}
                underlayColor='#fff'
                activeOpacity={0.5}
                onPress={() => ToastAndroid.show(rowData,ToastAndroid.SHORT)}>
                <Text style={{color: '#e25a5b'}}>{rowData}</Text>

            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <GiftedListView
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={false} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                    customStyles={{paginationView: {backgroundColor: '#eee'}}}
                    refreshableTintColor="blue"/>
            </View>
        );
    }
}
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