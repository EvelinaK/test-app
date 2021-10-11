import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.page.loading;
export const getFilter = (state) => state.page.filter;
export const getAllImg = (state) => state.page.items;
export const getSlides = (state) => state.page.slider;
export const getAllpages = (state) => state.page.headers['pagination-count'];
export const getlimit = (state) => state.page.headers['pagination-limit'];
export const getPage = (state) => state.page.headers['pagination-page'];



export const getDat = (state) => state.page;
export const getAllComments = (state) => state.page.comments;
export const getVisibleComments = (state) => {
  const comments = getAllComments(state);
  return comments;
};

