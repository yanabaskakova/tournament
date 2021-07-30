import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { Actions } from '../actions/types';
import rootReducer, { RootState as RootStateReds } from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootStateReds, Actions>)
);

export default store;

export const useAppSelector: TypedUseSelectorHook<RootStateReds> = useSelector;
