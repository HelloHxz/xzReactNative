{
  type:"pageview",
  root:["header","segment","viewpager"],
  style:{"backgroundColor":"#f0f3f4"},
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
          text:"看点",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
        viewpager:{
          type:"viewpager",
          selectedKey:"commonlistpage",
          style:{
            flex:1
          }
        },
    segment:{
      type:"segment",
      styletype:"2",
      items:["精选","军事","纪录片","动漫","电影","电视剧","综艺","推荐"],
      style:{
        borderColor:"#ccc",
        backgroundColor:"#fff"
      },
      selectedTextStyle:{
        color:"rgb(18,181,242)"
      },
      textStyle:{
        fontSize:13,
        color:"gray",
      },
      indicatorStyle:{
        backgroundColor:"rgb(18,181,242)"
      },
      itemStyle:{
        width:60,
        height:38,
      }
    },
  }
}
