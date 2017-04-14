function logic(config){
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.headerLeftIcon_click = function(){
  		
  			this.pageview.goBack();
  		
  	};
 }
