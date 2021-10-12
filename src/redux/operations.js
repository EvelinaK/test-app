import axios from "axios";
import {
  fetchSlideRequest,
  fetchSlideSuccess,
  fetchSlideError,
  fetchImageRequest,
  fetchImageSuccess,
  fetchImageError,
} from "./actions";


 const BASE_URL = 'https://api.thecatapi.com/v1';
 const API_KEY = '66d67ca1-c80c-425a-a473-00a2b8ef9333';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchImageSlide = ()=> async (dispatch) => {
    dispatch(fetchSlideRequest());
    try {
       const { data } = await axios.get(`${BASE_URL}/breeds?limit=${8}&page=${0}&order=Desc/${API_KEY}`);
      dispatch(fetchSlideSuccess(data));
    } catch (error) {
      dispatch(fetchSlideError(error));
    }
  }



export const getImage =(currentPage ) => async (dispatch) => {
    dispatch(fetchImageRequest());
    try {
      const  res = await axios.get(`${BASE_URL}/breeds?limit=${8}&page=${currentPage}&order=Desc/${API_KEY}`);
     let response={
     headers:res.headers, 
      data :res.data  
     }
      dispatch(fetchImageSuccess(response));
    } catch (error) {
      dispatch(fetchImageError(error));
    }
  };



export default {fetchImageSlide, getImage };