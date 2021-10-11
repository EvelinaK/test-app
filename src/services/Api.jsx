import axios from "axios";
import {
  fetchSlideRequest,
  fetchSlideSuccess,
  fetchSlideError,
  fetchImageRequest,
  fetchImageSuccess,
  fetchImageError,
  showImageRequest,
  showImageSuccess,
  showImageError,
} from "./actions";


 const BASE_URL = 'https://api.thecatapi.com/v1';
 const API_KEY = '66d67ca1-c80c-425a-a473-00a2b8ef9333';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchImageSlide = ()=> async (dispatch) => {
  debugger
    dispatch(fetchSlideRequest());
    try {
       const { data } = await axios.get(`${BASE_URL}/breeds?limit=${8}&page=${0}&order=Desc/${API_KEY}`);
      dispatch(fetchSlideSuccess(data));
    } catch (error) {
      dispatch(fetchSlideError(error));
    }
  }
export const getImage =(currentPage = 1) => async (dispatch) => {
    dispatch(fetchImageRequest());
    try {
      const { data } = await axios.get(
        `${BASE_URL}search?limit=${8}&page=${currentPage}&order=Asc${API_KEY}`
      );
      dispatch(fetchImageSuccess(data));
    } catch (error) {
      dispatch(fetchImageError(error));
    }
  };
export const showMoreImage = (page) => async (dispatch) => {
  dispatch(showImageRequest());
  try {
    const { data } = await axios.get(`${BASE_URL}search?limit=${8}&page=${page}&order=Asc${API_KEY}`);
    dispatch(showImageSuccess(data));
  } catch (error) {
    dispatch(showImageError(error));
  }
};


export default {fetchImageSlide, getImage, showMoreImage };























// import axios from 'axios';

// export const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
// export const API_KEY = '7c3d3ca22aedc91e6c47fc43aecca7bb';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   appid: API_KEY,
// };
// export async function fetchCityByQuery(query) {
//   const { data } = await axios.get(
//     `${BASE_URL}weather?q=${query}&units=metric&appid=${API_KEY}`,
//   );
//   return data;
// }

// export async function fetchCityByID(weatherId) {
//   const { data } = await axios.get(
//     `${BASE_URL}weather?id=${weatherId}&units=metric&appid=${API_KEY}`,
//   );
//   return data;
// }

// export async function renderCityByID(weatherId) {
//   const { data } = await axios.get(
//     `${BASE_URL}weather?id=${weatherId}&units=metric&appid=${API_KEY}`,
//   );
//   return data;
// }

// export async function fetchCityByLocation(lat, lon) {

//   const { data } = await axios.get(
//     `${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
//   );
//   return data;
// }

// export async function OneCallForecast(lat, lon) {
//   const { data } = await axios.get(
//     `${BASE_URL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude={part}&appid=${API_KEY}`,
//   );
//   return data;
// }
