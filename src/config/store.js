import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '@ducks/reducer';

const persistConfig = {
    key: 'react-starter-app',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );

    const persistor = persistStore(store);

    return { store, persistor };
};
