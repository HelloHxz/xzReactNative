function logic(config){
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.退出_click = function(){
  		this.pageview.goBack();
  	}
}