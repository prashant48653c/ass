import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectQuery, selectTotal, setSearchQuery } from '@/redux/slices/blogSlice';
import { useDispatch } from 'react-redux';

const PaginationUI: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
 const searchQuery=useAppSelector(selectQuery)
 const total=useAppSelector(selectTotal)
 const [page,setPage]=useState<number>(0)
 const dispatch=useAppDispatch()
 const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setCurrentPage(value);
  console.log(value);
  dispatch(setSearchQuery({ page: value, tags: searchQuery.tags, keyword: searchQuery.keyword,user:'' }));

};
 
 console.log(total)
if(total)
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
      <Pagination
        count={total }
        color="primary"
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationUI;
