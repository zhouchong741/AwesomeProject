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
    ScrollView,
    PullToRefreshViewAndroid,
} from 'react-native';

const styles = StyleSheet.create({
    row: {
        borderColor: '#F9F9F9',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#757575',
        margin: 5
    },
    text: {
        alignSelf: 'center',
        color: '#fff'
    },
    layout: {
        flex: 1
    },
    scrollview: {
        flex: 1
    }
});
const Row = React.createClass({
    render: function() {
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text }
                </Text>
            </View>
        );
    }
});
const AwesomeProject = React.createClass({
    getInitialState() {
        return {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: '初始行' + i})
            )
        };
    },
    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} />;
        });
        return (
            <PullToRefreshViewAndroid
                style={styles.layout}
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
                colors={['#ff0000', '#00ff00', '#0000ff','#123456']}
                progressBackgroundColor={'#ffffff'}>
                <ScrollView style={styles.scrollview}>
                    {rows}
                </ScrollView>
            </PullToRefreshViewAndroid>
        );
    },

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 进行准备5项新数据
            const rowData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '下拉刷新行' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowData
            });
        }, 3000);
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
