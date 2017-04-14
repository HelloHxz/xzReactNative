import * as pageActions from '../reducer/actions';
import { bindActionCreators } from 'redux';
import * as pagesBridge from "../bridges/pageConfigBridge";

import Immutable from 'immutable';

export function getMapStateAndMapDispatch (pagename) {
  return {
    mapStateToProps:(state) =>{
      
      var app = state["app"];
      var pagestate = app.get(pagename);
      if(pagestate){
        return {page_state:pagestate}
      }
      state["app"] = state["app"].set(pagename,Immutable.fromJS(pagesBridge.getPageConfigByPageKey(pagename)));
      return {
        page_state: state["app"].get(pagename)
      }
      
      return {
        page_state:state[pagename]
      }
    },
    mapDispatchToProps:(dispatch) => ({
      actions:bindActionCreators(pageActions,dispatch)
    })
  }

}
