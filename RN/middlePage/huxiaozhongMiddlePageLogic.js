class logic {
  constructor(config){
    var _this = this;
    this.pageview = config.pageviewInstance;
    this.pageview.pagesBridge.loadBundle(this.pageview.params.url,function(bundleconfig){
      var rootPageKey = bundleconfig.root;
      setTimeout(function() {
        _this.pageview.Replace(rootPageKey);
      }, 300);

    });
  }
 
}

module.exports = logic;
