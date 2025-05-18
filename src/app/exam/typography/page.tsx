"use client";

import { Box, Typography } from "@mui/material";

export default function ExampleTypographyPage() {
  return (
    <>
      <div className='page-head'>
        <div className='page-title'>
          <Typography variant="h6" sx={{ color: 'white' }}>Example Typography Page</Typography>
        </div>
        <div className='page-button'>
        </div>
      </div>
      <div className='page-body'>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Typography variant="h1">h1: Typography</Typography>
          <Typography variant="h2"> h2: Typography</Typography>
          <Typography variant="h3"> h3: Typography</Typography>
          <Typography variant="h4"> h4: Typography</Typography>
          <Typography variant="h5"> h5: Typography</Typography>
          <Typography variant="h6"> h6: Typography</Typography>
          <Typography variant="inherit"> inherit: Typography</Typography>
          <Typography variant="overline"> overline: Typography</Typography>
          <Typography variant="subtitle1"> subtitle1: Typography</Typography>
          <Typography variant="subtitle2"> subtitle2: Typography</Typography>
          <Typography variant="body1"> body1: Typography</Typography>
          <Typography variant="body2"> body2: Typography</Typography>
          <Typography variant="button"> button: Typography</Typography>
          <Typography variant="caption"> caption: Typography</Typography>
        </Box>
      </div>
    </>
  );
}
