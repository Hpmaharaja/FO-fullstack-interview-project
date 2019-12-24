import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from '../../../src/components/Landing/LandingRedux';

const landingReducer = combineReducers({
  landing: landingReducer,

  routing: routerReducer
});

export default rootReducer;
