/**
 * Created by yuanguozheng on 16/1/22.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    RefreshControl,
    ScrollView,
} from 'react-native';
import Header from '../header/HomeHeader';
import ViewPager from 'react-native-viewpager';
import MenuButton from './MenuButton';
import LoadingMore from '../LoadingMore';

const BANNER_IMGS = [
    require('../images/banner/first.jpg'),
    require('../images/banner/second.jpg'),
    require('../images/banner/third.jpg'),
    require('../images/banner/fourth.jpg')
];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    render() {
        return (
            <View style={{height:522,justifyContent: 'center'}}>
                <Header />
                <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{backgroundColor:'#fff'}}>

                    <ViewPager
                        style={{height:140}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../images/home_icons/one.png')}
                                    showText={'优选家居'} tag={'yxjj'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/two.png')}
                                    showText={'品味厨房'} tag={'pwcf'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/three.png')}
                                    showText={'生活电器'} tag={'shdq'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/four.png')}
                                    showText={'极客数码'} tag={'jksm'}
                                    onClick={this._onMenuClick}/>
                    </View>
                    <View style={styles.menuView}>
                        <MenuButton renderIcon={require('../images/home_icons/five.png')}
                                    showText={'美酒伴侣'} tag={'mjbl'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/six.png')}
                                    showText={'轻松办公'} tag={'qsbg'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/seven.png')}
                                    showText={'新品专区'} tag={'xpzq'}
                                    onClick={this._onMenuClick}/>
                        <MenuButton renderIcon={require('../images/home_icons/eight.png')}
                                    showText={'翻牌福利'} tag={'fpfl'}
                                    onClick={this._onMenuClick}/>
                    </View>
                    <View style={{marginTop:15,borderWidth:0.5,borderColor:'#ccc'}}/>
                    
                    
                    <LoadingMore />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 140,
        resizeMode: 'stretch'
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    }
});