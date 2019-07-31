import { combineReducers } from 'redux';

import randomInteger, { DUCK_NAME as RANDOM_INTEGER_DUCK_NAME } from './RandomInteger';

export const reducers = {
  [RANDOM_INTEGER_DUCK_NAME]: randomInteger,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
