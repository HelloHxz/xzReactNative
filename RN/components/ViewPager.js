import React, { Component } from 'react';
import  {
  View,
  StyleSheet,ScrollView
} from 'react-native';
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import Swiper from './SwiperDefault';

import Base from './Base';

import {pageviewCreator} from "../container/pageview"

import * as pagesBridge from "../bridges/pageConfigBridge";
import * as StyleHelper from '../common/styleHelper';


class PageItem extends Base {
  constructor(props) {
    super(props)
    this.pagekey = props.pagekey;

    this.hadRender = false;
    this.pageConfig = pagesBridge.getPageConfigByPageKey(this.pagekey);

  }

  componentWillReceiveProps(nextPros){

  }

  baseRender() {
    	if((this.props.parent.curselectedKey === this.pagekey)||this.hadRender===true){
  		var PageInstance  = pageviewCreator(this.pagekey);
      this.hadRender = true;
	    return (
	        <PageInstance page_width={Helper.ScreenSize.width}  com_ref={this.pagekey} 
          key={this.pagekey}
	        pageviewkey={this.pagekey}  
          owner_page={this.props.page_view}
	        navprops={this.props.page_view.props.navprops} 
	        rootNav={this.props.page_view.props.rootNav}/>
	    );
    }else{
    	return <View style={{width:Helper.ScreenSize.width}}/>;
    }
    
  }
}

class ViewPager extends React.Component {
  constructor(props) {
    super(props)
    this.curselectedKey = "";

  }

  componentWillReceiveProps(props){
    var newconfig = props.immu_config.toJS();
    var newpageOrderArr = newconfig.pageOrder||[newconfig.selectedKey];
    var curselectedKey = newconfig.selectedKey;
    var index = newpageOrderArr.indexOf(curselectedKey);
    setTimeout(()=>{
      this.refs.swiper.scrollTo({x:index*Helper.ScreenSize.width,animated:false});
    },0);
  }
  render() {
  	this.config = this.props.immu_config.toJS();
  	this.pageOrderArr = this.config.pageOrder||[this.config.selectedKey];
    this.curselectedKey = this.config.selectedKey;
    var index = this.pageOrderArr.indexOf(this.curselectedKey);
    this.index = index;
    var styles = this.config.style;
    var pages = [];
    for(var i=0,j = this.pageOrderArr.length;i<j;i++){
    	var pageKey = this.pageOrderArr[i];
    	pages.push(<PageItem index={i} key={pageKey} parent={this} page_view={this.props.page_view} pagekey = {pageKey}/>);
    }
    return (
      <ScrollView horizontal={true} key={this.props.com_ref+"view"} style={styles} ref={"swiper"} showsHorizontalScrollIndicator={false} scrollEnabled={false}>
    	 {pages}
      </ScrollView>);
  }
}
module.exports = ViewPager;
