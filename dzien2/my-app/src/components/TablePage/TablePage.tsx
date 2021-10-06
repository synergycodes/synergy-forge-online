import { Button } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { rows, rows2 } from './data'
import { Table } from './Table'

const StyledBox = styled(Box)`
    margin-top: 24px;
`

export function TablePage() {
    const [currentData, setCurrentData] = React.useState(rows)

    return (
        <StyledBox>
            <Box>
                <Button onClick={() => setCurrentData(rows)}>Summer</Button>
                <Button onClick={() => setCurrentData(rows2)}>Winter</Button>
            </Box>
            <Table rows={currentData} />
        </StyledBox>
    )
}
