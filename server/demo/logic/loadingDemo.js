function logic(config){
	var _this = this;
	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.headerLeftIcon_click = function(){
  		this.pageview.goBack();
  	};
  	this.body_init = function(sender,params){
  		this.body = sender;
  	};
  	this.普通Loading_click = function(){
  		this.body.showLoading({wrapperStyle:{marginTop:200}});
  		setTimeout(function() {
  			_this.body.hideLoading();
  		}, 2000);
  	};
  	this.成功提示Loading_click = function(){
  		this.body.showLoading({wrapperStyle:{marginTop:200}});
  		setTimeout(function() {
  			_this.body.hideLoading({resultText:"操作成功"});
  		}, 2000);
  	};
  	this.全屏幕Loading_click = function(){
  		this.body.showLoading({fullScreen:true,wrapperStyle:{width:140}});
  		setTimeout(function() {
  			_this.body.hideLoading({resultText:"操作成功"});
  		}, 2000);
  	};
  	this.自定义结果提示Loading_click = function(){
		this.body.showLoading({fullScreen:true,wrapperStyle:{width:140}});
  		setTimeout(function() {
  			_this.body.hideLoading({resultText:"滴滴答滴滴",resultIcon:"icofont_efaf",resultIconStyle:{color:"orange",fontSize:42}});
  		}, 2000);
  	};
}