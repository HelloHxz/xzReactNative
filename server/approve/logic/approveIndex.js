function logic(config){
	var _this = this;
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.leftBackIcon_click = function(sender,params){
  		_this.pageview.goBack();
  	};
  	this.search_input_click=function(sender,params){
  		this.pageview.showPage("approveSearch");
  	};
 }