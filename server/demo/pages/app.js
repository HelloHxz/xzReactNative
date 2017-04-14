{
  type:"pageview",
  root:["header","body"],
   style:{
    "backgroundColor":"#fff"
   },
  components:{
     header: {
            type: "header",
            root: [
                "headertitle"
            ],
            style: {
                height: 52,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(18,181,242)"
            }
        },
        headertitle:{
          type:"text",
          text:"应用",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
        body:{
          type:"view",
          style:{
            flex:1,
            overflow:"auto"
          },
          root:["app_repeat"]
        },
        app_repeat:{
          type:"repeat",
          activeOpacity:0.8,
          items:[{
            "url":"http://10.21.2.122:5555/server/signin/dev/index.js",
            "version":"",
            "name":"移动签到"
          },{
            "url":"http://10.21.2.122:5555/server/approve/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          },{
            "url":"http://localhost:5555/server/signin/dev/index.js",
            "name":"审批"
          }],
          root:["app_repeat_icon"],
          itemStyle:{
            height:100,
            width:93,
            paddingTop:10
          },
          style:{
            flexWrap:"wrap",

            flexDirection:"row"
          }
        },
        app_repeat_icon:{
          type:"icon",
          icon:"icofont_ea6c",
          iconStyle:{
            backgroundColor:"rgb(18,181,242)",
            color:"#fff",
            w:56,
            borderRadius:28,
            justifyContent:"center",
            alignItems:"center",
            overflow:"hidden",
            fontSize:26
          },
          textStyle:{
            marginTop:8,
            paddingLeft:4,
            paddingRight:4
          },
          numberOfLines:1,
          text:"移动签到",
          text_bind:"name",
          textPos:"bottom"
        },


  }
}
