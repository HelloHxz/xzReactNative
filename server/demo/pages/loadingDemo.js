{
  type:"pageview",
  root:["header","body"],
  style:{"backgroundColor":"#f0f3f4"},
  components:{

    header:{
      type:"header",
      root:["headerLeftIcon","headertitle","headerempty"],
      style:{
         height:52,
      justifyContent:"space-between",
      alignItems:"center",
      backgroundColor:"rgb(18,181,242)"
      }
    },
    headerLeftIcon:{
      type:"icon",
       icon:"icofont_eb76",
      iconStyle:{color:"#fff",fontSize:30},
      style:{
        marginLeft:10
      }
    },
    headerempty:{
      type:"view",
      style:{
        width:34
      }
    },
        headertitle:{
          type:"text",
          text:"Loading",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
        body:{
          type:"view",
          style:{
            flex:1
          },
          root:["普通Loading","成功提示Loading","全屏幕Loading","自定义结果提示Loading"]
        },
        普通Loading:{
          type:"button",
          style:{
            height:48,
            borderTopWidth:1,
            marginTop:10,
            marginBottom:10,
            borderColor:"#eee",
            borderBottomWidth:1,
            backgroundColor:"#fff",
            justifyContent:"center",
            alignItems:"center",
          },
          textStyle:{
            color:"rgb(0, 147, 255)",
            fontSize:16
          },
          text:"普通Loading"
        },
        成功提示Loading:{
          type:"button",style:{
            height:48,
            borderTopWidth:1,
            marginTop:10,
            marginBottom:10,
            borderColor:"#eee",
            borderBottomWidth:1,
            backgroundColor:"#fff",
            justifyContent:"center",
            alignItems:"center",
          },
          textStyle:{
            color:"rgb(0, 147, 255)",
            fontSize:16
          },
          text:"成功提示Loading"
        },
        全屏幕Loading:{
          type:"button",style:{
            height:48,
            borderTopWidth:1,
            marginTop:10,
            marginBottom:10,
            borderColor:"#eee",
            borderBottomWidth:1,
            backgroundColor:"#fff",
            justifyContent:"center",
            alignItems:"center",
          },
          textStyle:{
            color:"rgb(0, 147, 255)",
            fontSize:16
          },
          text:"全屏幕Loading"
        },
        自定义结果提示Loading:{
          type:"button",style:{
            height:48,
            borderTopWidth:1,
            marginTop:10,
            marginBottom:10,
            borderColor:"#eee",
            borderBottomWidth:1,
            backgroundColor:"#fff",
            justifyContent:"center",
            alignItems:"center",
          },
          textStyle:{
            color:"rgb(0, 147, 255)",
            fontSize:16
          },
          text:"自定义结果提示Loading"
        }
   
  }
}
