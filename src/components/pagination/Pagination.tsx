import React from 'react'
import Pagination from '@mui/material/Pagination';
const PaginationUI:React.FC = () => {
  return (
    <div  style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'3rem '}} > 
    <Pagination count={10} color="primary" />

    </div>
  )
}

export default PaginationUI