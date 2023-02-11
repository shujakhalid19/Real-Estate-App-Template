import { StyleSheet,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('window');

export default StyleSheet.create({
    text:{fontFamily: 'Poppins_300Light'},
    flsemi:{flex:0.4},
    fl1: {flex: 1},
    fl2:{flex:2},
    fl3:{flex:3},
    fl4:{flex:4},

    item50:{width:'50%'},
    row:{flexDirection:'row'},
    column:{flexDirection:'column'},
    spacedBw:{justifyContent:'space-between'},
    jCenter:{justifyContent:'center'},
    jEnd:{justifyContent:'flex-end'},
    jspacedEven:{justifyContent:'space-evenly'},
    jStart:{justifyContent:'flex-start'},
    aSCenter:{alignSelf:'center'},

    heading:{fontSize:56, fontFamily: 'Poppins_600SemiBold', textTransform: 'uppercase'},
    heading2:{fontSize:24, fontFamily: 'Poppins_600SemiBold', textTransform: 'uppercase'},
    f10:{fontSize:10, fontWeight:'300'},
    f28:{fontSize:28, fontWeight:'300'},
    f24:{fontSize:24, fontWeight:'300'},
    f22:{fontSize:22, fontWeight:'300'},
    f18:{fontSize:18, fontWeight:'300'},
    f16:{fontSize:16, fontWeight:'300'},
    f15:{fontSize:15, fontWeight:'300'},
    f12:{fontSize:12, fontWeight:'300'},

    center:{textAlign:'center'},
    username22:{fontSize:20,fontFamily: 'Poppins_300Light'},
    b:{fontWeight:'bold'},
    body:{fontFamily: 'Poppins_300Light'},
    dividerTop:{borderTopWidth:12,borderTopColor:'#d3d3d3',marginTop:10},
    dividerBottom:{borderBottomWidth:12,borderBottomColor:'#d3d3d3',paddingBottom:20},
    dividerGrey:{
      width:'100%',
      backgroundColor:'#d9deea90',
      paddingTop:15,paddingBottom:15
    },
    textCenter:{textAlign:'center'},

    clBl:{color:"cornflowerblue"},
    cltitle:{color:'#D2CCCC'},
    clmuted:{color:'#A3A3A370'},
    dark:{color:"black"},
    cllightlighter:{color:"grey"},
    clsilver:{color:"silver"},
    cllight:{color:"#FFF"},
    cldanger:{color:'red'},
    cl666:{color:'#666'},

    pdtp10:{paddingTop:10},
    pdtp20:{paddingTop:20},
    pdtp30:{paddingTop:30},
    pdrt10:{paddingRight:10},
    pdrt20:{paddingRight:20},
    pdrt30:{paddingRight:30},
    pdrt35:{paddingRight:50},
    pdlt5:{paddingLeft:5},
    pdlt10:{paddingLeft:10},
    pdlt20:{paddingLeft:20},
    pdlt30:{paddingLeft:30},
    pdlt35:{paddingLeft:50},
    pdbt10:{paddingBottom:10},
    pdbt20:{paddingBottom:20},

    mdtp10:{marginTop:10},
    mdtp20:{marginTop:20},
    mdtp30:{marginTop:30},
    mdtp40:{marginTop:40},
    mdtp60:{marginTop:60},

    mdbt10:{marginBottom:10},
    mdbt25:{marginBottom:25},
    mdbt35:{marginBottom:45},

    pill:{
      maxWidth:150,height:30,marginRight:10,marginBottom:10,borderColor:'#444',borderWidth:1,justifyContent:'center',paddingLeft:14,paddingRight:14,borderRadius:10
    },

    buttonPrimary:{
      padding:10,
      marginHorizontal:5,
      width:'100%',
      backgroundColor:'cornflowerblue',
      borderWidth:1,
      borderRadius:0,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
    buttonSecondary:{
      padding:16,
      width:'100%',
      backgroundColor:'#000',
      borderWidth:1,
      borderColor:'#FFF',
      borderRadius:0,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },

    lightboximg:{
      width:'100%',height:'100%',resizeMode:'contain'
    },

    messageinputstyle:{width:width/1.5,borderWidth:1,borderColor:"#d8d8d8",lineHeight:16,borderRadius:24,marginRight:16, marginLeft:16, marginBottom: 0, paddingTop: 9, padding: 8, paddingLeft: 16},

    sm_buttonSecondary:{
      width:'50%',
      height:40,
      backgroundColor:'transparent',
      borderWidth:1,
      borderColor:'#000',
      borderRadius:0,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
    platformWrap:{
      ...Platform.select({
        ios: {
            marginTop: 56,
        },
        android: {
          //  marginTop: 0,
        },
      }),
    },
  });
