import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import customerAppReducer from './CustomerApp';

const rootReducer = combineReducers({
  customerApp: customerAppReducer
});

export default rootReducer;
