import React, { Component } from 'react';
import {
  View,ScrollView,
  StyleSheet,TouchableOpacity,LayoutAnimation,
  Text,WebView
} from 'react-native';import Immutable from 'immutable';
import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';
import Base from './Base';

var styles = {
  style:{
    position:"absolute",
    top:50,
    bottom:150,
    left:0,
    right:0,
  }
}
var WEBVIEW_REF = "xxxwebview";
class xzWebView extends Base {
  constructor(props) {
    super(props)
    this.hideBar = this.hideBar.bind(this);
    this.showBar = this.showBar.bind(this);
    this.goBack = this.goBack.bind(this);
    this.close = this.close.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {
      isShowBar:false
    };
  }
  clickHandle(){
    this.props.page_view.fireAction(this.config,{sender:this})
  }
  showBar(){
    this.setState({isShowBar:true});
  }
  hideBar(){
    this.setState({isShowBar:false});
  }
  // shouldComponentUpdate(nexpros){
  //   // return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  // }
  componentWillUpdate() {
    // LayoutAnimation.easeInEaseOut();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  goBack() {
     this.refs[WEBVIEW_REF].goBack();
  }
  refresh(){
    this.refs[WEBVIEW_REF].reload();
  }

  close(){
    this.props.page_view.goBack();
  }
  baseRender() {
    var styles = StyleHelper.process(this.config.style);
    var barHeight = this.state.isShowBar?42:0;
    return (
     <View style={{flex:1,flexDirection:"column"}}>
      <WebView
          ref={WEBVIEW_REF}
          source={{uri: this.config.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          bounces={false}
          // onNavigationStateChange={this.onNavigationStateChange}
          // onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        />
      {
        !this.state.isShowBar&&
        <TouchableOpacity activeOpacity={1} onPress = {this.showBar} style={{position:'absolute',width:54,height:54,
         shadowColor: "#000000",
         shadowOpacity: 0.8,
         shadowRadius: 2,
         shadowOffset: {
           height: 1,
           width: 0
         },borderRadius:27,right:10,bottom:45,backgroundColor:'rgba(18, 181, 242,.6)'}}/>
      }
      <View style={{height:barHeight,paddingLeft:20,paddingRight:20,backgroundColor:"gray",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <Text onPress={this.goBack} style={{color:"white",fontSize:15}}>后退</Text>
        <Text onPress={this.close} style={{color:"white",fontSize:15}}>关闭</Text>
        <Text onPress={this.refresh} style={{color:"white",fontSize:15}}>刷新</Text>
        <Text onPress={this.hideBar} style={{color:"white",fontSize:15}}>隐藏</Text>
        <Text style={{color:"white",fontSize:15}}>更多</Text>
      </View>
  </View>);
  }
}
module.exports = xzWebView;
