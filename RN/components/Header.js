import React, { Component } from 'react';
import  {
  View,
  StyleSheet
} from 'react-native';
import Immutable from 'immutable';
import Base from './Base';
import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';

class xzHeader extends Base {
  constructor(props) {
    super(props)
  }
  // fireAction(childConfig,params){
  //    this.props.page_view.fireAction(childConfig,params);
  // }

  baseRender() {
    var isIOS = Helper.OS==="ios";
    var styles = this.config.style;
    var height = this.config.style.height||40;
    var headerTopStyle;
    if(isIOS){
      this.config.style.height = height-10;
      headerTopStyle={"height":19,backgroundColor:styles.backgroundColor||"transparent"};
    }else {
      styles.alignItems="center";
    }
    styles.flexDirection="row";

    styles = StyleHelper.process(styles);
    if(isIOS){
      return (<View>
        <View style={headerTopStyle}/><View style={styles}>
        {
          Helper.getLayout({
            root:this.config.root,
            pageInstance :this.props.page_view,
            rowInstance:null})
          }
        </View></View>);
    }

    return (<View style={styles}>
       {
          Helper.getLayout({
            root:this.config.root,
            pageInstance :this.props.page_view,
            rowInstance:null})
          }
      </View>);
  }
}
module.exports = xzHeader;
