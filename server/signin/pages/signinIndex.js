{
  type:"pageview",
  root:["header","body"],
  style:{"backgroundColor":"#fff"},
  components:{
    body:{
      type:"view",
      style:{
        flex:1
      },
      root:["my_text"]
    },
    my_text:{
      type:"text",
      text:"sss"
    },

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
          text:"移动签到",
          style:{
            fontSize:18,
            color:"#fff"
          }
        },
       
  
  }
}
