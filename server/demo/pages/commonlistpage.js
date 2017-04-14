{
  type:"pageview",
  root:["body"],
  components:{
    body:{
      type:"view",
      overflow:"auto",
      style:{
        paddingTop:10,
        flex:1
      },
      root:[
        "text","DemoButton"
      ]
    },
    text:{
      type:"text",
      text:"2"
    },
    DemoButton:{
      type:"button",
      text:"1",
      style:{
        backgroundColor:"rgb(255,42,95)",
        width:200,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:20,
        overflow:"hidden"
      },
      textStyle:{
        textAlign:"center",
        color:"#fff",
        fontSize:14,
      }
    }
  }
}
