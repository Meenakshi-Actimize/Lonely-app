import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid } from '@mui/material';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    borderRadius: '0px', // Removes the border-radius to create a square shape
  },
}));

function Shoppage4() {
  return (
    <Stack spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
      <Pagination
        count={5}
        shape='rounded'
        sx={{ border:'1px solid gray', borderRadius:'22px' }}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            sx={{
              width: { lg: '30%', md: '30%', sm: '50%', xs: '100%' },
              borderLeft: item.type === 'previous' ? 'none' : '1px solid gray', 
              borderTop: 'none',
              borderBottom: 'none',
              borderRight: 'none', // Border for each slot
              height: '50px',
            }}
          />
        )}
      />
    </Stack>
  );
}

export default Shoppage4;
