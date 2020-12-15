import React, {useEffect, useState} from 'react';
import MapView, {Marker} from "react-native-maps";
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderColor: '#f0f0f0',
      borderWidth: 0.3
    },
    title: {
      fontSize: 15,
    },
  });

const mapScreen = () => {
    const firstStore = [{key: 0, title : '애플 스토어' , description: "애플 가로수길", coordinate: {latitude:37.520819816124934, longitude:127.022729409778926}}]
    const secondStore = [{key: 1, title : '애플(오픈예정)' , description: "애플스토어 여의도점", coordinate: {latitude:37.5251760799749, longitude:126.924871957013}}]
    const [store, setStore] = useState(firstStore)
    const [url, setUrl] = useState("http://place.map.kakao.com/591186900")

    let [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{flex: 1}}>
            
            {
                store.map( (item, index) => (
                    <MapView
                        key={item.key} // 키 값을 바꿔 리로드
                        style={{flex: 1}}
                        initialRegion={{
                            latitude:item.coordinate.latitude, longitude:item.coordinate.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421
                        }}
                        onMarkerPress={(e) => {
                            setModalVisible(true)
                        }}
                    >
                    <Marker title={item.title} description={item.description} coordinate={item.coordinate} key={index} />
                    </MapView>
                ))
            }
            <Modal
                visible={modalVisible}
                style={{alignItems:'center'}}
                onBackdropPress={() => {setModalVisible(false) }} // 모달 콘텐츠 영역 외 터치시 모달 닫기
                onRequestClose={() => { setModalVisible(false) }} // for android - backbutton
            >
                <View style={{width: '90%', height: '60%'}} >
                    <WebView source={{ uri: url }} />
                </View>
            </Modal>
            <View style={{height: 44, flexDirection:'row'}}>
            <TouchableOpacity 
                style={styles.button}
                onPress= {() => {
                    setStore(firstStore)
                    setUrl("http://place.map.kakao.com/591186900")
                }}
            >
                <Text style={styles.title}>애플스토어 가로수길</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress= {() => {
                    setStore(secondStore)
                    setUrl("http://place.map.kakao.com/826013680")
                }}
            >
                <Text style={styles.title}>애플스토어 여의도점</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default mapScreen;