import moment from 'moment';

import RandomApiService from '@services/RandomApiService';

export const DUCK_NAME = 'randomInteger';

export const INITIAL_STATE = {
  lastUpdateDateTime: null,
  loading: false,
  success: false,
  error: null,
  data: [],
};

export const LOAD_RANDOM_INTEGER_STARTED = `${DUCK_NAME}/LOAD_RANDOM_INTEGER_STARTED`;
export const LOAD_RANDOM_INTEGER_SUCCEED = `${DUCK_NAME}/LOAD_RANDOM_INTEGER_SUCCEED`;
export const LOAD_RANDOM_INTEGER_FAILED = `${DUCK_NAME}/LOAD_RANDOM_INTEGER_FAILED`;

export const loadRandomIntegerStarted = () => ({ type: LOAD_RANDOM_INTEGER_STARTED });
export const loadRandomIntegerSucceed = data => ({ type: LOAD_RANDOM_INTEGER_SUCCEED, data });
export const loadRandomIntegerFailed = error => ({ type: LOAD_RANDOM_INTEGER_FAILED, error });

export const loadRandomInteger = () => async (dispatch) => {
  dispatch(loadRandomIntegerStarted());

  let data = {};

  try {
    const randomApiService = new RandomApiService();
    data = await randomApiService.getRandomInteger(0, 100);
    dispatch(loadRandomIntegerSucceed(data));
  } catch (err) {
    loadRandomIntegerFailed(err);
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_RANDOM_INTEGER_STARTED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: true,
      };
    case LOAD_RANDOM_INTEGER_SUCCEED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: false,
        success: true,
        error: null,
        data: action.data,
      };
    case LOAD_RANDOM_INTEGER_FAILED:
      return {
        ...state,
        lastUpdateDateTime: moment().toISOString(),
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
