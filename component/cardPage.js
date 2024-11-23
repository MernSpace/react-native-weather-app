import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../assets/imgs/home.png';
import Home2 from '../assets/imgs/wather.png';
import w1 from '../assets/imgs/w1.png';
import moon from '../assets/imgs/Moon.png'

const CardPage = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#182140', '#4c3b97', '#9542ac']}
      style={style.linearGradient}>
      <Image source={Home} style={style.homeImg} />
      <Text style={style.temp}>19°</Text>
      <Text style={style.h2} >Precipitations</Text>
      <Text style={style.h2}>Max: 24° Min:18°</Text>
      <Image source={Home2} style={style.home} />
      <LinearGradient colors={['#9542ac', '#4c3b97']}>
       <View>
         <View style={style.card}>
           <View style={{width:'100%', height:220, paddingBottom:50}}>
             <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:12, paddingTop:30}}>
               <Text>Today</Text>
               <Text>23/5/24</Text>
             </View>
             <View style={{width:'100%', flex:1, flexDirection:'row', justifyContent:'space-between', paddingHorizontal:12}}>
               <TouchableOpacity onPress={() => { navigation.navigate('detail')}} >
                 <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                   <Text>19°C</Text>
                   <Image source={w1}/>
                   <Text>15.00</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate('detail')}} >
                 <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                   <Text>18°C</Text>
                   <Image source={moon}/>
                   <Text>16.00</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate('detail')}} >
                 <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                   <Text>17°C</Text>
                   <Image source={moon}/>
                   <Text>17.00</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => { navigation.navigate('detail')}} >
                 <View style={{flex:1, flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                   <Text>17°C</Text>
                   <Image source={moon}/>
                   <Text>18.00</Text>
                 </View>
               </TouchableOpacity>
             </View>
           </View>
         </View>
       </View>
      </LinearGradient>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImg: {
    width: 100,
    height: 130,
  },
  home:{
    width: 300,
    height: 200,
    marginTop:20,
    marginBottom:2
  },
h2:{
  fontSize: 22,
  fontWeight:'bold',
  fontFamily: 'Gill Sans',
},
  card:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  temp:{
    fontSize: 62,
    fontWeight:'bold',
    fontFamily: 'Gill Sans',

  }
});

export default CardPage;
