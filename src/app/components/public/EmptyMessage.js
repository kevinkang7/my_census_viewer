import React from 'react';
import Box from '@material-ui/core/Box';

const EmptyMessage = () => (
  <Box display="flex" justifyContent="center" fontSize={17} mt={3}>
    Please make selections to view the data.
  </Box>
);

export default EmptyMessage;
