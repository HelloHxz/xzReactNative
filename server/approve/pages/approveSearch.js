{
  type:"pageview",
  root:["header"],
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
          text:"查询",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
      
  
  }
}
