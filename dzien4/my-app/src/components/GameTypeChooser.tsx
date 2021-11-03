import React from 'react'
import { IconButton } from '@mui/material'
import { Box, css, styled } from '@mui/system'
import { ReactComponent as SummerIcon } from '../assets/summer.svg'
import { ReactComponent as WinterIcon } from '../assets/winter.svg'
import { GameType } from '../types/GameType'

type Props = {
    gameType: GameType
    onGameTypeChange: (type: GameType) => void
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

export function GameTypeChooser({ gameType, onGameTypeChange }: Props) {
    return (
        <Box>
            <StyledButton
                onClick={() => onGameTypeChange(GameType.SUMMER)}
                isActive={gameType === GameType.SUMMER}
            >
                <SummerIcon />
            </StyledButton>
            <StyledButton
                onClick={() => onGameTypeChange(GameType.WINTER)}
                isActive={gameType === GameType.WINTER}
            >
                <WinterIcon />
            </StyledButton>
        </Box>
    )
}
