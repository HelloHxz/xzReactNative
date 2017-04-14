import React, { Component } from 'react';
import Base from './Base';
import {
  View,ScrollView,
  StyleSheet,TouchableOpacity,
  Text
} from 'react-native';
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';

class xzButton extends Base {
  constructor(props) {
    super(props)
  }
  clickHandle(){
    var methodName = this.props.com_ref+"_click";
    var clickMethod = this.props.page_view.plugin[methodName];
    if(clickMethod){
       requestAnimationFrame(()=>{
        clickMethod.call(this.props.page_view.plugin,this,{});
     });
    }
  }
  shouldComponentUpdate(nexpros){
    return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  }
  
  baseRender() {
    var styles = StyleHelper.process(this.config.style);
    var textStyle = StyleHelper.process(this.config.textStyle);
    var text = this.config.text||"";
    return (<TouchableOpacity  activeOpacity={.8} onPress={()=>{
      this.clickHandle()
    }} style={styles}><Text style={textStyle}>{text}</Text></TouchableOpacity>);
  }
}
module.exports = xzButton;
