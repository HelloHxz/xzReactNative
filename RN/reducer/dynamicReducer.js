import { createReducer } from './utils';
import Immutable from 'immutable';

export function dynamicReducer(state) {
  return createReducer(state, {
     ["modifyproperty"]:(state,payload)=>{
		if(payload.isModifyPageProperty){

		}else{
			delete payload.isModifyPageProperty;
			for(var key in payload){
			  if(key=="component"||key=='sender'||key=='page'){continue;};
			  state = state.updateIn([payload.page,'components', payload.component,key], value => {return payload[key]; });
				
			}
		}
		return state;
    },
  });
}
