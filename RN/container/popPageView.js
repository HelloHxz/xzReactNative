import React, { Component } from 'react';

import  {
  StyleSheet,
  Text,View,Modal,Animated,Easing
} from 'react-native';
import Base from '../components/Base';


import {pageviewCreator} from "./pageview"



import Immutable from 'immutable';
import * as Helper from '../common/utils';

import * as StyleHelper from '../common/styleHelper';

const styles = StyleSheet.create({
  defaultLayoutStyle:  {
  right:0,
  top:0,
  backgroundColor:"white",
  bottom:0,
  left:0,
  position:"absolute",
}

});



class PopPageView extends Base {
  constructor(props) {
    super(props)
    props.page_view.extendsRefs["showpage_"+props.pageviewkey] = this;
    this.animateType = props.animate||"slide";
    this.state = {
      openValue: new Animated.Value(0),
      visible:true
    }
  }
  onShow(){
    if(this.animateType==="slide"){

     Animated.timing(
        this.state.openValue,
        {
          toValue: 1,
          duration:140,
          bounciness: 0, 
          easing:Easing.in(),
          restSpeedThreshold: 0.1
        }
      ).start()
    }

  }

  show(){
     this.setState({visible:true});
  }

  close(){
    if(this.animateType==="slide"){
      Animated.timing(
          this.state.openValue,
          {
            toValue: 0,
            bounciness: 0, 
            duration:200,
            easing:Easing.in(),
            restSpeedThreshold: 1
          }
        ).start(()=>{
          this.setState({visible:false});
        })
    }else{
      this.setState({visible:false});
    }
  }

  baseRender() {
    const {
      openValue
    } = this.state;
      
      var animateStyle={};
      if(this.animateType==="slide"){
        const drawerTranslateY = openValue.interpolate({
          inputRange: [0, 1],
          outputRange:[Helper.ScreenSize.height,0],
          extrapolate: 'clamp',
        });
        animateStyle={transform:[{"translateY":drawerTranslateY}]};
      }
      var pageKey = this.props.pageviewkey;
      var PageInstance = pageviewCreator(pageKey);
      var modeType = this.animateType==="fade"?"fade":"none";
      return (
        <Modal
           animationType={modeType}//none
          transparent={true}
          visible={this.state.visible}
          onShow = {()=>{
            this.onShow();
          }}
          >
          <Animated.View 
          style={[styles.defaultLayoutStyle,animateStyle]}
          >
          <PageInstance com_ref={pageKey} pageviewkey={pageKey} owner_page={this.props.page_view}/>
          </Animated.View>
          </Modal>);
  }
}
module.exports = PopPageView;
