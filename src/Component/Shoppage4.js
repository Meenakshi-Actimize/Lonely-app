import Imports from "../Import/Import";

const CustomPagination = Imports.styled(Imports.Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    borderRadius: '0px', // Removes the border-radius to create a square shape
  },
}));

function Shoppage4() {
  return (
    <Imports.Stack spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
      <Imports.Pagination
        count={5}
        shape='rounded'
        sx={{ border:'1px solid gray', borderRadius:'22px' }}
        renderItem={(item) => (
          <Imports.PaginationItem
            slots={{ previous: Imports.ArrowBackIcon, next: Imports.ArrowForwardIcon }}
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
    </Imports.Stack>
  );
}

export default Shoppage4;
