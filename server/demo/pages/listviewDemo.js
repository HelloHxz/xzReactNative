{
  type:"pageview",
  root:["page1_header","jumpBtn","listview"],
  style:{"backgroundColor":"white"},
  components:{
    page1_header:{
      type:"header",
      root:["headerLeftIcon","headersegment","headerempty"],
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
      iconStyle:{color:"#fff",fontSize:20},
      style:{
        marginLeft:10,
        width:40
      }
    },
    headerempty:{
      type:"view",
      style:{
        width:50
      }
    },
    headersegment:{
      type:"segment",
      styletype:"1",
      style:{
        width:120,
        borderColor:"white",
        borderRadius:6
      },
      selectedItemStyle:{
        backgroundColor:"white"
      },
      selectedTextStyle:{
        color:"rgb(18,181,242)"
      },
      itemStyle:{
        height:28,
        borderLeftColor:"transparent",
        backgroundColor:"rgb(18,181,242)"
      },
      textStyle:{
        fontSize:13,
        color:"white"
      },
      items:["消息","电话"]
    },
       jumpBtn: {
            type: "button",
            text: "Click Me A",
            style: {
                backgroundColor: "rgb(255,42,95)",
                width: 200,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 20,
                overflow: "hidden"
            },
            textStyle: {
                textAlign: "center",
                color: "#fff",
                fontSize: 14,
                
            }
        },
   
    listview:{
      type:"listview",
      style:{
      }
    }
    
  

    
  }
}

