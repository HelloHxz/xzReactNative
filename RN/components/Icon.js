import React, { Component } from 'react';
import {
  StyleSheet,
  Text,View,
  TouchableOpacity
} from 'react-native';
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import Base from './Base';

import * as styleHelper from '../common/styleHelper';

class xzIcon extends Base {
  constructor(props) {
    super(props)
    this.hasClick = false;
    this.isSelected = false;
    this.clickHandle = this.clickHandle.bind(this);
    var methodName = this.props.com_ref+"_click";
    var clickMethod = this.props.page_view.plugin[methodName];
    if(clickMethod){
      this.hasClick = true;
    }
  }

  clickHandle(){
    var methodName = this.props.com_ref+"_click";
    var clickMethod = this.props.page_view.plugin[methodName];
    if(clickMethod){
      clickMethod.call(this.props.page_view.plugin,this,{});
    }    
  }

  shouldComponentUpdate(nexpros){
    return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  }
 

  baseRender() {
      var pc = this.config ;
      var text = pc.text||"";
      var styles = pc.style||{};
      var textStyle = pc.textStyle;
      var iconStyle = pc.iconStyle||{};
      var textPos = pc.textPos||"right";
      var icon = pc.icon || pc.font||"";
      var iconArr = icon.split("_");
    
      if(iconArr.length===2){
        icon = iconArr[1];
        iconStyle.fontFamily = iconArr[0];

      }

      var child = [];

      
      if(this.config.isSelected){
        iconStyle =Object.assign(iconStyle,pc.iconSelectedStyle||{});
        textStyle =Object.assign(textStyle,pc.textSelectedStyle||{});
        if(pc.selectedicon){
          icon = pc.selectedicon;
        }
      }
      
      if(icon!=""){
        var outStyle = {};
        if(iconStyle.justifyContent){
          outStyle.justifyContent = iconStyle.justifyContent;
          delete iconStyle.justifyContent;
        }
        if(iconStyle.width){
          outStyle.width = iconStyle.width;
          delete iconStyle.width;
        }
         if(iconStyle.borderRadius){
          outStyle.borderRadius = iconStyle.borderRadius;
          delete iconStyle.borderRadius;
        }
         if(iconStyle.backgroundColor){
          outStyle.backgroundColor = iconStyle.backgroundColor;
          delete iconStyle.backgroundColor;
        }
        
        
        if(iconStyle.height){
          outStyle.height = iconStyle.height;
          delete iconStyle.height;
        }
        if(iconStyle.alignItems){
          outStyle.alignItems = iconStyle.alignItems;
          delete iconStyle.alignItems;
        }
        child.push(<View style={outStyle} key={this.props.com_ref+'icon'}><Text style={styleHelper.process(iconStyle)}>{String.fromCharCode(parseInt(icon, 16))}</Text></View>);
      }
      if(text!=""){
        child.push(<Text numberOfLines={1} key={this.props.com_ref+'text'} style={styleHelper.process(textStyle)}>{text}</Text>);
      }
      if(textPos=="left" || textPos=="top")
      {
        child = child.reverse();
      }
      if(textPos == "top" || textPos =="bottom"){
        styles["flexDirection"] = "column";
      }else{
        styles["flexDirection"] = "row";
      }
      if(!styles.justifyContent){styles.justifyContent="center";}
      if(!styles.alignItems){styles.alignItems="center";}

      if(!this.hasClick){
        return (<View style={styleHelper.process(styles)}>{child}</View>);
      }
      var ao = this.props.tabclick?1:0.3;
      return (
        <TouchableOpacity ref={(c) => this.refInstance = c} activeOpacity={ao} style={[styleHelper.process(styles)]} onPress={()=>{
            this.clickHandle()
          }}>
        {child}</TouchableOpacity>);
  }
}
module.exports = xzIcon;
