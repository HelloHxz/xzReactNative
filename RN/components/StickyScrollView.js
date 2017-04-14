import React, { Component } from 'react';
import {
  StyleSheet,View,Image,
  Text,TouchableOpacity,ScrollView,
  Switch
} from 'react-native';
var Dimensions = require('Dimensions');
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import Base from './Base';

import * as StyleHelper from '../common/styleHelper';

class xzStickyScrollView extends Base {
  constructor(props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this);
    this.state = {
      value:props.value||false
    }
  }
  clickHandle(){
		this.props.page_view.fireAction(this.config,{sender:this})
  }

  shouldComponentUpdate(nexpros){
    return nexpros.value==this.props.value||!Immutable.is(nexpros.immu_config, this.props.immu_config);
  }

  baseRender() {
    var text =this.props.text||this.config.text;
    var bounle = {text:text,style:this.config.style||{}};

    return ( <ScrollView stickyHeaderIndices={[1]} style={{flex:1,flexDirection:"column"}}>
        <View style={{height:200,backgroundColor:"yellow"}}></View>
        <View style={{height:100,backgroundColor:"rgba(23,23,23,.4)"}}></View>
        <View style={{height:30,backgroundColor:"orange"}}><Text>sdasdasdasdasdasd</Text></View>
        <View style={{height:600,backgroundColor:"yellow"}}></View>
      </ScrollView>);
  }
}
module.exports = xzStickyScrollView;
