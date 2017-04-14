import React, { Component } from 'react';
import {
  View,Dimensions,Platform
} from 'react-native';

import Immutable from 'immutable';



export let ScreenSize = Dimensions.get('window');
export let OS = Platform.OS;



  var keyDict={
    "w":true,
    "borderRadius":true,
    "maxHeight":true,
    "lineHeight":true,
    "line-height":true,
    "max-height":true,
    "maxWidth":true,
    "max-width":true,
    "minWidth":true,
    "min-width":true,
    "minHeight":true,
    "min-height":true,
    "fs":true,//不参与适配的fontSize
    "top":true,
    "left":true,
    "right":true,
    "bottom":true,
    "fontSize":true,
    "font-size":true,
    "width":true,
    "height":true,
    "padding":true,
    "paddingTop":true,
    "paddingRight":true,
    "paddingLeft":true,
    "paddingBottom":true,
    "padding-bottom":true,
    "padding-top":true,
    "padding-left":true,
    "padding-right":true,
    "margin":true,
    "marginTop":true,
    "marginRight":true,
    "marginLeft":true,
    "marginBottom":true,
    "margin-bottom":true,
    "margin-top":true,
    "margin-left":true,
    "margin-right":true
  };



function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("promise timeout"))
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  })
}


var baseSize = {width:375,height:667};
function isNeedConvert(str){
    return str.substring(str.length-1)=="%"||str=="auto";
  }

  function convertAdaptationValueByWidth(val){
    val = parseInt(val);
    var bl = (ScreenSize.width/baseSize.width);
    // bl = bl<1?1:bl;
    bl = bl>1.5?1.5:bl;
    if(ScreenSize.width>1000){
      bl = 1;
    }
    return parseInt((bl)*val);
  }
  function convertAdaptationValueByHeight(val){
    val = parseInt(val);
    var bl = (ScreenSize.height/baseSize.height);
    bl = bl<1?1:bl;
    bl = bl>1.5?1.5:bl;
    return parseInt((bl)*val);
  }
  function convertAdaptationValue(key,val,index,len,style){

    if(len===1){
      //fontsize width height
      if(key=="fontSize"||key=="font-size"){

        val = parseInt(val);
        var bl = (ScreenSize.width/baseSize.width);
        // bl = bl<1?1:bl;
        bl = bl>1.5?1.5:bl;
        if(ScreenSize.width>1000){
          bl = 1;
        }
        bl = bl<1?1:bl;
        return parseInt((bl)*val);
      }

      if(key=="width"||key=="left"||key=="right"||key=="maxWidth"||key=="marginLeft"||key=="marginRight"||key=="max-width"||key=="minWidth"||key=="min-width"){
        return convertAdaptationValueByWidth(val);
      }else if(key == "height"||key=="top"||key=="marginBottom"||key=="marginTop"||key=="bottom"||key=="maxHeight"||key=="max-height"||key=="lineHeight"||key=="line-height"||key=="minHeight"||key=="min-height"){
        return convertAdaptationValueByHeight(val);
      }
      return convertAdaptationValueByWidth(val);
    }
    
    return convertAdaptationValueByWidth(val);
  }
  function processStyleValue(key,val_arr,style){
    var Re = 0;
    if(val_arr.length>=1||key=="padding"||key=="margin"){
      if(!isNeedConvert(val_arr[0])){
          return parseInt(convertAdaptationValue(key,val_arr[0],0,1,style));
      }
    }
    return parseInt(val_arr[0]);
  }



var components_dict = {
    "activityindicator":require("../components/ActivityIndicator"),
    "view":require("../components/View"),
    "text":require("../components/Text"),
    "icon":require("../components/Icon"),
    "header":require("../components/Header"),
    "button":require("../components/Button"),
    "repeat":require("../components/Repeat"),
    "listview":require("../components/ListView"),
    "swiper":require("../components/Swiper"),
    "image":require("../components/Image"),
    "segment":require("../components/Segment"),
    "viewpager":require("../components/ViewPager"),
    "popover":require("../components/Popover"),
    "switch":require("../components/Switch"),
    "webview":require("../components/WebView"),
    "poplayout":require("../components/PopLayout"),
    "stickyscrollview":require("../components/StickyScrollView"),
};


function _processConfig (config,rowData) {
      for (var key in config) {
          var key_arr = key.split("_");
          if (key_arr.length == 2 && key_arr[1] == "bind") {
              var value = config[key];
              var attrName = key_arr[0];
              var val_type = typeof(value);
              if (val_type == "string") {
                  config[attrName] = getValueByPath(rowData, value.split("."));
              } else if (val_type == "object") {
                  for (var key1 in value) {
                      var attrName1 = key1;
                      var bind_val = getValueByPath(rowData, value[key1].split("."));
                      // if(bind_val){
                      config[attrName] = config[attrName] || {};
                      config[attrName][attrName1] = bind_val;
                      // }
                  }
              }
          }
      }
      return config;
  };

  function getValueByPath(data, path) {
    if (!data) {
        return null;
    }
    var r = data;
    for (var i = 0, j = path.length; i < j; i++) {
        var pathkey = path[i];
        r = r[pathkey];
        if (!r && r != 0) {
            r = null;
            break;
        }
    }
    return r;
  }


  export function createStyle(style){
    return processStyle(style);
  }

  export function processStyle(style){
      style = Object.assign({},style);
      for(var key in style){
        var val = style[key].toString();

        var key_arr = key.split("_");
        if(key_arr.length===2){
          delete style[key];
          if(key_arr[0]==="android"||key_arr[0]==="ios"||key_arr[0]==="web"){
            if(key_arr[0]!==OS){
              continue;
            }
            key = key_arr[1];
          }else{
            continue;
          }
        }

        if(keyDict[key]){
          var val_arr = val.split(" ");
          if(key=="fs"){
            style.fontSize= parseInt(val);
            delete style.fs;
          }else if(key=="w"){
            delete style.width;
            delete style.height;
            style.height = style.width = convertAdaptationValueByWidth(style.w);
            delete style.w;
          }else{
            style[key] = processStyleValue(key,val_arr,style);
          }
        }
      }
      return style;
  }

  export function processPageConfig(pageConfig) {
      if(pageConfig.style) {
        pageConfig.style = processStyle(pageConfig.style,baseSize);
      }
      if(pageConfig.components){
        for(var key in pageConfig.components){
          var com_config = Object.assign({},pageConfig.components[key]);
          for(var attrKey in com_config){
            if(attrKey.length>=5){
              if(attrKey.substring(attrKey.length-5).toUpperCase()=="STYLE"){
                com_config[attrKey] = processStyle(com_config[attrKey],baseSize);
              }
            }
          }
          pageConfig.components[key] = com_config;
        }
      }
      // if(pageConfig.haha===true){
      // console.log(pageConfig);
      // }
      return pageConfig;
    }
    


function bindRowData (component_config,rowData){

  if(rowData){
    return Immutable.fromJS(_processConfig(component_config,rowData));
  }
  return Immutable.fromJS(component_config);
}



function setSelected(component_config,rowInstance){
  if(component_config.disableParentSelect !== true){
    if(rowInstance){
      component_config.isSelected = rowInstance.isSelected;
    }
  }
}


 // root:this.page_state.root,
 //            pageInstance :this,
 //            rowInstance:null
export function getLayout (params) {
	
	var rootArray = params.root;
	var pageViewInstance = params.pageInstance||params.pageViewInstance;
	var rowInstance = params.rowInstance;
 var Re=[];
 if(!rootArray){return Re;}
 if(!(rootArray instanceof Array)){
 	alert("getLayout 方法参数错误 rootArray必须为数组 "+JSON.stringify(rootArray));
 }
 for(var i =0,j=rootArray.length;i<j;i++){
   var child_id = rootArray[i];
   var child_cfg = pageViewInstance.page_state.components[child_id];
   if(!child_cfg){continue;}
   var child_obj = getComponent(child_id,pageViewInstance,rowInstance);
   Re.push(child_obj);
 }
 return Re;
}


export function getComponent(_ref,pageViewInstance,rowInstance,extendProps){
  var rowData = null;
  if(rowInstance){
    rowData = rowInstance.rowData;
  }
  var pageState = pageViewInstance.page_state;
  var component_config = pageState.components[_ref];
  setSelected(component_config,rowInstance);
  var immu_component_config = bindRowData(component_config,rowData);
  var tagname = component_config.type.toLowerCase();
  var TagInstance = components_dict[tagname];

  extendProps = extendProps||{};

  return  (<TagInstance 
            {...extendProps} 
            row_data ={rowData} 
            row_instance = {rowInstance}
            com_ref={_ref} 
            key={_ref} 
            immu_config={immu_component_config}  
            page_view={pageViewInstance}></TagInstance>);
}

