function logic(config){
	var _this = this;
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.top_repeat_itemclick = function(sender){
  		_this.pageview.Toast(sender.rowData.label);
  	};
 }
