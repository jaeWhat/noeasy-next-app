"use client";

import { Button, Typography } from "@mui/material";
import pageStyles from '../../styles/page.module.css';

export default function ExampleLsApiPage() {
  return (
    <>
      <div className={pageStyles.pageHead}>
        <div className={pageStyles.pageTitle}>
          <Typography variant="h6" sx={{ color: 'white' }}>Example Ls API Page</Typography>
        </div>
        <div className={pageStyles.pageButton}>
        </div>
      </div>
      <div className={pageStyles.pageBody}>
        <Button onClick={() => {}}>Request API</Button>
      </div>
    </>
  );
}