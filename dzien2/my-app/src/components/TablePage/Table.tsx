import { DataGrid, GridRowData } from '@mui/x-data-grid'
import React from 'react'
import { columns } from './data'

type Props = {
    rows: GridRowData[]
}

export function Table({ rows }: Props) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
