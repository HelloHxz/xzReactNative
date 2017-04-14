import React, { Component } from 'react';
import  {
  AppRegistry,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,ActivityIndicator,
  Text,
  View,
  NavigationExperimental
} from 'react-native';
import * as pageActions from './reducer/actions';
const {
  Card:NavigationCard,
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
import Immutable from 'immutable'

import { createStore, applyMiddleware, compose,combineReducers } from 'redux';

import { Provider } from 'react-redux'

import * as pagesBridge from "./bridges/pageConfigBridge";
import thunk from 'redux-thunk';

const XzCardStack = require('./CardStack');
import type  {
  NavigationSceneRendererProps,
} from 'NavigationTypeDefinition';


import {dynamicReducer} from './reducer/dynamicReducer';

import {pageviewCreator} from "./container/pageview"



import * as startApp from "./apps/demo/app";





console.disableYellowBox = true;
console.warn('YellowBox is disabled.')



class Launch extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {direction: "horizontal",
    navigationState:{
        index: 0,
        key: this.props.root_page,
        routes: [{key: this.props.root_page}],
    }};
    this.paramsDict={};
    this.navprops = null;
  }

  componentWillMount() {
    this._renderScene = this._renderScene.bind(this);
    this._onPopRoute = this._onPopRoute.bind(this);
    this._onNavigationChange = this._onNavigationChange.bind(this);
    this.isPageKeyHasInNavStack = this.isPageKeyHasInNavStack.bind(this);
    this.getUniquePageKey = this.getUniquePageKey.bind(this);
  }


  getUniquePageKey(key){
    var PageNameKey;
    for(var k=0;k<10000;k++){
      for(var i=0,j=this.navprops.scenes.length;i<j;i++){
        PageNameKey = key+"$$"+k;
        if(this.navprops.scenes[i].navigationState.key==PageNameKey){
          break;
        }
      }
      return PageNameKey;
    }
    return PageNameKey+"$$"+parseInt(Math.random()*1000);
  }

  isPageKeyHasInNavStack(pagekey){
    // for(var i=0,j=this.navprops.scenes.length;i<j;i++){
    //   if(this.navprops.scenes[i].navigationState.key==pagekey){
    //     return true;
    //   }
    // }
    return false;
  }

  Go(action,pageview){
    var pagekey = action.to;
    if(this.isPageKeyHasInNavStack(action.to)){
      return;
    }
    var params = action.params;
    this.paramsDict[pagekey] = params;
    this._onNavigationChange("push",pagekey);

  }

   Replace(action,pageview){
    var pagekey = action.to;
    
    if(this.isPageKeyHasInNavStack(action.to)){
      return;
    }
    var replacePageKey = pageview.pageKey
    if(pageview.ownerPage){
       replacePageKey = (pageview.ownerPage.pageKey)
    }
    var params = action.params;
    this.paramsDict[pagekey] = params;
    this._onNavigationChange("replace",pagekey,replacePageKey);
  }

  goBack(action,pageview){
    this._onNavigationChange("pop");
  }



  _onNavigationChange(type: string,key:string,replaceKey:string): void {
   let {navigationState} = this.state;

   switch (type) {
     case 'RootContainerInitialAction':
       return initialState;
     case 'push':
       navigationState = NavigationStateUtils.push(navigationState, {key:key});
       break;
     case 'replace':
        navigationState = NavigationStateUtils.replaceAt(navigationState,replaceKey, {key:key});
        break;
     case 'back':
     case 'pop':
       navigationState = NavigationStateUtils.pop(navigationState);
       break;
   }
   if (this.state.navigationState !== navigationState) {
     this.setState({navigationState});
   }
 }

_onPopRoute(action){
  this._onNavigationChange("pop");
}

  render() {
    return (
      <XzCardStack
      direction={this.state.direction}
       onNavigateBack={this._onPopRoute}
       onNavigate={this._onPopRoute}
       navigationState={this.state.navigationState}
       renderScene={this._renderScene}
       style={styles.navigator}/>
    );
  }


  _renderScene(navprops){
    this.navprops = navprops;

    var _this = this;
    var curIndex = navprops.scene.index;
    var wantToRenderPageName = navprops.scene.route.key;
    var PageInstance;
    var params = this.paramsDict[wantToRenderPageName];

    PageInstance = pageviewCreator(wantToRenderPageName);

    return <PageInstance params={params} com_ref={wantToRenderPageName} pageviewkey={wantToRenderPageName}  navprops={navprops} rootNav={this}/>;
  }



}






var appConfigClone =Object.assign({},{});










const middleware = applyMiddleware(thunk);
let createStoreWithMiddleware = compose(middleware);


const reduceMapping ={
  app: dynamicReducer({})
};


const store = createStoreWithMiddleware(createStore)(
    combineReducers(reduceMapping)
);


class XzReactNative extends Component {

  constructor(props){
    super(props)
    var _this = this;

    this.state={hadLoadDone:false};

    pagesBridge.addPlugin("huxiaozhongMiddlePage",require("./middlePage/huxiaozhongMiddlePageLogic"));
  
    pagesBridge.addPage("huxiaozhongMiddlePage",require("./middlePage/huxiaozhongMiddlePage"));

    startApp.init(function(){
      _this.setState({hadLoadDone:true});
    });
  }
  render() {
    var rootPage = startApp.config.root;
    if(this.state.hadLoadDone){
      return (
        <Provider store={store}>
            <Launch root_page={rootPage}></Launch>
        </Provider>
      )
    }else{
      return (
          <Provider store={store}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <ActivityIndicator/>
            </View>
          </Provider>
        )
    }
    
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex:1,
    backgroundColor:"red"
  },

});

AppRegistry.registerComponent('RN', () => XzReactNative);
