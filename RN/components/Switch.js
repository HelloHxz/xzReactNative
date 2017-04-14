import React, { Component } from 'react';
import {
  StyleSheet,View,Image,
  Text,TouchableOpacity,
  Switch
} from 'react-native';
var Dimensions = require('Dimensions');
import Immutable from 'immutable';
import * as Helper from '../common/utils';
const window = Dimensions.get('window');
import * as StyleHelper from '../common/styleHelper';
import Base from './Base';

import ParallaxScrollView from './ParallaxScrollView';
class xzSwitch extends Base {
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
    // return (<Switch
    //   value = {this.state.value}
    //   onValueChange={(value) =>{this.setState({value: value})}}
    //   ></Switch>);
    return (<ParallaxScrollView
              style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
              renderBackground={() => <Image source={{ uri: `http://pics.sc.chinaz.com/files/pic/pic9/201605/apic20570.jpg`, width: window.width, height: 320 }}/>}
              renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
              renderStickyHeader={()=><View style={{ alignItems: 'center', width: window.width,backgroundColor:"rgb(18,181,242)",height:44 }}><Text style={{ fontSize: 25,color:"#fff" }}>huxiaozhong!</Text></View>}
              parallaxHeaderHeight={ 320 }>
            <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
          </ParallaxScrollView>);
  }
}
module.exports = xzSwitch;
