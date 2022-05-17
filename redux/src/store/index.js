import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
