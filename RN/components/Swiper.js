
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,View,Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Base from './Base';



import Dimensions from 'Dimensions';

import Swiper from './SwiperDefault';

var {height, width} = Dimensions.get('window');

import * as Helper from '../common/utils';

import * as styleHelper from '../common/styleHelper';

var styles={
  style:{
    height:160
  }
}
class xzSwiper extends Base {
  constructor(props) {
    super(props)
    this.scrollEnd = this.scrollEnd.bind(this);
  }

  componentDidMount(){
      // this.refs.scrollView.scrollResponderScrollTo({x:width*2,y:0,animated:true});
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   return this.props.config!=nextProps.config;
  // }
  componentWillReceiveProps(props){
  }

  scrollEnd(e){
    // alert("s");
    console.log(e.nativeEvent.contentOffset.x);
  }

  baseRender() {
    // bounle.style.transform=[
    //   { translateX:100 },{translateY:100}
    // ];

   var imgArr = ['https://ezone.upesn.com/project/web/imgs/logo.png',
        "http://121.42.30.191:9080/approve/web/imgs/logo.png?v=1",
        "https://facebook.github.io/react/img/logo_og.png"];
    var imageViews = [];
    for(var i=0,j=imgArr.length;i<j;i++){
      imageViews.push(
          <Image key={i} style={{width:width,height:styles.style.height}} resizeMode='cover' source ={{uri:imgArr[i]}}/>
      );
    }
    return (
          <Swiper
          height={160}
            ref="scrollView"
            >
            {imageViews}
          </Swiper>
          );

  }
}
module.exports = xzSwiper;
