/**

 */
'use strict';

import React, { Component,createElement } from 'react';

import  {
  ScrollView,
  StyleSheet,
  Text,View,
  TouchableHighlight,
} from 'react-native';

import Immutable from 'immutable';


import DrawerLayout from '../components/DrawerLayout';


import * as Helper from '../common/utils'


import * as StyleHelper from '../common/styleHelper';

import { connect }            from 'react-redux';
import * as pagesBridge from "../bridges/pageConfigBridge";

import {getMapStateAndMapDispatch} from '../common/containerCommon';

import * as LogicHelper from '../logicHelper/index';

import Toast from '../components/Toast/Toast'
import PopPage from './popPageView'

class xzPageView extends React.Component {
  constructor(props, context) {
    super(props, context);
    var _this = this;
    this.pageKey= props.pageviewkey;
    this.pagename= props.pageviewkey;
    this.params = props.params||{};
    this.ctl_with_datasource={};
    this.hidePopLayout = this.hidePopLayout.bind(this);
    this.page_state={};
    this.pagesBridge = pagesBridge;
    this.plugin = pagesBridge.getPluginByPageKey(props.pageviewkey,{pageviewInstance:this,LogicHelper:LogicHelper});
    var needRenderDrawerLayout = false;

    this.drawLayoutInfo  = props.page_state.get("drawlayout");
    this.disabledDrawerLayoutTouch = true;
    this.isDrawerLayout = false;
    this.ownerPage = props.owner_page;
    if(this.drawLayoutInfo){
      this.isDrawerLayout = true;
      this.drawLayoutInfo = this.drawLayoutInfo.toJS();
      this.drawLayoutPageConfig = pagesBridge.getPageConfigByPageKey(this.drawLayoutInfo.key);
      this.disabledDrawerLayoutTouch = this.drawLayoutInfo.disabledTouch?true:false;
      if(this.drawLayoutPageConfig){
        needRenderDrawerLayout = true;
      }else{
       
      }
    }

    this.state={
      needRenderDrawerLayout:needRenderDrawerLayout,
      pageRenderSeed:0
    }
    this.extendsRefs={};

    this.extendCtlsDict = {};// popover  poplayout dialog

    this.popoverInitTargetDict = {};

    
  }

  componentDidMount(){
    var _this = this;

  }

  componentWillMount() {
  }

  componentWillUnMount(){
    this.plugin = null;
  }



  componentWillReceiveProps(pr){
  }

  shouldComponentUpdate(nextProps, nextState){
    return !Immutable.is(this.props.page_state,nextProps.page_state)||nextState.needRenderDrawerLayout!==this.state.needRenderDrawerLayout||nextState.pageRenderSeed!==this.state.pageRenderSeed;
  }

  

  Go(pagename,params){
    this.props.rootNav.Go({to:pagename,params:params},this);
  }

  Replace(pagename,params){
    this.props.rootNav.Replace({to:pagename,params:params},this);
  }
  goBack(){
    if(this.ownerPage){
      this.ownerPage.hidePage(this.pageKey);
    }else{
      this.props.rootNav.goBack(null,this);
    }
  }

  openDrawer(){
    var drawerlayout = this.refs.drawerlayout;
    if(drawerlayout){
      drawerlayout.openDrawer();
    }
  }


  closeDrawer(){
    var drawerlayout = this.refs.drawerlayout;
    if(drawerlayout){
      drawerlayout.closeDrawer();
    }
  }

  Toast(str,options){
    var defaultProps = {
        visible: false,
        duration: 2000,
        animation: true,
        shadow: false,
        position: 0,
        delay: 0,
        hideOnPress: true
    };
    options = options||{};
    if(options.position==="botom"){
      options.position = Toast.positions.BOTTOM;
    }else if(options.position==="top"){
      options.position = Toast.positions.TOP;
    }else{
      options.position = Toast.positions.CENTER;
    }
    options = Object.assign(defaultProps,options);
    Toast.show(str,options);
  }

  showPopover(com_key,targetComponent){
   
    var Ctl = this.extendsRefs["popover_"+com_key];
    this.popoverInitTargetDict[com_key] = targetComponent;
    if(!Ctl){
      var pageRenderSeed = this.state.pageRenderSeed+1;
      this.extendCtlsDict["popover_"+com_key] = Helper.getComponent(com_key,this,null,null);
      this.setState({pageRenderSeed:pageRenderSeed});
     
    }else{
       Ctl.show(targetComponent)
    }
  }

  popoverHadInit(com_key){
    var  Ctl = this.extendsRefs["popover_"+com_key];
    Ctl.show(this.popoverInitTargetDict[com_key]);
  }

  hidePopover(com_key){

  }

  showPopLayout(com_key){
    var Ctl = this.extendsRefs["poplayout_"+com_key];
    if(!Ctl){
      var pageRenderSeed = this.state.pageRenderSeed+1;
       this.extendCtlsDict["poplayout_"+com_key] = Helper.getComponent(com_key,this,null,null);
      this.setState({pageRenderSeed:pageRenderSeed});
    }else{
      Ctl.show();
    }
  }

  hidePopLayout(com_key){
    var Ctl = this.extendsRefs["poplayout_"+com_key];
    if(Ctl){
      Ctl.hide();
    }
  }

  showPage(pagekey,options){
    options=options||{};
    var Ctl = this.extendsRefs["showpage_"+pagekey];
    if(!Ctl){
      var pageRenderSeed = this.state.pageRenderSeed+1;
      this.extendCtlsDict["showpage_"+pagekey] =(<PopPage {...options} key={"showpage_"+pagekey}  pageviewkey={pagekey} page_view={this}></PopPage>);
      this.setState({pageRenderSeed:pageRenderSeed});
    }else{
      Ctl.show();
    }
  }

  hidePage(pagekey){
    var Ctl = this.extendsRefs["showpage_"+pagekey];
    if(Ctl){
      Ctl.close();
    }
  }

  renderPageAsDrawerLayout(styles,Page){

    var DrawerLayoutPage  = pageviewCreator(this.drawLayoutInfo.key);
    var navigationView = (
        <DrawerLayoutPage owner_page={this} com_ref={this.drawLayoutInfo.key} pageviewkey={this.drawLayoutInfo.key}  navprops={this.props.navprops} rootNav={this.props.rootNav}/>
    );
   return (
       <DrawerLayout
        ref = {"drawerlayout"}
        key = {"drawerlayout"}
        drawerWidth={300}
        disabledTouch={this.disabledDrawerLayoutTouch}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        {Page}
      </DrawerLayout>
    );

  }

  render() {
    this.immu_page_state=this.props.page_state;
    this.page_state = this.props.page_state.toJS();
    var styles = StyleHelper.process(this.page_state.style);
    styles.flex = 1;
    
    if(this.props.page_width){
      styles.width = this.props.page_width;
    }
    var extendCtls = [];
    for(var key in this.extendCtlsDict){
      extendCtls.push(this.extendCtlsDict[key]);
    }
    var Page = (
        <View key={this.props.com_ref} style={styles}>
          {Helper.getLayout({
            root:this.page_state.root,
            pageInstance :this,
            rowInstance:null })} 
          {extendCtls}
        </View>
    );
    if(this.state.needRenderDrawerLayout===true){
      return this.renderPageAsDrawerLayout(styles,Page);
     }

     if(this.isDrawerLayout){
        // 本来可以直接返回 Page 但是内部的元素会render两次不能触发diff比较
        return (<DrawerLayout
          ref = {"drawerlayout"}
          key = {"drawerlayout"}
          drawerWidth={300}
          disabledTouch={this.disabledDrawerLayoutTouch}
          drawerPosition={DrawerLayout.positions.Left}
          renderNavigationView={() => null}> 
          {Page}
        </DrawerLayout>);
     }else{
        return Page;
     }
  
  }
}

var PageViewDict={};

export function pageviewCreator (pagename) {
  if(!PageViewDict[pagename]){
    var R = getMapStateAndMapDispatch(pagename);
    PageViewDict[pagename]=connect(R.mapStateToProps, R.mapDispatchToProps)(xzPageView);
  }
  return PageViewDict[pagename];

}
