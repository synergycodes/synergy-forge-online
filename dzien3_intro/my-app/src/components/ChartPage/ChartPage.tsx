import { Box, styled } from '@mui/system'
import { GridRowData } from '@mui/x-data-grid'
import React from 'react'
import { DataChooser } from '../DataChooser'
import { rows } from '../TablePage/data'
import { Chart } from './Chart'

const StyledBox = styled(Box)`
    margin-top: 24px;
`

export function ChartPage() {
    const [currentData, setCurrentData] = React.useState<GridRowData[]>(rows)

    return (
        <StyledBox>
            <DataChooser
                currentData={currentData}
                setCurrentData={setCurrentData}
            />
            <Chart />
        </StyledBox>
    )
}
