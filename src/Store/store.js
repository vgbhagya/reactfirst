import { createStore, combineReducers} from 'redux';
import counterReducer from '../Reducers/CounterReducer';

const Reducers = combineReducers({
    counters: counterReducer
})
let store = createStore(Reducers);

export default store;