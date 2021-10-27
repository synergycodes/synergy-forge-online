import React from 'react'
import { Box, styled } from '@mui/system'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { CountryMedals } from '../../types/CountryMedals'

type Props = {
    rows: CountryMedals[]
    columns: GridColDef[]
}

const StyledBox = styled(Box)`
    height: 700px;
    width: 100%;
    margin-top: 16px;
`

const StyledDataGrid = styled(DataGrid)`
    border: none !important;
`

export function Table({ rows, columns }: Props) {
    return (
        <StyledBox>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                components={{
                    Toolbar: GridToolbar,
                }}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </StyledBox>
    )
}
