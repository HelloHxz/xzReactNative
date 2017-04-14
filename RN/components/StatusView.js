//

{
  type:"xz.statusview",
  status:{
    "状态1":"View1",
    "状态2":"View2",
    "default":"View1"
  },
  datasouce:"xxx", //有数据 就根据数据控制  没有数据可以根据props控制
  datapath:""
},
components:{
  View1:{
    type:"xz.view",
    root:[""]
  }
}
