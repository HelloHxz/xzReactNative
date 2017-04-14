

import React, { Component } from 'react';
import Base from './Base';
import {
  View,ScrollView,RefreshControl,Text,Modal,
  StyleSheet,TouchableHighlight,ActivityIndicator
} from 'react-native';
import Immutable from 'immutable';
import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';

import Dimensions from 'Dimensions';


var LoadingStyle=Helper.createStyle({
  wrapper:{
    position:"absolute",
    top:0,
    left:0,
    right:0,
    backgroundColor:"rgba(0,0,0,.1)",
    bottom:0,
    alignItems:"center",
  },
  iconWrapper:{
    width:50,
    height:36,
    justifyContent:"center",
    alignItems:"center"
  },
  innerWrapper:{
    width:110,
    height:92,
    borderRadius:12,
    backgroundColor:"rgba(0,0,0,.8)",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  indicator:{
  },
  resultIconStyle:{
    fontSize:33,
    color:"#fff",
    textAlign:"center"
  },
  fullScreenWrapper:{
    flex:1,
    backgroundColor:"rgba(0,0,0,.1)",
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    color:"#fff",
    marginTop:8,
    textAlign:"center"
  }
});

class Loading extends Base{
  constructor(props){
    super(props);
    props.parent.loadingCtl = this;
    options = props.options||{};
    this.state = {
      show:true,
      fullScreen:options.fullScreen,
      wrapperStyle:options.wrapperStyle||{},
      status:"loading",//success
      resultText:"",
      resultIconStyle:{},
      text:options.text||"加载中",
      resultIcon:"icofont_efab",
    }
  }
  hide(options){
    options=options||{resultText:""};
    if(options.resultText!==""){
      this.setState({status:"success",resultIconStyle:options.resultIconStyle||{},resultText:options.resultText,resultIcon:options.resultIcon||this.state.resultIcon});
      setTimeout(()=>{
        this.setState({show:false,status:"loading"});
        options.callBack && options.callBack();
      },options.duration||800);
    }else{
      this.setState({show:false});
      options.callBack && options.callBack();
    }
  }
  show(options){
    options=options||{};
    this.setState({
      show:true,
      status:"loading",
      wrapperStyle:options.wrapperStyle||{}, 
      fullScreen:options.fullScreen,
      resultIcon:"icofont_efab"
    });
  }
  renderIcon(){
    if(this.state.status==="loading"){
      return (<ActivityIndicator color={"#fff"} style={LoadingStyle.indicator}/>);
    }else{
      var iconInfo = this.state.resultIcon;
      var iconArr = iconInfo.split("_");
      var iconFamily = "icofont";
      var icon = "efab";
      if(iconArr.length===2){
        iconFamily = iconArr[0];
        icon = iconArr[1];
      }
      var iconStyle = {fontFamily:iconFamily};
      return (<Text style={[iconStyle,LoadingStyle.resultIconStyle,this.state.resultIconStyle]}>{String.fromCharCode(parseInt(icon, 16))}</Text>);
    }


  }
  renderChild(){
    if(this.state.fullScreen===true){
      delete this.state.wrapperStyle["marginTop"];
    }
    return (<View style={[LoadingStyle.innerWrapper,this.state.wrapperStyle]}>
          <View style={LoadingStyle.iconWrapper}>{this.renderIcon()}</View>
          <Text style={LoadingStyle.text}>{this.state.status==="loading"?this.state.text:this.state.resultText}</Text>
        </View>);
  }
  renderFullScreenLoading(){
    return (<Modal transparent={true}>
      <View style={LoadingStyle.fullScreenWrapper}>
       {
        this.renderChild()
     }</View></Modal>);
  }
  baseRender(){
    if(this.state.show===false){
      return null;
    }
    if(this.state.fullScreen===true){
      return this.renderFullScreenLoading();
    }
     return (<View style={[LoadingStyle.wrapper]}>
     {
        this.renderChild()
     }
      </View>);
  }
}



class xzView extends Base {
  constructor(props) {
    super(props)
    this._scrollEnd = this._scrollEnd.bind(this);
    this.state={
      viewRenderSeed:0,
      hasShowExtendCtl:false
    }
    this.extendsCtls = [];
  }
  _scrollEnd(e){
  }
  _onRefresh(){}

  hideLoading(options){
     if(this.loadingCtl){
      this.loadingCtl.hide(options);
     }
     this.setState({
      hasShowExtendCtl:false
     })
  }
  showLoading(ops){
     var viewRenderSeed = this.state.viewRenderSeed+=1;
     if(!this.loadingCtl){
        this.extendsCtls.push(<Loading options={ops} parent={this}/>);
     }else{
        this.loadingCtl.show(ops);
     }
     this.setState({
      viewRenderSeed:viewRenderSeed,
      hasShowExtendCtl:true
     });
  }

  renderChild(){
    return   Helper.getLayout({
            root:this.config.root,
             parent:this,
            pageInstance :this.props.page_view,
            rowInstance:this.props.row_data
          });
  }
  renderExtendChild(){
    return this.extendsCtls;
  }

  baseRender() {
    var styles = this.config.style;
    var scrollEnabled = styles.overflow==="auto";
    styles = StyleHelper.process(styles);

    if(scrollEnabled){
      // stickyHeaderIndices={[1]} 让第几个元素滚动固定
      return <ScrollView
        scrollEnabled = {this.state.hasShowExtendCtl===false}
        onMomentumScrollEnd={this._scrollEnd}
        onLayout={(e)=> {
          // console.log(e.nativeEvent.layout.y);
          // console.log(e.nativeEvent.layout.height);
          //Helper.getLayout(this.config.root,this.props.page_view,this.props.row_data)
         }}
         style={styles}
         >
        {
         this.renderChild()
        }{
         this.renderExtendChild()
        }
         <View
            onLayout={(e)=> {}}
            style={{height:0}}>
         </View>
        </ScrollView>;
    }

    return <View style={styles}>
        {
         this.renderChild()
        }{
         this.renderExtendChild()
        }
        </View>;
  }
}
module.exports = xzView;
