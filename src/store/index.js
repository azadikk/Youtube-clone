import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slice/sidebarSlice';

export default configureStore ({
     reducer: {
          sidebar: sidebarReducer,
     },
});