import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import w1 from '../assets/imgs/w1.png'
import w2 from '../assets/imgs/Moon.png'
import icon from '../assets/imgs/icon.png'
import iconAr from '../assets/imgs/left.png'
import star from '../assets/imgs/Star.png'

const DetailPage = () => {
    return (
        <LinearGradient colors={['#182140', '#4c3b97', '#9542ac']}
                        style={style.linearGradient}
        >
            <View style={{justifyContent:'center'}}>
                <Text style={[style.heading,style.mx,style.mt]}>
                    North America
                </Text>
                <Text style={[style.heading,style.mx]}>Max: 24°   Min:18°</Text>

            </View>
            <Text style={[style.heading2,style.mx]}>7-Days Forecasts</Text>
            <View style={{marginHorizontal:20}}>
                <ScrollView horizontal={true}>
                    <View style={{gap:10, flex:1, flexDirection:'row'}}>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#9542ac', '#4c3b97']} style={style.card}>
                            <Text>19°C</Text>
                            <Image source={w1} style={style.img}></Image>
                            <Text>Mon</Text>
                        </LinearGradient>

                    </View>

                </ScrollView>
            </View>
            <LinearGradient colors={[ '#4c3b97','#9542ac']} style={style.card2}>
                <View style={style.flex}>
                    <Image source={icon}></Image>
                    <Text style={style.heading}>AIR QUALITY</Text>
                </View>
                <Text style={style.heading2}>3-Low Health Risk</Text>
                <View style={style.flex}>
                    <Text style={style.heading}>
                        See more
                    </Text>
                    <Image source={iconAr}></Image>
                </View>
            </LinearGradient>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <LinearGradient colors={['#9542ac','#4c3b97']} style={style.card3}>
                    <View style={style.flex}>
                        <Image source={star}/>
                        <Text style={style.heading}>SUNRISE</Text>
                    </View>
                    <Text>5:28 AM</Text>
                    <Text>Sunset: 7.25PM</Text>
                </LinearGradient>
                <LinearGradient colors={['#9542ac','#4c3b97']} style={style.card3}>
                    <View style={style.flex}>
                        <Image source={star}/>
                        <Text style={style.heading}>SUNRISE</Text>
                    </View>
                    <Text>5:28 AM</Text>
                    <Text>Sunset: 7.25PM</Text>
                </LinearGradient>

            </View>

        </LinearGradient>
    );
};

const style = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    heading:{
        fontSize:22,
        fontWeight:'bold',
    },heading2:{
        fontSize:32,
        fontWeight:'400',
        marginVertical:20
    },
    img:{
        height:50,
    },
    mx:{
        marginLeft:20
    },

    card:{
        paddingHorizontal:10,
        paddingVertical:30,
        borderRadius:99,
        justifyContent:'center',
        alignItems:'center',

    },
    card2:{
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:40,
        borderRadius:9,
        marginHorizontal:20
    },
    flex:{
        flexDirection:'row',
        gap:10
    },
    card3:{
        marginTop:20,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:9
    },
    mt:{
        marginTop:20
    }
})


export default DetailPage;
