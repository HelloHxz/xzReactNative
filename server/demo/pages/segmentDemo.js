{
  type:"pageview",
  root:["page1_header","body"],
  style:{"backgroundColor":"white"},
  components:{
    page1_header:{
      type:"header",
      root:["headerLeftIcon","headerempty"],
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
        width:40
      }
    },
    headerempty:{
      type:"view",
      style:{
        width:50
      }
    },
   
    body:{
      type:"view",
      overflow:"auto",
      style:{
        paddingTop:10,
        flex:1
      },
      root:[
        "page1_segment",
        "page1_segment1",
        "page1_segment2",
        "page1_segment3",
        "page1_segment4",
      ]
    },
     page1_segment:{
      type:"segment",
       items:["国外","国内","宇宙","宇1宙"],
      style:{
        marginTop:5,
        marginBottom:5,
        width:240,
        alignSelf:"center",
        borderColor:"orange"
      },
      selectedItemStyle:{
        backgroundColor:"orange"
      },
      textStyle:{
        color:"gray"
      },
      itemStyle:{
        width:80,
        height:26
      }
    },
    page1_segment3:{
      type:"segment",
      styletype:"2",
      items:["国外","国内","xx"],
      style:{
        borderRadius:16,
        overflow:"hidden",
        width:220,
        marginLeft:20,
        backgroundColor:"rgb(43,62,77)",

      },
      itemStyle:{
        height:32,
        backgroundColor:"transparent"
      },
      textStyle:{
        color:"white"
      },
      selectedTextStyle:{
        color:"#fff"
      },
      selectedItemStyle:{

      },
      indicatorStyle:{
        height:32,
        borderRadius:16,
        backgroundColor:"rgb(143,173,220)"
      }
    }
    ,page1_segment1:{
      type:"segment",
      styletype:"2",
      items:["精选","军事","纪录片","动漫","电影","电视剧","综艺","推荐"],
      style:{
        borderColor:"#ccc"
      },
      selectedTextStyle:{
        color:"red"
      },
      textStyle:{
        fontSize:13,
        color:"gray",
      },
      indicatorStyle:{
        backgroundColor:"rgb(108, 170, 255)"
      },
      itemStyle:{
        width:60,
        height:34,
      }
    },
    page1_segment2:{
      type:"segment",
      styletype:"2",
      items:["精选","军事","纪录片","动漫","电影","电视剧","综艺","推荐"],
      style:{
        borderColor:"#ccc"
      },
      selectedTextStyle:{
        color:"red"
      },
      textStyle:{
        fontSize:13,
        color:"gray",
      backgroundColor:"transparent"
      },
      indicatorStyle:{
        top: 5,
        borderRadius: 20,
        left: 0,
        height: 26,
        borderWidth:1,
        borderColor:"red",
        borderStyle:"solid",
        overflow:"hidden",
        backgroundColor:"transparent"
      },
      itemStyle:{
        width:60,
        borderRadius: 20,
        height:34,
      }
    },
    page1_segment4:{
      type:"segment",
      styletype:"2",
      items:["快的","出租车","顺风车","试驾","代驾","顺风车","专车","巴士"],
      style:{
        borderColor:"#ccc"
      },
      selectedTextStyle:{
        color:"#ff7600",
        fontSize:13
      },
      textStyle:{
        fontSize:13,
        color:"gray",
        backgroundColor:"transparent"
      },
      indicatorStyle:{
        top: 5,
        borderRadius: 20,
        left: 0,
        height: 26,
        borderWidth:1,
        borderColor:"#eee",
        borderStyle:"solid",
        overflow:"hidden",
        backgroundColor:"#fff"
      },
      itemStyle:{
        width:60,
        borderRadius: 20,
        height:34,
      }
    },

    
  }
}
