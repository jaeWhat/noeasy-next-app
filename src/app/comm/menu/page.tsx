"use client";

import { Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'menuCode',
    headerName: 'Menu Code',
    editable: true,
  },
  {
    field: 'menuName',
    headerName: 'Menu Name',
    editable: true,
  },
];

const rows = [
  { id: 1, menuCode: 'Snow', menuName: 'Jon' },
  { id: 2, menuCode: 'Lannister', menuName: 'Cersei' },
  { id: 3, menuCode: 'Lannister', menuName: 'Jaime' },
  { id: 4, menuCode: 'Stark', menuName: 'Arya' },
  { id: 5, menuCode: 'Targaryen', menuName: 'Daenerys' },
  { id: 6, menuCode: 'Melisandre', menuName: null, },
  { id: 7, menuCode: 'Clifford', menuName: 'Ferrara' },
  { id: 8, menuCode: 'Frances', menuName: 'Rossini' },
  { id: 9, menuCode: 'Roxie', menuName: 'Harvey' },
  { id: 10, menuCode: 'Snow', menuName: 'Jon' },
  { id: 11, menuCode: 'Snow', menuName: 'Jon' },
  { id: 12, menuCode: 'Lannister', menuName: 'Cersei' },
  { id: 13, menuCode: 'Lannister', menuName: 'Jaime' },
  { id: 14, menuCode: 'Stark', menuName: 'Arya' },
  { id: 15, menuCode: 'Targaryen', menuName: 'Daenerys' },
  { id: 16, menuCode: 'Melisandre', menuName: null, },
  { id: 17, menuCode: 'Clifford', menuName: 'Ferrara' },
  { id: 18, menuCode: 'Frances', menuName: 'Rossini' },
  { id: 19, menuCode: 'Roxie', menuName: 'Harvey' },
  { id: 20, menuCode: 'Snow', menuName: 'Jon' },
  { id: 21, menuCode: 'Snow', menuName: 'Jon' },
  { id: 22, menuCode: 'Lannister', menuName: 'Cersei' },
  { id: 23, menuCode: 'Lannister', menuName: 'Jaime' },
  { id: 24, menuCode: 'Stark', menuName: 'Arya' },
  { id: 25, menuCode: 'Targaryen', menuName: 'Daenerys' },
  { id: 26, menuCode: 'Melisandre', menuName: null, },
  { id: 27, menuCode: 'Clifford', menuName: 'Ferrara' },
  { id: 28, menuCode: 'Frances', menuName: 'Rossini' },
  { id: 29, menuCode: 'Roxie', menuName: 'Harvey' },
  { id: 30, menuCode: 'Snow', menuName: 'Jon' },
];

export default function CommonMenuPage() {
  return (
    <>
      <div className='layout-contents-head'>
        <div className='layout-contents-title'>
          <Typography variant="h6" sx={{ color: 'white' }}>Common Menu Page</Typography>
        </div>
        <div className='layout-contents-button'>
          <Button variant="contained" color="warning">
            <Typography variant="button">Reset</Typography>
          </Button>
          <Button variant="contained">
            <Typography variant="button">Search</Typography>
          </Button>
          <Button variant="contained" color="success">
            <Typography variant="button">Save</Typography>
          </Button>
          <Button variant="contained" color="error">
            <Typography variant="button">Delete</Typography>
          </Button>
        </div>
      </div>
      <div className='layout-contents-body'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
}
