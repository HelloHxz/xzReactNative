import React, { Component } from 'react';
class Base extends React.Component {
  constructor(props) {
    super(props)
    if(props.com_ref){
      var initMethodName = props.com_ref+"_init";
      var initMethod = props.page_view.plugin[initMethodName];
      if(initMethod){
        initMethod.call(props.page_view.plugin,this,{});
      }
    }
   
    
  }

  render(){
    this.config = null;
    if(this.props.immu_config){
      this.config = this.props.immu_config.toJS();
    }
    if(this.props.com_ref){
      var beforeRenderMethodName = this.props.com_ref+"_beforerender";
      var beforeRenderMethod = this.props.page_view.plugin[beforeRenderMethodName];
      if(beforeRenderMethod){
        beforeRenderMethod.call(this.props.page_view.plugin,this,{});
      }
    }
    
    return this.baseRender();
  }
}
module.exports = Base;
