/**
 * Created by jiae on 2016/4/7.
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import ShopCartHeader from '../header/ShopCartHeader';
export default class MyAccountPage extends Component {
    render() {
        return (

            <View style={{backgroundColor:'#f4f4f4'}}>
                <ShopCartHeader/>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Image source={require('../img/product.jpg')} style={styles.product}/>

                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.product_name}>
                            ProductName
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    product: {
        width: 90,
        height: 90,
        margin: 10,
    },
    product_name: {
        margin:10,
        fontSize: 18,
    }
});