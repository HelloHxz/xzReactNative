import React, { Component } from 'react';
import {
  StyleSheet,TouchableOpacity,
  View,
  Text
} from 'react-native';
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import Base from './Base';

import * as StyleHelper from '../common/styleHelper';

class RepeatItem extends Base {
   constructor(props) {
    super(props)
  }

  clickHandle(){
     this.props.page_view.props.actions["modifyProperty"]({
      page:this.props.page_view.pagename,
      component:this.props.parent.props.com_ref,
      selectedIndex:this.props.item_index
     });
     requestAnimationFrame(()=>{
      this.props.parent.itemClickMethod.call(this.props.page_view.plugin,this,{});
     });
   
  }

  baseRender() {
    this.rowData = this.props.row_data;
    if(this.props.parent.config.selectedMode==="s"&&this.props.parent.config.selectedIndex.toString() === this.props.item_index.toString()){
      this.isSelected = true;
    }else{
      this.isSelected = false;
    }
    var activeOpacity = this.props.parent.config.activeOpacity||1;
    if(this.props.parent.itemClickMethod){
      return (<TouchableOpacity activeOpacity={activeOpacity} onPress={()=>{
      this.clickHandle()
     }}   style={this.props.item_style}>
       {
          Helper.getLayout({
            root:this.props.row_root,
            pageInstance :this.props.page_view,
            parent:this,
            rowInstance:this})
          }
   
     </TouchableOpacity>);
    }else{
      return (<View style={this.props.item_style}>
        {
          Helper.getLayout({
            root:this.props.row_root,
            pageInstance :this.props.page_view,
             parent:this,
            rowInstance:this})
          }</View>);
    }
  }
}

class repeat extends Base {
  constructor(props) {
    super(props)

    var itemClickMethodName = props.com_ref+"_itemclick";
    this.itemClickMethod = props.page_view.plugin[itemClickMethodName];
    
  }
 

  shouldComponentUpdate(nexpros){
    return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  }

  baseRender() {
    var itemsConfig  = this.config.items||[];
    var itemStyle = StyleHelper.process(this.config.itemStyle);
    var styles = StyleHelper.process(this.config.style);
    var separateStyle = this.config.separateStyle;
    var separateAreaStyle = this.config.separateAreaStyle;
    var separateAreaIndex = this.config.separateAreaIndex||[];
    var items = [];
    for(var i=0,j=itemsConfig.length;i<j;i++){
      var itemData = itemsConfig[i];
      if(!itemData.$$rowkeymark){
        itemData.$$rowkeymark = new Date()+""+i;
      }
      if(separateStyle&&i!==0&&i!==j){
        var sStyle = separateStyle;
        if(separateAreaStyle){
          if(separateAreaIndex.indexOf(i)>=0){
            sStyle =  separateAreaStyle;
          }
        }
        items.push(<View  key={"sp_"+itemData.$$rowkeymark} style={sStyle}></View>);
      }
      items.push(<RepeatItem item_index = {i} parent = {this} item_style={itemStyle} page_view={this.props.page_view} row_root={this.config.root} row_data={itemData} key={itemData.$$rowkeymark}/>);
    }
    return (<View style={styles}>{items}</View>);
  }
}
module.exports = repeat;
