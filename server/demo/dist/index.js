{"root":"","pages":{"app":"{type:\"pageview\",root:[\"header\",\"body\"],style:{\"backgroundColor\":\"#fff\"},components:{header:{type:\"header\",root:[\"headertitle\"],style:{height:52,justifyContent:\"center\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headertitle:{type:\"text\",text:\"应用\",style:{fontSize:18,color:\"#fff\"}},body:{type:\"view\",style:{flex:1,overflow:\"auto\"},root:[\"app_repeat\"]},app_repeat:{type:\"repeat\",activeOpacity:0.8,items:[{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"version\":\"\",\"name\":\"移动签到\"},{\"url\":\"http://localhost:5555/server/approve/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"},{\"url\":\"http://localhost:5555/server/signin/dev/index.js\",\"name\":\"审批\"}],root:[\"app_repeat_icon\"],itemStyle:{width:93,height:110,justifyContent:\"center\",alignItems:\"center\",},style:{flexWrap:\"wrap\",flexDirection:\"row\"}},app_repeat_icon:{type:\"icon\",icon:\"icofont_ea6c\",iconStyle:{backgroundColor:\"rgb(18,181,242)\",color:\"#fff\",width:56,height:56,borderRadius:28,justifyContent:\"center\",alignItems:\"center\",overflow:\"hidden\",fontSize:26},textStyle:{marginTop:8,paddingLeft:4,paddingRight:4},numberOfLines:1,text:\"移动签到\",text_bind:\"name\",textPos:\"bottom\"},}}","commonlistpage":"{type:\"pageview\",root:[\"body\"],components:{body:{type:\"view\",overflow:\"auto\",style:{paddingTop:10,flex:1},root:[\"text\",\"DemoButton\"]},text:{type:\"text\",text:\"2\"},DemoButton:{type:\"button\",text:\"1\",style:{backgroundColor:\"rgb(255,42,95)\",width:200,paddingTop:10,paddingBottom:10,borderRadius:20,overflow:\"hidden\"},textStyle:{textAlign:\"center\",color:\"#fff\",fontSize:14,}}}}","drawlayout":"{type:\"pageview\",root:[\"top_view\",\"mid_view\",\"bottom_view\"],style:{\"backgroundColor\":\"white\"},components:{top_view:{type:\"view\",style:{height:160,backgroundColor:\"rgb(18,181,242)\"}},mid_view:{type:\"view\",style:{flex:1,overflow:\"auto\"},root:[\"mid_repeat\"]},mid_repeat:{type:\"repeat\",items:[{label:\"开通会员\",icon:\"icofont_f0c0\"},{label:\"QQ钱包\",icon:\"icofont_f077\"},{label:\"个性装扮\",icon:\"icofont_f0c0\"},{label:\"我的收藏\",icon:\"icofont_ed7e\"},{label:\"我的相册\",icon:\"icofont_f024\"},{label:\"我的文件\",icon:\"icofont_ec24\"},{label:\"我的日程\",icon:\"icofont_ed21\"}],style:{},itemStyle:{height:50,alignItems:\"flex-start\",justifyContent:\"center\",paddingLeft:20},root:[\"mid_repeat_icon\"]},mid_repeat_icon:{type:\"icon\",icon_bind:\"icon\",iconStyle:{fontSize:24,color:\"#333\"},textStyle:{fontSize:18,color:\"#333\",marginLeft:13,marginTop:2},text_bind:\"label\",textPos:\"right\"},bottom_view:{type:\"view\",style:{height:70,}}}}","goodsDetail":"{type:\"pageview\",root:[\"header\",\"body\"],style:{\"backgroundColor\":\"#fff\"},components:{header:{type:\"header\",root:[\"退出\",\"headersegment\",\"headerempty\"],style:{height:52,justifyContent:\"space-between\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headerempty:{type:\"view\",style:{width:50}},headersegment:{type:\"segment\",styletype:\"2\",items:[\"商品\",\"详情\",\"评价\"],style:{width:150,marginTop:4},itemStyle:{ios_height:38,android_height:48,web_height:48,},textStyle:{fontSize:15},selectedTextStyle:{color:\"black\",fontSize:15},indicatorStyle:{backgroundColor:\"black\"}},退出:{type:\"icon\",icon:\"e960\",style:{width:50,height:44,justifyContent:\"flex-start\",paddingLeft:5},iconStyle:{color:\"#fff\",fontSize:18}},body:{type:\"view\",overflow:\"auto\",style:{paddingTop:10,flex:1},root:[\"DemoButton\"]},DemoButton:{type:\"button\",text:\"点击就送屠龙刀\",style:{backgroundColor:\"rgb(255,42,95)\",width:200,paddingTop:10,paddingBottom:10,borderRadius:20,overflow:\"hidden\"},textStyle:{textAlign:\"center\",color:\"#fff\",fontSize:14,}},}}","home":"{type:\"pageview\",root:[\"page_content\"],style:{paddingBottom:58},components:{page_content:{type:\"view\",style:{flex:1},root:[\"page1_header\",\"page1_body\",]},page1_header:{type:\"header\",root:[\"headerLeftIcon\",\"headersegment\",\"headerempty\"],style:{height:52,justifyContent:\"space-between\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headerLeftIcon:{type:\"icon\",icon:\"icofont_edd8\",iconStyle:{color:\"#fff\",fontSize:20},style:{marginLeft:10}},headerempty:{type:\"view\",style:{width:34}},headersegment:{type:\"segment\",styletype:\"1\",style:{width:120,borderColor:\"white\",borderRadius:6},selectedItemStyle:{backgroundColor:\"white\"},selectedTextStyle:{color:\"rgb(18,181,242)\"},itemStyle:{height:28,borderLeftColor:\"transparent\",backgroundColor:\"rgb(18,181,242)\"},textStyle:{fontSize:13,color:\"white\"},items:[\"消息\",\"电话\"]},测试ScrollView滑动:{type:\"swiper\",style:{}},page1_body:{type:\"view\",scrollEnabled:true,root:[\"测试ScrollView滑动\",\"page1_view1\",\"page1_view2\",\"yunfeiview\",\"listviewtitlewrapper\",\"goToListViewBtn\"],style:{flex:1}},listviewtitlewrapper:{type:\"view\",root:[\"listviewtitle\"],style:{borderStyle:\"solid\",borderBottomWidth:0,borderRightWidth:0,borderTopWidth:0,borderLeftWidth:2,borderColor:\"rgb(255, 102, 51)\",paddingTop:1,paddingBottom:1,marginLeft:3,marginBottom:2,marginTop:3,}},listviewtitle:{type:\"text\",text:\"商品展示\",style:{fontSize:13,marginLeft:4,paddingLeft:4,color:\"gray\"}},popover:{type:\"popover\",style:{},root:[]},图标测试:{type:\"icon\",text:\"图标测试\",icon:\"f24e\",iconStyle:{fontSize:20},textStyle:{fontSize:13,marginTop:6},textPos:\"bottom\"},图标1:{type:\"icon\",text:\"退出\",icon:\"e960\",iconStyle:{color:\"#0B68E8\"},textStyle:{color:\"#0B68E8\",fontSize:13,marginLeft:6},textPos:\"right\"},page1_view1:{type:\"view\",show:false,root:[\"page1_text1\"],style:{backgroundColor:\"rgba(0,0,0,.82)\",height:100,width:\"100%\",flexDirection:\"column\",alignItems:\"center\",justifyContent:\"center\"}},yunfeiview:{type:\"view\",root:[\"运费区域\",\"实际付款区域\"],style:{backgroundColor:\"#fff\",flexDirection:\"column\",paddingTop:10,paddingLeft:10,paddingRight:10,paddingBottom:10}},运费区域:{type:\"view\",root:[\"运费文本\",\"运费值\"],style:{width:\"100%\",paddingBottom:5,flexDirection:\"row\",justifyContent:\"space-between\"}},运费文本:{type:\"text\",text:\"运费\",style:{color:\"#666666\",fontSize:13}},运费值:{type:\"text\",text:\"6.00\",style:{color:\"gray\",fontSize:13}},实际付款区域:{type:\"view\",root:[\"实际付款文本\",\"实际付款值\"],style:{width:\"100%\",flexDirection:\"row\",justifyContent:\"space-between\"}},实际付款文本:{type:\"text\",text:\"实付款(含运费)\",style:{color:\"#666666\",fontSize:14}},实际付款值:{type:\"text\",text:\"6.00\",style:{color:\"#FF6633\",fontSize:14}},page1_view2:{type:\"view\",root:[\"众筹提示文本\"],style:{flexDirection:\"column\",backgroundColor:\"#FEF3D9\",height:40,width:\"100%\",justifyContent:\"center\"}},众筹提示文本:{type:\"text\",style:{marginLeft:15},text:\"众筹成功!\"},page1_text1:{type:\"button\",text:\"ClickMe\",style:{backgroundColor:\"rgb(255,42,95)\",width:200,paddingTop:10,paddingBottom:10,borderRadius:20,overflow:\"hidden\"},textStyle:{textAlign:\"center\",color:\"#fff\",fontSize:14,}},goToListViewBtn:{type:\"button\",text:\"ListViewDemo\",style:{marginTop:300,backgroundColor:\"rgb(255,42,95)\",width:200,paddingTop:10,paddingBottom:10,borderRadius:20,overflow:\"hidden\"},textStyle:{textAlign:\"center\",color:\"#fff\",fontSize:14,}}}}","listviewDemo":"{type:\"pageview\",root:[\"page1_header\",\"body\"],style:{\"backgroundColor\":\"white\"},components:{page1_header:{type:\"header\",root:[\"headerLeftIcon\",\"headersegment\",\"headerempty\"],style:{height:52,justifyContent:\"space-between\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headerLeftIcon:{type:\"icon\",icon:\"e914\",iconStyle:{color:\"#fff\",fontSize:20},style:{marginLeft:10}},headerempty:{type:\"view\",style:{width:34}},headersegment:{type:\"segment\",styletype:\"1\",style:{width:120,borderColor:\"white\",borderRadius:6},selectedItemStyle:{backgroundColor:\"white\"},selectedTextStyle:{color:\"rgb(18,181,242)\"},itemStyle:{height:28,borderLeftColor:\"transparent\",backgroundColor:\"rgb(18,181,242)\"},textStyle:{fontSize:13,color:\"white\"},items:[\"消息\",\"电话\"]},body:{type:\"view\",scrollEnabled:\"true\",style:{paddingTop:10,flex:1},root:[\"listview\"]},listview:{type:\"listview\",root:[\"row_innerview\"],dataSourceKey:\"GoodsListView\",dataPath:\"data\",col:2,style:{},rowStyle:{paddingTop:2,paddingLeft:2,paddingRight:2,paddingBottom:2}},row_innerview:{type:\"view\",root:[\"row_image\",\"row_name\",\"row_price\"],style:{backgroundColor:\"#fff\",paddingLeft:4,paddingRight:4,flexDirection:\"column\",borderRadius:3}},row_image:{type:\"image\",dataSourceKey:\"$$rowdata\",dataPath:\"imageurl\",style:{flex:1,height:140,backgroundColor:\"#000\"}},row_name:{type:\"text\",style:{fontSize:12,color:\"#aaa\",lineHeight:15,height:30,overflow:\"hidden\"},dataSourceKey:\"$$rowdata\",dataPath:\"name\",text:\"未绑定\"},row_price:{type:\"text\",style:{},dataSourceKey:\"$$rowdata\",dataPath:\"price\",text:\"0.00\"}}}","my":"{type:\"pageview\",root:[\"header\",\"segment\",\"viewpager\"],style:{\"backgroundColor\":\"#fff\"},components:{header:{type:\"header\",root:[\"headertitle\"],style:{height:52,justifyContent:\"center\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headertitle:{type:\"text\",text:\"看点\",style:{fontSize:18,color:\"#fff\"}},viewpager:{type:\"viewpager\",selectedKey:\"commonlistpage\",style:{flex:1}},segment:{type:\"segment\",styletype:\"2\",items:[\"精选\",\"军事\",\"纪录片\",\"动漫\",\"电影\",\"电视剧\",\"综艺\",\"推荐\"],style:{borderColor:\"#ccc\"},selectedTextStyle:{color:\"rgb(18,181,242)\"},textStyle:{fontSize:13,color:\"gray\",},indicatorStyle:{backgroundColor:\"rgb(18,181,242)\"},itemStyle:{width:60,height:38,}},}}","segmentDemo":"{type:\"pageview\",root:[\"page1_header\",\"body\"],style:{\"backgroundColor\":\"white\"},components:{page1_header:{type:\"header\",root:[\"headerLeftIcon\",\"headersegment\",\"headerempty\"],style:{height:52,justifyContent:\"space-between\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headerLeftIcon:{type:\"icon\",icon:\"e914\",iconStyle:{color:\"#fff\",fontSize:20},style:{marginLeft:10}},headerempty:{type:\"view\",style:{width:34}},headersegment:{type:\"segment\",styletype:\"1\",style:{width:120,borderColor:\"white\",borderRadius:6},selectedItemStyle:{backgroundColor:\"white\"},selectedTextStyle:{color:\"rgb(18,181,242)\"},itemStyle:{height:28,borderLeftColor:\"transparent\",backgroundColor:\"rgb(18,181,242)\"},textStyle:{fontSize:13,color:\"white\"},items:[\"消息\",\"电话\"]},body:{type:\"view\",overflow:\"auto\",style:{paddingTop:10,flex:1},root:[\"page1_segment\",\"page1_segment1\",\"page1_segment2\",\"page1_segment3\",\"page1_segment4\",]},page1_segment:{type:\"segment\",style:{marginTop:5,marginBottom:5,width:240,alignSelf:\"center\",borderColor:\"orange\"},selectedItemStyle:{backgroundColor:\"orange\"},textStyle:{color:\"gray\"},itemStyle:{width:80,height:26,borderLeftColor:\"orange\"}},page1_segment3:{type:\"segment\",styletype:\"2\",items:[\"国外\",\"国内\",\"xx\"],style:{borderRadius:16,overflow:\"hidden\",width:220,marginLeft:20,backgroundColor:\"rgb(43,62,77)\",},itemStyle:{height:32,backgroundColor:\"transparent\"},textStyle:{color:\"white\"},selectedTextStyle:{color:\"#fff\"},selectedItemStyle:{},indicatorStyle:{height:32,borderRadius:16,backgroundColor:\"rgb(143,173,220)\"}},page1_segment1:{type:\"segment\",styletype:\"2\",items:[\"精选\",\"军事\",\"纪录片\",\"动漫\",\"电影\",\"电视剧\",\"综艺\",\"推荐\"],style:{borderColor:\"#ccc\"},selectedTextStyle:{color:\"red\"},textStyle:{fontSize:13,color:\"gray\",},indicatorStyle:{backgroundColor:\"rgb(108, 170, 255)\"},itemStyle:{width:60,height:34,}},page1_segment2:{type:\"segment\",styletype:\"2\",items:[\"精选\",\"军事\",\"纪录片\",\"动漫\",\"电影\",\"电视剧\",\"综艺\",\"推荐\"],style:{borderColor:\"#ccc\"},selectedTextStyle:{color:\"red\"},textStyle:{fontSize:13,color:\"gray\",backgroundColor:\"transparent\"},indicatorStyle:{top:5,borderRadius:20,left:0,height:26,borderWidth:1,borderColor:\"red\",borderStyle:\"solid\",overflow:\"hidden\",backgroundColor:\"transparent\"},itemStyle:{width:60,borderRadius:20,height:34,}},page1_segment4:{type:\"segment\",styletype:\"2\",items:[\"快的\",\"出租车\",\"顺风车\",\"试驾\",\"代驾\",\"顺风车\",\"专车\",\"巴士\"],style:{borderColor:\"#ccc\"},selectedTextStyle:{color:\"#ff7600\",fontSize:13},textStyle:{fontSize:13,color:\"gray\",backgroundColor:\"transparent\"},indicatorStyle:{top:5,borderRadius:20,left:0,height:26,borderWidth:1,borderColor:\"#eee\",borderStyle:\"solid\",overflow:\"hidden\",backgroundColor:\"#fff\"},itemStyle:{width:60,borderRadius:20,height:34,}},}}","setting":"{type:\"pageview\",root:[\"header\"],style:{\"backgroundColor\":\"#fff\"},components:{header:{type:\"header\",root:[\"headertitle\"],style:{height:52,justifyContent:\"center\",alignItems:\"center\",backgroundColor:\"rgb(18,181,242)\"}},headertitle:{type:\"text\",text:\"设置\",style:{fontSize:18,color:\"#fff\"}},}}"},"plugins":{"app":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper,this.app_repeat_itemclick=function(e){this.pageview.Go(\"huxiaozhongMiddlePage\",e.rowData)}}","commonlistpage":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper}","drawlayout":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper}","goodsDetail":"function logic(i){this.pageview=i.pageviewInstance,this.LogicHelper=i.LogicHelper,this.退出_click=function(){this.pageview.goBack()}}","home":"function logic(i){this.pageview=i.pageviewInstance,this.LogicHelper=i.LogicHelper,this.listview_rowclick=function(){this.pageview.Go(\"goodsdetail\",{goodsid:params.rowData.id})},this.page1_text1_click=function(){this.pageview.Go(\"segmentDemo\",{})},this.goToListViewBtn_click=function(){this.pageview.Go(\"listviewDemo\",{})},this.headerLeftIcon_click=function(){this.pageview.ownerPage.openDrawer()}}","listviewDemo":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper,this.headerLeftIcon_click=function(){this.pageview.goBack()}}","my":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper}","segmentDemo":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper,this.headerLeftIcon_click=function(){this.pageview.goBack()}}","setting":"function logic(e){this.pageview=e.pageviewInstance,this.LogicHelper=e.LogicHelper}"}}