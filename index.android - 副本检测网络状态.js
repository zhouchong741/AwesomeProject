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
    NetInfo,
    Alert,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

class AwesomeProject extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isConnected: null,
            connectionInfo: null
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change', this._handleConnectivityChange
        );
        //检测网络是否连接
        NetInfo.isConnected.fetch().done(
            (isConnected)=> {
                this.setState({isConnected});
            }
        );
        NetInfo.fetch().done(
            (connectionInfo)=>{this.setState({connectionInfo}); }
        )
    }

    componentWillMount() {
        NetInfo.isConnected.removeEventListener(
            'change', this._handleConnectivityChange
        );
    }

    _handleConnectivityChange(isConnected) {
        ToastAndroid.show((isConnected ? 'online' : 'offline'), ToastAndroid.SHORT);
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                    当前网络状态:
                </Text>
                <Text style={styles.state}>
                    {this.state.isConnected ? '网络在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    当前网络连接类型:
                </Text>
                <Text style={styles.state}>
                    {this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    当前网络连接是否计费:
                </Text>
                <Text style={styles.state}>
                    {NetInfo.isConnectionExpensive == true ? '需要计费' : '不计费'}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10
    },
    state: {
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 10,
        color:'#999'
    }
});
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
