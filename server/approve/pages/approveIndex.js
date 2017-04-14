{
  type:"pageview",
  root:["header","search_bar"],
  style:{"backgroundColor":"#fff"},
  components:{
     header: {
            type: "header",
            root: [
                "leftBackIcon","headertitle","headerempty"
            ],
            style: {
                height: 52,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#e60012"
            }
        },
        headerempty:{
          type:"view",
          style:{
            width:60
          }
        },
        leftBackIcon:{
          type:"icon",
          style:{
             width:60
          },
          text:"返回",
          textStyle:{
            color:"#fff",
            fontSize:16,
            marginLeft:-2
          },
          iconStyle:{
            fontSize:30,
            color:"#fff"
          },
          icon:"icofont_eb76",
        },
        headertitle:{
          type:"text",
          text:"审批",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
        search_bar:{
          type:"view",
          style:{
            height:44,
            backgroundColor:"#eee",
            justifyContent:"center",
            alignItems:"center"
          },
          root:["search_input"]
        },
        search_input:{
          type:"icon",
          icon:"icofont_edee",
          iconStyle:{
            color:"#333",
            fontSize:16,
          },
          text:"热门搜索",
          textStyle:{
            marginLeft:5,
            color:"#333",
          },
          style:{
            height:32,
            paddingLeft:10,
            width:350,
            backgroundColor:"#fff",
            borderRadius:4
          }
        }
       
  
  }
}
