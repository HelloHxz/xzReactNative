module.exports = {
    type: "pageview",
    style: {
        backgroundColor: "#fff"
    },
    root: [
        "body"
    ],
    components: {
        body:{
            type:"view",
            style:{
                flex:1,
                alignItems:"center",
                justifyContent:"center"
            },
            root:["activityindicator"]
        },
        activityindicator:{
            type:"activityindicator",
            size:60,
            color:"#000"
        }
    }
};
