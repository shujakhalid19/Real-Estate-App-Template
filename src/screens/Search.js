import React, { useState } from "react";
import {View,Text, ScrollView, TouchableOpacity,Dimensions} from 'react-native'
import s from '../styles/main.style';
const {width,height}=Dimensions.get('window');

const PROPERTY_TYPES=[
    "Apartments","Rental","Hostels","Properties"
]

const Search = ({navigation}) =>{
    const [type,settype]=useState('Apartments');
    const setPropertyType=(type)=>settype(type);
    return(
        <ScrollView>
            <View style={[s.mdtp60,s.pdlt20]}>
                <Text style={[s.cltitle,s.f28]}>Search</Text>
            </View>
            <View style={[s.mdtp40,s.row,s.spacedBw,s.fl1]}>
                <View>
                    <Text style={[s.cltitle,s.f18,s.pdlt20]}>Locations</Text>
                    <Text style={[s.clsilver,s.b,s.f12,s.pdlt20]}>New Delhi, India</Text>
                </View>
                <View style={[s.jCenter,s.aSCenter,s.pdrt10]}>
                    <TouchableOpacity style={[s.buttonPrimary,{
                        borderRadius:14,
                    }]}>
                        <Text style={[s.f12,s.cllight,s.b]}>Set Location</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[s.mdtp40,s.column,s.spacedBw,s.fl1]}>
                <View style={s.fl1}>
                    <Text style={[s.cltitle,s.f18,s.pdlt20]}>Property Type</Text>
                </View>
                <View style={[s.fl1,s.row,s.jCenter,s.mdtp20,{flexWrap: 'wrap'}]}>
                    {
                        PROPERTY_TYPES.map((data,i)=>{
                            return(
                                <TouchableOpacity key={i} onPress={()=>setPropertyType(data)} style={[(i%2) ? {marginLeft:10} : {marginRight:10},(type===data) && {borderWidth:2,borderColor:'#666'} ,{
                                    width:'42%',
                                    height:60,
                                    marginBottom:20,
                                    borderRadius:15,
                                    backgroundColor:(type===data) ?  '#1E1E1E' : '#2A2A2A',
                                    justifyContent:'center',
                                    alignContent:'center',
                                    alignItems:'center'
                                }]}>
                                    <Text style={[s.f12,s.cllight]}>{data}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    
                </View>
            </View>
            <View style={[s.fl2,s.jEnd,{
                marginTop:height/3
            }]}>
                <View style={[s.fl1,s.pdbt20,{backgroundColor:'#101010'}]}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={[s.fl1,s.mdtp40,s.jCenter,s.aSCenter]}>
                    <View style={{
                        width:width-40,
                        height:60,
                        backgroundColor:'#2A2A2A',
                        borderRadius:14,
                        paddingHorizontal:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={[s.cltitle,s.f14]}>Search Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

export default Search;