"use client";

import { useState } from "react";
import { Button, Box, Card, Typography } from "@mui/material";
import pageStyles from '../../styles/page.module.css';

export default function ExampleCounterPage() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className={pageStyles.pageHead}>
        <div className={pageStyles.pageTitle}>
          <Typography variant="h6" sx={{ color: 'white' }}>Example Counter Page</Typography>
        </div>
        <div className={pageStyles.pageButton}>
        </div>
      </div>
      <div className={pageStyles.pageBody}>
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
        {/*
          <Typography variant="h1">Typography Test</Typography>
          <Typography variant="h2">Typography Test</Typography>
          <Typography variant="h3">Typography Test</Typography>
          <Typography variant="h4">Typography Test</Typography>
          <Typography variant="h5">Typography Test</Typography>
          <Typography variant="h6">Typography Test</Typography>
          <Typography variant="inherit">Typography Test</Typography>
          <Typography variant="overline">Typography Test</Typography>
          <Typography variant="subtitle1">Typography Test</Typography>
          <Typography variant="subtitle2">Typography Test</Typography>
          <Typography variant="body1">Typography Test</Typography>
          <Typography variant="body2">Typography Test</Typography>
          <Typography variant="button">Typography Test</Typography>
          <Typography variant="caption">Typography Test</Typography>
        */}
          <Card
            sx={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem',
            }}
          >
            <Typography variant="subtitle1">Count : {count}</Typography>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(0)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Reset</Typography>
            </Button>
          </Card>

          <Card
            sx={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count + 1)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count + 1</Typography>
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count + 2)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count + 2</Typography>
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count + 3)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count + 3</Typography>
            </Button>
          </Card>

          <Card
            sx={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count - 1)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count - 1</Typography>
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count - 2)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count - 2</Typography>
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setCount(count - 3)}
            >
              <Typography variant="button" sx={{ color: 'white' }}>Count - 3</Typography>
            </Button>
          </Card>
        </Box>
      </div>
    </>
  );
}
