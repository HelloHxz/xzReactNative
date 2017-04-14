class page1 {
  constructor(config){
    this.pageview = config.pageviewInstance;
  }

 
 
  firstRepeat_itemclick(sender,params){
    this.pageview.props.actions["modifyProperty"]({
      page:this.pageview.pagename,
      component:"viewpager",
      selectedKey:sender.rowData.page
     });
  }

 
 
}

module.exports = page1;
