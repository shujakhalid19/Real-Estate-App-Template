import React from 'react'
import {View,Dimensions,Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import s from '../styles/main.style'

const {width,height}=Dimensions.get('window');

const APARTMENTS=[
    {
        title:"Galileo Apartments",
        img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
        address:"New Delhi,India"
    },
    {
        title:"Aristotle Apartments",
        img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
        address:"Moscow, Russia"
    },
    {
        title:"Mendels Apartments",
        img:"https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
        address:"London, UK"
    }
]

const Header=({nav})=>{
    return(
        <View style={[s.fl1,s.row,s.spacedBw,s.mdtp60,s.pdlt20,s.pdrt20]}>
            <View>
                <Text style={[s.clmuted,s.f22]}>Hey Shuja</Text>
                <Text style={[s.cltitle,s.f28]}>Find A Home</Text>
            </View>
            <TouchableOpacity onPress={()=>nav.navigate('Developer')} style={[[s.pdtp10]]}>
                <Image source={{uri:"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"}} 
                    style={{
                        width:50,
                        height:50,
                        borderRadius:25,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}


const Home=({navigation})=>{
    return(
        <>
        <ScrollView 
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        >
        <Header nav={navigation} />
        <View style={[s.fl1,s.pdbt20,{backgroundColor:'#101010'}]}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Search')}} style={[s.fl1,s.mdtp40,s.jCenter,s.aSCenter]}>
                <View style={{
                    width:width-40,
                    height:60,
                    backgroundColor:'#2A2A2A',
                    borderRadius:14,
                    paddingHorizontal:10,
                    justifyContent:'center'
                }}>
                    <Text style={[s.cltitle,s.f14]}>New Delhi, India</Text>
                    <Text style={[s.clBl,s.b,s.f12]}>Apartments</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={[s.fl1,s.pdlt20]}>
                <Text style={[s.cltitle,s.f22]}>Featured</Text>
                <ScrollView
                    horizontal={true}
                    >
                      {APARTMENTS.map((data,i)=>{
                            return(
                                <View key={i} style={[s.mdtp30,{
                                    width:width/1.5,
                                    marginHorizontal:10,
                                    backgroundColor:'#2A2A2A',
                                    borderRadius:14
                                }]}>
                                    <View>
                                        <Image source={{uri:data.img}} style={{
                                            width:'100%',
                                            height:200,
                                            borderRadius:14
                                        }} />
                                    </View>
                                    <View style={[s.pdtp20,s.pdbt20,s.pdlt10]}>
                                        <Text style={[s.cllight,s.f22]}>{data.title}</Text>
                                        <Text style={[s.clsilver,s.f14]}>{data.address}</Text>
                                    </View>
                                </View>
                            )
                        })
                        }
                    </ScrollView>
        </View>
        <View style={[s.fl2,s.jEnd,{
            marginHorizontal:10,
        }]}>
            <View style={[s.fl1,s.pdbt20]}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Developer')}} style={[s.fl1,s.mdtp40,s.jCenter,s.aSCenter]}>
                <View style={{
                    width:width-40,
                    height:60,
                    backgroundColor:'#2A2A2A',
                    borderRadius:14,
                    paddingHorizontal:10,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={[s.cltitle,s.f14]}>Contact Developer</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
        <View style={[s.mdtp20,s.fl1]}>
            <Text style={[s.cltitle,s.f22,s.pdlt20]}>Apartments</Text>
            <Text style={[s.clsilver,s.b,s.f12,s.pdlt20]}>New Delhi, India</Text>
            {APARTMENTS.map((data,i)=>{
                return(
                    <View key={i} style={[s.column,s.fl1,s.mdtp30,{
                        marginHorizontal:20,
                        backgroundColor:'#2A2A2A',
                        borderRadius:14
                    }]}>
                        <View>
                            <Image source={{uri:data.img}} style={{
                                width:'100%',
                                height:200,
                                borderRadius:14
                            }} />
                        </View>
                        <View style={[s.pdtp20,s.pdbt20,s.pdlt10]}>
                            <Text style={[s.cllight,s.f22]}>{data.title}</Text>
                            <Text style={[s.clsilver,s.f14]}>{data.address}</Text>
                        </View>
                    </View>
                )
            })
            }
        </View>
            
            
        
        </ScrollView>
        
        </>
    )
}
export default Home;