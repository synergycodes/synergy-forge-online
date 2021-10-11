import { Box, styled } from '@mui/system'
import { GridRowData } from '@mui/x-data-grid'
import React from 'react'
import { DataChooser } from '../DataChooser'
import { rows } from './data'
import { Table } from './Table'

const StyledBox = styled(Box)`
    margin-top: 24px;
`

export function TablePage() {
    const [currentData, setCurrentData] = React.useState<GridRowData[]>(rows)

    return (
        <StyledBox>
            <DataChooser
                currentData={currentData}
                setCurrentData={setCurrentData}
            />
            <Table rows={currentData} />
        </StyledBox>
    )
}
