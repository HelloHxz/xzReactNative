function logic(config){
	var _this = this;
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.mid_repeat_itemclick = function(sender,params){
  		var pageName = 'segmentDemo';
      var label = sender.rowData.label;
  		if(label==='开通会员'){
  			
  		}else if(label==="Loading效果"){
        pageName = "loadingDemo";
      }else {

  			pageName = "listviewDemo";
  		}
  		_this.pageview.Go(pageName);
  		_this.pageview.ownerPage.closeDrawer();
  	}
}