import React from 'react'
import { CircularProgress } from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledBox = styled(Box)`
    height: 100%;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export function Loader() {
    return (
        <StyledBox>
            <CircularProgress />
        </StyledBox>
    )
}
