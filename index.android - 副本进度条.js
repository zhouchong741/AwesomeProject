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
    ProgressBarAndroid,
} from 'react-native';

class AwesomeProject extends Component {

    render() {
        return (
            <View>
                <Text>ProgressBarAndroid控件</Text>
                <ProgressBarAndroid color="red" styleAttr='Inverse'/>
                <ProgressBarAndroid color="green" styleAttr='Horizontal' progress={0.5} indeterminate={false} style={{marginTop:10}} />
                <ProgressBarAndroid color="green" styleAttr='Horizontal' indeterminate={true} style={{marginTop:10}} />
                <ProgressBarAndroid color="black" styleAttr='SmallInverse' style={{marginTop:10}} />
                <ProgressBarAndroid styleAttr='LargeInverse' style={{marginTop:10}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);
