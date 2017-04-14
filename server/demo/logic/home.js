function logic(config){
      var _this = this;

	this.pageview = config.pageviewInstance;
  	this.LogicHelper = config.LogicHelper;
  	this.listview_rowclick = function(){
  		this.pageview.Go("goodsdetail",{goodsid:params.rowData.id});
  	};
  	this.page1_text1_click = function(){
  		// this.pageview.Go("segmentDemo",{});
      this.pageview.showPage("segmentDemo");
  	};
    this.弹出层按钮_click = function(){
      this.pageview.showPopLayout("poplayout");
    },
    this.page1_body_init = function(sender){
      this.pageBody = sender;
    };
    this.headerRightIcon_click = function(sender,params){
      this.pageview.showPopover("popover",sender.refInstance);
    };
  	this.goToListViewBtn_click = function(){
  		this.pageview.Go("listviewDemo",{});
  	};
  	this.headerLeftIcon_click = function(){
  		this.pageview.ownerPage.openDrawer();
      // this.pageview.Toast("这是一个Toast",{shadow:true,position:"top"});
  	}

}