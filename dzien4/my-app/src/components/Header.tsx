import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styledSC from 'styled-components'
import OlympicLogo from '../assets/olimpics-games.svg'

const StyledAppBar = styled(AppBar)`
    background-color: white;
    color: black;
`

const StyledTypography = styled(Typography)`
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
`

const StyledLogo = styledSC.img`
    margin-left: 14px;
`

export function Header() {
    return (
        <StyledAppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <StyledLogo src={OlympicLogo} />
                <StyledTypography variant="h6" noWrap>
                    Olympic Scores
                </StyledTypography>
            </Toolbar>
        </StyledAppBar>
    )
}
