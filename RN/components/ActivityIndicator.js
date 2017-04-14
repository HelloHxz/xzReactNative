import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';import Immutable from 'immutable';
import * as Helper from '../common/utils';
import * as StyleHelper from '../common/styleHelper';

class spin extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nexpros){
    return !Immutable.is(nexpros.immu_config, this.props.immu_config);
  }
  render() {
    this.config = this.props.immu_config.toJS();
    var styles = StyleHelper.process(this.config.style);
    return (<ActivityIndicator size="small"
            color="#aaa"></ActivityIndicator>);
  }
}
module.exports = spin;
