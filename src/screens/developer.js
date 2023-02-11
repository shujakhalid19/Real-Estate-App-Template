import React, { useState } from "react";
import {View,Text, Linking, ScrollView, TouchableOpacity,Dimensions} from 'react-native'
import s from '../styles/main.style';
const {width,height}=Dimensions.get('window');

const PROPERTY_TYPES=[
    "Apartments","Rental","Hostels","Properties"
]

const Developer = ({navigation}) =>{
    const [type,settype]=useState('Apartments');
    const setPropertyType=(type)=>settype(type);
    return(
        <ScrollView>
            <View style={[s.mdtp60,s.pdlt20]}>
                <View>
                    <Text style={[s.clmuted,s.f16]}>Project designed and developed by,</Text>
                    <Text style={[s.cltitle,s.f28]}>Shuja Khalid</Text>
                </View>
            </View>
            <View style={[s.mdtp40,s.spacedBw,s.fl1]}>
                    <Text style={[s.cltitle,s.f18,s.pdlt20]}>About Me</Text>
                    <Text style={[s.clsilver,s.b,s.f16,s.pdlt20,s.pdtp20,s.pdrt10]}>
                        Im a software developer and
                        Ive set up this project for anyone learning react native I hope this will help them understand some concepts of app development and design rules,
                        Feel free to use this project for commercial purpose as well I'd be more than happy if my work serves its purpose.

                        {'\n'}{'\n'}

                        Incase you need any software related assistance feel free to contact me any time.
                    </Text>
            </View>
            <View style={[s.mdtp40,s.column,s.spacedBw,s.fl1]}>
                <View style={s.fl1}>
                    <Text style={[s.cltitle,s.f18,s.pdlt20]}>Contacts</Text>
                </View>
                <View style={[s.fl1,s.column,s.jCenter,s.mdtp20,s.pdlt20]}>
                    <Text style={[s.clmuted,s.f14,s.b]}>Email</Text>
                    <Text style={[s.clBl,s.pdtp10,s.f14]}>shujakhalid26@gmail.com</Text>
                </View>
            </View>
            <View style={[s.fl2,s.jEnd,{
                marginTop:height/5
            }]}>
                <View style={[s.fl1,s.pdbt20,{backgroundColor:'#101010'}]}>
                <TouchableOpacity onPress={()=>{Linking.openURL('mailto:shujakhalid26@gmail.com')}} style={[s.fl1,s.mdtp40,s.jCenter,s.aSCenter]}>
                    <View style={{
                        width:width-40,
                        height:60,
                        backgroundColor:'#2A2A2A',
                        borderRadius:14,
                        paddingHorizontal:10,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Text style={[s.cltitle,s.f14]}>Contact Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

export default Developer;