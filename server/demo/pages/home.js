{
  type:"pageview",
  style:{
    backgroundColor:'#f0f3f4'
   },
  root:["page_content"],
  components:{
     page_content: {
            type: "view",
            style: {
                flex: 1,
            },
            root: [
                "page1_header",
                "page1_body",
            ]
        },
        page1_header: {
            type: "header",
            root: [
                "headerLeftIcon",
                "headersegment",
                "headerRightIcon"
            ],
            style: {
                height: 52,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(18,181,242)"
            }
        },
        headerLeftIcon: {
            type: "icon",
            icon: "icofont_edd8",
            iconStyle: {
                color: "#fff",
                fontSize: 20
            },
            style: {
                marginLeft: 10
            }
        },
        headerRightIcon: {
            type: "icon",
            icon: "icofont_f0a5",
            iconStyle: {
                color: "#fff",
                fontSize: 22
            },
            style: {
                marginRight: 10
            }
        },
        headersegment: {
            type: "segment",
            styletype: "1",
            style: {
                width: 120,
                borderColor: "white",
                borderRadius: 3
            },
            selectedItemStyle: {
                backgroundColor: "white"
            },
            selectedTextStyle: {
                color: "rgb(18,181,242)"
            },
            itemStyle: {
                height: 28,
                borderLeftColor: "transparent",
                backgroundColor: "rgb(18,181,242)"
            },
            textStyle: {
                fontSize: 13,
                color: "white"
            },
            items: [
                "消息",
                "电话"
            ]
        },
        测试ScrollView滑动: {
            type: "swiper",
            style: {
                
            }
        },
        page1_body: {
            type: "view",
            root: [
                "测试ScrollView滑动",
                "page1_view1",
                "page1_view2",
                "yunfeiview",
                "listviewtitlewrapper",
                "弹出层按钮",
                "goToListViewBtn"
            ],
            style: {
                overflow:"auto",
                flex: 1
            }
        },
        弹出层按钮:{
            type:"button",
            textStyle:{
                 fontSize:18,
                color:"rgb(19,55,209)",
            },
            style:{
                height:50,
                backgroundColor:"#fff",
                justifyContent:"center",
                alignItems:"center",

                borderColor:"#eee",
                borderTopWidth:1,
                borderBottomWidth:1
            },
            text:"弹出层"
        },
        listviewtitlewrapper: {
            type: "view",
            root: [
                "listviewtitle"
            ],
            style: {
                borderStyle: "solid",
                borderBottomWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderLeftWidth: 2,
                borderColor: "rgb(255, 102, 51)",
                paddingTop: 1,
                paddingBottom: 1,
                marginLeft: 3,
                marginBottom: 2,
                marginTop: 3,
                
            }
        },
        listviewtitle: {
            type: "text",
            text: "商品展示",
            style: {
                fontSize: 13,
                marginLeft: 4,
                paddingLeft: 4,
                color: "gray"
            }
        },
        popover: {
            type: "popover",
            style: {
                
            },
            root: [
                
            ]
        },
        图标测试: {
            type: "icon",
            text: "图标测试",
            icon: "f24e",
            //fontFamily: "FontAwesome",
            iconStyle: {
                fontSize: 20
            },
            textStyle: {
                fontSize: 13,
                marginTop: 6
            },
            textPos: "bottom"
        },
        图标1: {
            type: "icon",
            text: "退出",
            icon: "e960",
            iconStyle: {
                color: "#0B68E8"
            },
            textStyle: {
                color: "#0B68E8",
                fontSize: 13,
                marginLeft: 6
            },
            textPos: "right"
        },
        page1_view1: {
            type: "view",
            show: false,
            root: [
                "page1_text1"
            ],
            style: {
                backgroundColor: "rgba(0,0,0,.82)",
                height: 100,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }
        },
        yunfeiview: {
            type: "view",
            root: [
                "运费区域",
                "实际付款区域"
            ],
            style: {
                backgroundColor: "#fff",
                flexDirection: "column",
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10
            }
        },
        运费区域: {
            type: "view",
            root: [
                "运费文本",
                "运费值"
            ],
            style: {
                paddingBottom: 5,
                flexDirection: "row",
                justifyContent: "space-between"
            }
        },
        运费文本: {
            type: "text",
            text: "运费",
            style: {
                color: "#666666",
                fontSize: 13
            }
        },
        运费值: {
            type: "text",
            text: "6.00",
            style: {
                color: "gray",
                fontSize: 13
            }
        },
        实际付款区域: {
            type: "view",
            root: [
                "实际付款文本",
                "实际付款值"
            ],
            style: {
                flexDirection: "row",
                justifyContent: "space-between"
            }
        },
        实际付款文本: {
            type: "text",
            text: "实付款(含运费)",
            style: {
                color: "#666666",
                fontSize: 14
            }
        },
        实际付款值: {
            type: "text",
            text: "6.00",
            style: {
                color: "#FF6633",
                fontSize: 14
            }
        },
        page1_view2: {
            type: "view",
            root: [
                "众筹提示文本"
            ],
            style: {
                flexDirection: "column",
                backgroundColor: "#FEF3D9",
                height: 40,
                justifyContent: "center"
            }
        },
        众筹提示文本: {
            type: "text",
            style: {
                marginLeft: 15
            },
            text: "众筹成功AAA!"
        },
        page1_text1: {
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
        poplayout:{
            type:"poplayout",
            root:["poplayouttext"]
        },
        poplayouttext:{
            type:"text",
            text:"hhh"
        },
        popover:{
            type:"popover",
            root:["popovercontent"]
        },
        popovercontent:{
            type:"view",
            style:{
                height:200,
                width:120
            },
            root:["popoverText"]
        },
        popoverText:{
            type:"text",
            text:"这是一个poasdaspover"
        },
        goToListViewBtn: {
            type: "button",
            text: "ListViewDemo",
            style: {
              marginTop:300,
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
        }
  }
}
