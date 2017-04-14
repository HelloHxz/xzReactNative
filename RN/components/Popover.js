import React, { Component } from 'react';
import {
  View,ScrollView,
  StyleSheet,TouchableOpacity,
  Text
} from 'react-native';
import Immutable from 'immutable';

import Popover from './PopoverLib';
import * as Helper from '../common/utils';
import Base from './Base';

import * as StyleHelper from '../common/styleHelper';

class Com extends Base {
  constructor(props) {
    super(props)
    props.page_view.extendsRefs["popover_"+props.com_ref] = this;
    props.page_view.popoverHadInit(props.com_ref);
    this.state = {
      isVisible: false,
      buttonRect: {},
    }
  }
  getInitialState() {
    return {
      isVisible: false,
      fromRect: {},
    };
  }

  show(target){
    target.measure((ox, oy, width, height, px, py) => {
        this.setState({
          isVisible: true,
          fromRect: {x: px, y: py, width: width, height: height},
        });
      });
  }
 

  baseRender() {
    var styles = StyleHelper.process(this.config.style);
    return (<Popover
      placement={'bottom'}
      onClose = {()=>{
         this.setState({isVisible: false});
      }}
          isVisible={this.state.isVisible}
          fromRect={this.state.fromRect}
          >
          {
          Helper.getLayout({
            root:this.config.root,
            pageInstance :this.props.page_view,
            rowInstance:null})
          }
      </Popover>);
  }
}
module.exports = Com;
