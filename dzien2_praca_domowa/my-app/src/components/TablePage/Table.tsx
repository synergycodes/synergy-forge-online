import { Box, styled } from '@mui/system'
import { DataGrid, GridRowData, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import { columns } from './data'

type Props = {
    rows: GridRowData[]
}

const StyledBox = styled(Box)`
    height: 400px;
    width: 100%;
    margin-top: 16px;
`

const StyledDataGrid = styled(DataGrid)`
    border: none !important;
`

export function Table({ rows }: Props) {
    return (
        <StyledBox>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                }}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </StyledBox>
    )
}
