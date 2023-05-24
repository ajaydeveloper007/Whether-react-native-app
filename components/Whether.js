import React, {useState, useEffect } from 'react'
import {View,Text, StyleSheet, ImageBackground, Dimensions, StatusBar} from 'react-native'
import SearchBar from './searchBar';
import {haze, rainy, snow, sunny } from '../assets/backgroundImages/index'

export default function Wheather({wheatherdata }) {

    const [backgroundImage, setBackgroundImage] = useState(null);
    const { weather,
        name,
        main: {temp, humidity}
     } = wheatherdata;
    const [{main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    },[wheatherdata])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return hazy
        return haze; 
    }
    let textColor = backgroundTmg !== sunny?'white':'black'
    return (
        <View style = {styles.container}>

            <ImageBackground
                source={backgroundImage}
                style={styles.getBackgroundImg}
                resizeMode='cover'
            >
                <SearchBar />

                <View style  = {{alignItems: 'center'}}></View>
                    <Text style = {{ ...styles.headerText,color:textcolor, fontWeight:'bold'}}>{name}</Text>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    getBackgroundImg:{
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText:{
        fontSize:36,
        marginTop:10,
    }
});