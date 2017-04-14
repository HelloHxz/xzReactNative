import React, { Component } from 'react';

import  {
  StyleSheet,
  Text,View,Image,
  TouchableOpacity
} from 'react-native';
import Base from './Base';



import Immutable from 'immutable';
import * as Helper from '../common/utils';

import * as StyleHelper from '../common/styleHelper';

class xzImage extends Base {
  constructor(props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle(){
    if(this.props.tabclick){
      this.props.tabclick();
    }
		this.props.page_view.fireAction(this.config,{sender:this})
  }

  // shouldComponentUpdate(nexpros){
  //   return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  // }

  baseRender() {
      var pc = this.config ;
      var styles = StyleHelper.process(this.config.style);
      var src = this.props.src||pc.src;
      return (
        <Image
        resizeMode='cover' 
          style={styles}
          source={{uri: src}}/>);
  }
}
module.exports = xzImage;
