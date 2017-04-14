import React, { Component } from 'react';
import {
  View
} from 'react-native';


var os = "ios";

export function process(styles) {
  if(!styles){return {};}

  var delArr = {position:"relative","width":"100%","height":"100%"};

  for(var dekey in delArr){
    if(delArr[dekey]==styles[dekey]){
      delete styles[dekey];
    }
  }
  for(var key in styles){
    var keyArr = key.split("_");
    if(keyArr.length==2){
      if(keyArr[0]==os){
        styles[keyArr[1]]=styles[key];
      }
      delete styles[key];
      continue;
    }
    if(styles[key]=="auto"){
      delete styles[key];
    }
  }

  return styles;
}
