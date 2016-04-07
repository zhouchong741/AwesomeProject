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
} from 'react-native';

var PAGES = 5;
var BGCOLOR = ['#fff', '#fff', '#fff', '#fff', '#fff'];
var IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];


var AwesomeProject = React.createClass({

    getInitialState: function () {
        return {
            page: 0,
            animationsAreEnabled: true,
            progress: {
                position: 0,
                offset: 0,
            },
        };
    },

    onPageSelected: function (e) {
        this.setState({page: e.nativeEvent.position});
    },

    onPageScroll: function (e) {
        this.setState({progress: e.nativeEvent});
    },

    move: function (delta) {
        var page = this.state.page + delta;
        this.go(page);
    },

    go: function (page) {
        if (this.state.animationsAreEnabled) {
            this.viewPager.setPage(page);
        } else {
            this.viewPager.setPageWithoutAnimation(page);
        }

        this.setState({page});
    },

    render: function () {
        var pages = [];
        for (var i = 0; i < PAGES; i++) {
            var pageStyle = {
                backgroundColor: BGCOLOR[i % BGCOLOR.length],
                alignItems: 'center',

            };
            pages.push(
                <View key={i} style={pageStyle} collapsable={false}>
                    <Image
                        style={styles.image}
                        source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
                    />

                </View>
            );
        }
      
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager => { this.viewPager = viewPager; }}>
                    {pages}
                </ViewPagerAndroid>

            </View>
        );
    },
});

var styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 360,
        height: 200,

    },
    viewPager: {
        flex: 1,
    },
});

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
