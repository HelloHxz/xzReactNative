function logic(config){
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.app_repeat_itemclick = function(sender){
  		this.pageview.Go("huxiaozhongMiddlePage",sender.rowData);
  	};
}