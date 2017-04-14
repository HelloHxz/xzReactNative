
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,View,
  ScrollView,UIManager,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import Base from './Base';


import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

import * as Helper from '../common/utils';

import * as styleHelper from '../common/styleHelper';
// borderTopLeftRadius:20
var styles1={
  style:{
    flexDirection:"row",
    justifyContent:"space-around",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"red",
    borderRadius:20,
    overflow:"hidden",
    marginTop:5,
    marginBottom:5,
  },
  firstItemStyle:{
  },
  lastItemStyle:{
  },
  selectedItemStyle:{
    backgroundColor:"red"
  },
  itemStyle:{
    flex:1,
    borderStyle:"solid",
    height:26,
    justifyContent:"center"
  },
  selectedTextStyle:{
    color:"#fff"
  },
  textStyle:{
    textAlign:"center"
  }
}

var styles2={
  style:{
    // borderStyle:"solid",
    // borderBottomWidth:1,
    // borderColor:"#ccc"
  },
  firstItemStyle:{

  },
  selectedItemStyle:{
  },
  itemStyle:{
    overflow:"hidden",
    height:36,
    justifyContent:"center"
  },
  selectedTextStyle:{
    color:"red",
    fontSize:15
  },
  textStyle:{
    textAlign:"center",
    fontSize:14
  },
  indicatorStyle:{
    position:"absolute",
    bottom:0,
    left:0,
    height:2,
    backgroundColor:"red"
  }
};
class xzSegment extends Base{
  constructor(props) {
    super(props)

     if (Helper.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }

    this.config = this.props.immu_config.toJS();
    this.styletype = this.config.styletype||"1";
    this.state={
      selectedIndex:props.selectedIndex||0
    }
  }

  componentDidMount(){
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   return this.props.config!=nextProps.config;
  // }
  componentWillReceiveProps(props){
  }
  change(i,e){
    if(this.styletype=="2"){
      LayoutAnimation.configureNext(LayoutAnimation.create(
            170, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity
            ), (e)=>{
            });
    }
    this.setState({"selectedIndex":i});
    var changewith = this.config.changewith;
    if(changewith){
      this.props.page_view.props.actions.modifyProperty({sender:null,selectedIndex:i,page:this.props.page_view.props.com_ref,to:changewith})
    }
  }

  processStyle(defaultStyle,config){
    for(var key in defaultStyle){
      if(config[key]){
        defaultStyle[key] =styleHelper.process({...defaultStyle[key],...config[key]});
      }
    }
    return defaultStyle;
  }

  proceeBorderRadius(styles){
     if (Helper.OS === 'android') {
        var configStyle = this.config.style||{};
        borderRadius = configStyle.borderRadius||20;
        styles.firstItemStyle.borderTopLeftRadius = borderRadius;
        styles.firstItemStyle.borderBottomLeftRadius = borderRadius;
        styles.lastItemStyle.borderTopRightRadius = borderRadius;
        styles.lastItemStyle.borderBottomRightRadius = borderRadius;
     }
     return styles;
  }

  baseRender() {
    var styles={};
    var items = this.config.items||[];
    var tabs = [];
    var borderRadius = 0;
    if(this.styletype=="1"){
      styles=this.proceeBorderRadius(Object.assign({},styles1));
    } else if(this.styletype=="2"){
      styles=Object.assign({},styles2);
    }else if(this.styletype=="3"){
      styles=this.proceeBorderRadius(Object.assign({},styles1));
    }
    styles = this.processStyle(styles,this.config);


    var ctlWidth = styles.style.width||width;

    if(!styles.itemStyle.width){
      styles.itemStyle.flex=1;
    }
    for(var i=0,j=items.length;i<j;i++){
      var itemstyle=i==0?{...styles.itemStyle,...styles.firstItemStyle}:styles.itemStyle;
      if(i===j-1){
        itemstyle ={...styles.itemStyle,...styles.lastItemStyle};
        //  if(this.props.com_ref==="page1_segment"){
        // }
      }

      if(i!==0&&this.styletype!=="2"&&items.length>2){
        tabs.push(<View key={"segsplit"+"_"+i} style={{width:1,height:styles.itemStyle.height||28,backgroundColor:styles.selectedItemStyle.backgroundColor||"red"}}></View>);
      }
      
      var itemText = items[i];
      if(i==this.state.selectedIndex){
        tabs.push(<TouchableOpacity activeOpacity={1} key={this.props.com_ref+"_"+i} style={[itemstyle,styles.selectedItemStyle]}><Text style={[styles.textStyle,styles.selectedTextStyle]}>{itemText}</Text></TouchableOpacity>);
      }else{
        tabs.push(<TouchableOpacity activeOpacity={1} onPress={this.change.bind(this,i)} key={this.props.com_ref+"_"+i} style={[itemstyle]}><Text style={[styles.textStyle]}>{itemText}</Text></TouchableOpacity>);
      }
    }

    if(this.styletype=="1"){
      return (<View style={styles.style}>{tabs}</View>);
    } else if(this.styletype=="2"){
        var itemWidth = styles.itemStyle.width||ctlWidth/items.length;

        if(styles.itemStyle.flex){
          var wrapperStyle = {...styles.style,...{flexDirection:"row"}};
          return (<View style={wrapperStyle}><View style={[styles.indicatorStyle,{width:itemWidth,left:this.state.selectedIndex*itemWidth}]}></View>{tabs}</View>);
        }else{
          return (<View style={styles.style}><ScrollView showsHorizontalScrollIndicator={false} horizontal={true}><View style={[styles.indicatorStyle,{width:itemWidth,left:this.state.selectedIndex*itemWidth}]}></View>{tabs}</ScrollView></View>);
        }
    }else if(this.styletype=="3"){
    }
    return (<View style={styles.style}>{tabs}</View>);
  }
}
module.exports = xzSegment;
