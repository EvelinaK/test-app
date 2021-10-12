import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/operations';
import CardItem from '../components/Card/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as selectors from '../redux/selectors';
import "bootstrap/dist/css/bootstrap.css";
import ReactPaginate from "react-paginate";
import shortid from "shortid";


function ProductsView() {
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [lastLoadedPage, setLastLoadedPage] = useState(1);
  const dispatch = useDispatch();
  const contentImages = useSelector(selectors.getAllImg);
  const allPages = useSelector(selectors.getAllpages);
  const limit = useSelector(selectors.getlimit);                 
  const currentPage = useSelector(selectors.getPage);      


 useEffect(() => {
    dispatch(operations.getImage(offset));
    setPageCount(Math.ceil(allPages/limit));
  }, [dispatch, offset, allPages,limit]);


  const handlePageClick = (e) => {
    const selectedPage = e.selected + 1;
    setOffset(selectedPage);
    setLastLoadedPage(selectedPage);
  };

    return (
        <>
          <h1>Cats list breed</h1>
       <div className="container">
          <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
              { contentImages?.length > 0 && contentImages.map(item => (
  <CardItem key={shortid.generate()} item={item} />
      ))}
      </Grid>
    </Box>
</div>
     {contentImages && (
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            forcePage={lastLoadedPage - 1}
          />
        )}
          </>
      );

}

export default ProductsView;