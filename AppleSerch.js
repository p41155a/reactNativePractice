import React, {useEffect, useState} from 'react';

import {
    Button,
    View,
    Text,
} from 'react-native';

const SerchScreen = ({route, navigation}) => {
    useEffect(() => {
        console.log('Serch Screen appear!');
        return () => {
            console.log('Serch Screen disappear!')
        }
    }, [navigation])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, color: 'red'}}>검색 하셨군요!!</Text>
            <Text style={{fontSize:20, color: 'red'}}>하지만 아직 기능구현을 못했어요</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}> 리스트에서 {route.params.value}를 눌러 확인 하세요</Text>
            <Button
                onPress={() => { navigation.goBack() }}
                title="뒤로 이동" />
        </View>
    )
}
export default SerchScreen;