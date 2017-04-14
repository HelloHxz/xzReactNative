{
  type:"pageview",
  root:["top_view","mid_view","bottom_view"],
  style:{"backgroundColor":"white"},
  components:{
    top_view:{
      type:"view",
      style:{
        height:160,
        backgroundColor: "rgb(18,181,242)"
      }
    },
    mid_view:{
      type:"view",
      style:{
        flex:1,
        overflow:"auto"
      },
      root:["mid_repeat"]
    },
    mid_repeat:{
      type:"repeat",
      items:[
        {label:"开通会员",icon:"icofont_f0c0"},
        {label:"QQ钱包",icon:"icofont_f077"},
        {label:"Loading效果",icon:"icofont_f0c0"},
        {label:"弹出层&Dialog",icon:"icofont_ed7e"},
        {label:"我的相册",icon:"icofont_f024"},
        {label:"我的文件",icon:"icofont_ec24"},
        {label:"我的日程",icon:"icofont_ed21"}
      ],
      style:{},
      itemStyle:{
        height:50,
        alignItems:"flex-start",
        justifyContent:"center",
        paddingLeft:20
      },
      root:["mid_repeat_icon"]
    },
    mid_repeat_icon:{
      type:"icon",
      icon_bind:"icon",
      iconStyle:{
        fontSize:24,
        color:"#333"
      },
      textStyle:{
        fontSize:18,
        color:"#333",
        marginLeft:13,
        marginTop:2
      },
      text_bind:"label",
      textPos:"right"
    },
    bottom_view:{
      type:"view",
      style:{
        height:70,
      }
    }
  }
}