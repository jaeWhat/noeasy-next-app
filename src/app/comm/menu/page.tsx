"use client";

import { Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "../../page.module.css";

type RowType = {
  id?: number;
  menuCode?: string;
  menuName?: string;
  parentMenu?: string;
};

const columns: GridColDef<RowType>[] = [
// const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id' },
  {
    field: 'menuCode',
    headerName: 'Menu Code',
    editable: true,
    flex: 1
  },
  {
    field: 'menuName',
    headerName: 'Menu Name',
    editable: true,
    flex: 1
  },
  {
    field: 'parentMenu',
    headerName: 'Parent Menu Code',
    editable: true,
    flex: 1
  },
];

export default function CommonMenuPage() {
  const rows: RowType[] = [
    { id: 1, menuCode: 'Snow', menuName: 'Jon', parentMenu: 'Jon' },
    { id: 2, menuCode: 'Lannister', menuName: 'Cersei', parentMenu: 'Cersei' },
    { id: 3, menuCode: 'Lannister', menuName: 'Jaime', parentMenu: 'Jaime' },
    { id: 4, menuCode: 'Stark', menuName: 'Arya', parentMenu: 'Arya' },
    { id: 5, menuCode: 'Targaryen', menuName: 'Daenerys', parentMenu: 'Daenerys' },
    { id: 6, menuCode: 'Melisandre'},
    { id: 7, menuCode: 'Clifford', menuName: 'Ferrara', parentMenu: 'Ferrara' },
    { id: 8, menuCode: 'Frances', menuName: 'Rossini', parentMenu: 'Rossini' },
    { id: 9, menuCode: 'Roxie', menuName: 'Harvey', parentMenu: 'Harvey' },
    { id: 10, menuCode: 'Snow', menuName: 'Jon', parentMenu: 'Jon' },
    { id: 11, menuCode: 'Snow', menuName: 'Jon', parentMenu: 'Jon' },
    { id: 12, menuCode: 'Lannister', menuName: 'Cersei', parentMenu: 'Cersei' },
    { id: 13, menuCode: 'Lannister', menuName: 'Jaime', parentMenu: 'Jaime' },
    { id: 14, menuCode: 'Stark', menuName: 'Arya', parentMenu: 'Arya' },
    { id: 15, menuCode: 'Targaryen', menuName: 'Daenerys', parentMenu: 'Daenerys' },
  ];

  return (
    <>
      <div className={styles.pageHead}>
        <div className={styles.pageTitle}>
          <Typography variant="h6" sx={{ color: 'white' }}>Common Menu Page</Typography>
        </div>
        <div className={styles.pageButton}>
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
      <div className={styles.pageBody}>
        <DataGrid
          rows={rows}
          columns={columns}
          columnVisibilityModel={{
            id: false,
            menuCode: true,
            menuName: true,
            parentMenu: true,
          }}
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
