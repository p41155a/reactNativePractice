import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';

import {
    Button,
    View,
    Text,
    Image
} from 'react-native';

const DetailScreen = ({route, navigation}) => {
    useEffect(() => {
        console.log('Detail Screen appear!');
        return () => {
            console.log('Detail Screen disappear!')
        }
    }, [navigation])

    const win = Dimensions.get('window');
    const image = route.params.product.image

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'flex-start', backgroundColor: 'white'}}>
            <Image
                style={{height: 360, width: win.width}}
                resizeMode='contain'
                source={image}
            />
            <Text style={{fontSize: 16, marginVertical: 8}}>제품명 : {route.params.product.name}</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}>크기 : {route.params.product.size}</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}>램 용량 : {route.params.product.ram}GB</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}>ssd 용량 : {route.params.product.ssd}</Text>
            <Text style={{fontSize: 36, marginVertical: 8}}>{Intl.NumberFormat().format(route.params.product.price)}원</Text>
            <Button
                onPress={() => { navigation.goBack() }}
                title="뒤로 이동" />
        </View>
    )
}
export default DetailScreen;