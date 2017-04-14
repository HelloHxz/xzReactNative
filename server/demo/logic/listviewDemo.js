function logic(config){
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.headerLeftIcon_click = function(){
  		this.pageview.goBack();
  	};
  	this.jumpBtn_click = function(){
  		this.pageview.Go("app");
  	}
}