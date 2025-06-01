"use client";

import { useEffect, useState } from "react";
import pageStyles from '@/app/styles/page.module.css';
import { getPrtfMst } from "@/api/prtf/prtfMstApi";
import { PrtfMst } from "@/api/types";
import {
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  GridColDef,
  GridRowSelectionModel,
  MuiEvent
} from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";

const columns: GridColDef<PrtfMst>[] = [
  { field: 'id' },
  {
    field: 'prtfGrp',
    headerName: 'Prtf Group',
    editable: false,
    flex: 1
  },
  {
    field: 'prtfCode',
    headerName: 'Prtf Code',
    editable: false,
    flex: 1
  },
  {
    field: 'prtfName',
    headerName: 'Prtf Name',
    editable: true,
    flex: 1
  },
  {
    field: 'useYn',
    headerName: 'Use YN',
    type: 'boolean',
    editable: true,
    flex: 1
  },
];

export default function CommonPrtfPage() {

  const [rows, setRows] = useState<PrtfMst[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>();

  useEffect(() => {
    getData();
  }, []);

  const handleProcessRowUpdate = (newRow: PrtfMst) => {
    // 새로 입력된 row 데이터를 모델에 반영
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? { ...row, ...newRow } : row
    );
    setRows(updatedRows);
    return newRow; // 필수
  };

  // Console Model
  const getSelectionModel = () => {
    console.info(selectionModel);
  }

  // Search
  const getData = async () => {
    const data: PrtfMst[] = await getPrtfMst();
    setRows(data);
  }

  return (
    <>
      <div className={pageStyles.pageHead}>
        <div className={pageStyles.pageTitle}>
          <Typography variant="h6" sx={{ color: 'white' }}>Common Prtf Page</Typography>
        </div>
        <div className={pageStyles.pageButton}>
          <Button variant="outlined" onClick={() => getSelectionModel()}>
            <Typography variant="button">Console Model</Typography>
          </Button>
          <Button variant="contained" color="warning">
            <Typography variant="button">Reset</Typography>
          </Button>
          <Button variant="contained" onClick={() => getData()}>
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
          density="compact"
          editMode="row" // 또는 "cell"
          processRowUpdate={handleProcessRowUpdate}
          columnVisibilityModel={{
            id: false,
          }}
          onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
            if (params.reason === GridCellEditStopReasons.cellFocusOut) {
              event.defaultMuiPrevented = true;
            }
          }}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelection) =>
            setSelectionModel(newSelection)
          }
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
