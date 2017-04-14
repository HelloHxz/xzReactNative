
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,TouchableOpacity
} from 'react-native';

import Base from './Base';

import Immutable from 'immutable';
import * as Helper from '../common/utils';

import * as StyleHelper from '../common/styleHelper';
class xzText extends Base {
  constructor(props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle(){
		this.props.page_view.fireAction(this.config,{sender:this})
  }

  shouldComponentUpdate(nexpros){
    return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  }

  baseRender() {
    var text =this.config.text;

    var bounle = {text:text,style:this.config.style||{}};

    if(this.config.onClick){
      return (<TouchableOpacity onPress={()=>{this.clickHandle()}}><Text style={StyleHelper.process(bounle.style)}>{bounle.text}</Text></TouchableOpacity>);
    }
    return (<Text style={StyleHelper.process(bounle.style)}>{bounle.text}</Text>);
  }
}
module.exports = xzText;
