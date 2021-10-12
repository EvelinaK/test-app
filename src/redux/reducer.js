import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
fetchSlideRequest,
fetchSlideSuccess,
fetchSlideError,
fetchImageRequest,
 fetchImageSuccess,
fetchImageError,
} from "./actions";



const slider = createReducer([], {
  [fetchSlideSuccess]: (_, { payload }) => [...payload],
});


const headers = createReducer({}, {
  [fetchImageSuccess]: (_, { payload }) => payload.headers,
});


const items = createReducer([], {
 [fetchImageRequest]: (_, { payload }) => payload,
  [fetchImageSuccess]: (_, { payload }) => payload.data

});

const loading = createReducer(false, {
  [fetchSlideRequest]: () => true,
  [fetchSlideSuccess]: () => false,
  [fetchSlideError]: () => false,
   [fetchImageRequest]: () => true,
  [fetchImageSuccess]: () => false,
  [fetchImageError]: () => false,
});


const error = createReducer(null, {});

export default combineReducers({
  slider,
  items,
 headers,
  loading,
  error,
});
