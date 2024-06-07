import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    borderRadius: '0px', // Removes the border-radius to create a square shape
  },
}));
function Shoppage4(){
  return (
    <Stack spacing={2} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Pagination
      count={10}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  </Stack>
  );
}
export default Shoppage4;
