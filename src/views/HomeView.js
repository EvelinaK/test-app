import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/operations';
import  SliderImage  from '../components/Slider/Slider'
import * as selectors from '../redux/selectors';

function HomeView() {
    const dispatch = useDispatch();
    const sliderImages = useSelector(selectors.getSlides);
    
    useEffect(() => {
     dispatch(operations.fetchImageSlide());
    }, [dispatch]);

let images = sliderImages?.map(function(el) {
  return {name:el.name,temperament:el.temperament,...el.image};
});

    return (
        <>
         <h1>Main slider</h1>
        <div className="main-box">
         <SliderImage images={images}/>
         </div>
          </>      
      );

}

export default HomeView;
