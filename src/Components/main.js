import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { image } from '../Helper/ImageHelper'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Main = ({ navigation }) => {
    const handl1 =()=>{
        navigation?.navigate('Screen1')
    };
    return (
        <View>
        <View style={{ height: 100, width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'grey', alignItems: 'center', marginTop: 750 }}>
            <TouchableOpacity onPress={handl1}>
                <Image source={image?.email} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={image?.email} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            <TouchableOpacity>
                <Image source={image?.email} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            <TouchableOpacity>
                <Image source={image?.email} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            {/* <TouchableOpacity>
                <Image source={image?.email} style={{ height: 30, width: 30 }} />
              </TouchableOpacity> */}
        </View>
     </View>
    )
}

export default Main;

const styles = StyleSheet.create({})