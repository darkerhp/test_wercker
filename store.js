import {createStore, combineReducers} from 'redux';
import {reducer as fromReducer} from 'redux-form';
const mainReducer = combineReducers({
    form: fromReducer
});
const store = createStore(mainReducer);
export default store;