import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../assets/imgs/home.png';

const HomePage = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#182140', '#4c3b97', '#9542ac']}
            style={styles.linearGradient}>
            <Image source={Home} style={styles.homeImg} />
            <Text style={styles.headingTextW}>Weather</Text>
            <Text style={styles.headingTextF}>Fore Casts</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Profile')}}>
                <Text style={styles.btn}>Get Start</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    homeImg: {
        width: 200,
        height: 250,
    },
    headingTextW: {
        fontSize: 64,
        fontFamily: 'Rubik',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingTextF: {
        fontSize: 35,
        fontFamily: 'Rubik',
        textAlign: 'center',
        fontWeight: '400',
    },
    btn: {
        backgroundColor: '#DDB130',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 25,
        fontSize: 16,
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        marginTop: 40,
    },
});

export default HomePage;
