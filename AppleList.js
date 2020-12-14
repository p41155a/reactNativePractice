import React, {useEffect, useState} from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {
    Image,
    Button,
    View,
    Text,
    TextInput,
    FlatList
} from 'react-native';
import { products } from './ApplesProducts';

const AppleProjuctCell = ({product}) => (
    <View
        style={{
            flexDirection: 'row',
            height: 160,
            marginVertical: 8, marginHorizontal: 8,
            borderColor: 'lightgrey',
            borderRadius: 10,
            borderWidth: 2}}>
        <View style={{justifyContent:'center', marginLeft: 20, width: 100, alignItems: 'center'}}>
            <Image
                style={{height: 100, width: 100}}
                resizeMode='contain'
                source={product.image}
            />
            <Text style={{fontSize: 16}}>{product.name}</Text>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{justifyContent:'flex-end', margin: 20}}>
            <Text style={{fontSize: 16}}>{Intl.NumberFormat().format(product.price)}원</Text>
        </View>
    </View>
)

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
                        onPress={() => { navigation.navigate('SerchScreen', {value: value})}}
                        title="검색"
                    />
                </View>
                <View>
                </View>
                <View style= {{flex: 1, height: 44, alignItems:'stretch'}}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => `product=${item.id}`}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => { showMovieDetail(item) } }
                        >
                            <AppleProjuctCell product={item} />
                        </TouchableHighlight>
                    )}
                />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;