import { IconButton } from '@mui/material'
import { Box, css, styled } from '@mui/system'
import { GridRowData } from '@mui/x-data-grid'
import React from 'react'
import { rows, rows2 } from './TablePage/data'
import { ReactComponent as SummerIcon } from '../assets/summer.svg'
import { ReactComponent as WinterIcon } from '../assets/winter.svg'

type Props = {
    currentData: GridRowData[]
    setCurrentData: React.Dispatch<React.SetStateAction<GridRowData[]>>
}

const StyledButton = styled<any>(IconButton)`
    width: 60px;
    height: 60px;
    border-radius: 10px;

    ${(props) =>
        props.isActive &&
        css`
            background-color: #e5f2fc;
        `}
`

export function DataChooser({ currentData, setCurrentData }: Props) {
    return (
        <Box>
            <StyledButton
                onClick={() => setCurrentData(rows)}
                isActive={currentData === rows}
            >
                <SummerIcon />
            </StyledButton>
            <StyledButton
                onClick={() => setCurrentData(rows2)}
                isActive={currentData === rows2}
            >
                <WinterIcon />
            </StyledButton>
        </Box>
    )
}
