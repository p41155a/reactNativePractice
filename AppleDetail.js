import React, {useEffect, useState} from 'react';

import {
    Button,
    View,
    Text,
    TextInput
} from 'react-native';

const DetailScreen = ({route, navigation}) => {
    useEffect(() => {
        console.log('Detail Screen appear!');
        return () => {
            console.log('Detail Screen disappear!')
        }
    }, [navigation])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20}}>Detail Screen</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}>Value from Home : {route.params.value}</Text>
            <Button
                onPress={() => { navigation.goBack() }}
                title="뒤로 이동" />
        </View>
    )
}
export default DetailScreen;