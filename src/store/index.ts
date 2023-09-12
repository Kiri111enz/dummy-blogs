import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers/blog';

const store = configureStore({
    reducer: {
        blog: blogReducer
    }
});

export type State = ReturnType<typeof store.getState>;

export default store;