// A Redux store runs the root reducer whenever an action is dispatched

import { createStore } from 'redux';
import { reducer } from './reducers';

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic


const store = createStore(reducer)

export default store;