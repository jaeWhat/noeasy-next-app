"use client";

import { Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import pageStyles from '../../styles/page.module.css';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 2 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 3 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 4 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 5 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 6 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 7 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 8 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 9 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 10 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 11 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 12 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 13 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 14 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 15 },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 16 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 17 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 18 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 19 },
  { id: 20, lastName: 'Snow', firstName: 'Jon', age: 20 },
  { id: 21, lastName: 'Snow', firstName: 'Jon', age: 21 },
  { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 22 },
  { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 23 },
  { id: 24, lastName: 'Stark', firstName: 'Arya', age: 24 },
  { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: 25 },
  { id: 26, lastName: 'Melisandre', firstName: null, age: 26 },
  { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 27 },
  { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 28 },
  { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 29 },
  { id: 30, lastName: 'Snow', firstName: 'Jon', age: 30 },
];

export default function ExampleTablePage() {
  return (
    <>
      <div className={pageStyles.pageHead}>
        <div className={pageStyles.pageTitle}>
          <Typography variant="h6" sx={{ color: 'white' }}>Example Table Page</Typography>
        </div>
        <div className={pageStyles.pageButton}>
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
      <div className={pageStyles.pageBody}>
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
