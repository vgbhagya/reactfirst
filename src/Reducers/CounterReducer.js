const initialstate = {
  count:100
}
export default function counterReducer(state=initialstate,action){
    switch(action.type){
        case "INCREMENT":{
            const newState={...state,count:state.count+action.payload}
            return newState;
        }
        case "DECREMENT":{
            const newState={...state,count:state.count-action.payload}
            return newState;
        }
        default:
            return state;
    }
}