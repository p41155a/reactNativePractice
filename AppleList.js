import React, {useEffect, useState} from 'react';

import {
    Image,
    Button,
    View,
    Text,
    TextInput
} from 'react-native';

const HomeScreen = ({navigation}) => {
    let [value, setValue] = useState('');
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <View style={{flex:1, alignItems:'stretch', margin: 16}}>
                <View style= {{height: 44, alignItems:'stretch', flexDirection:'row', marginBottom: 16}}>
                    <Image
                        style={{height: 44, width: 44, marginRight: 16}}
                        resizeMode='contain'
                        source={require("./images/appleLogo.png")}
                    />
                    <TextInput
                        style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={text => {setValue(text)}}
                    />
                    <Button
                        color = 'gray'
                        onPress={() => { navigation.navigate('DetailScreen', {value: value})}}
                        title="검색"
                    />
                </View>
                <View>
                    <Text>Home</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;