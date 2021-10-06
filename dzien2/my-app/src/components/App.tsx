import { Container, CssBaseline } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Contents } from './Contents'
import { Header } from './Header'
import { Menu } from './Menu'

const StyledContainer = styled(Container)`
    display: flex;
`

export function App() {
    return (
        <StyledContainer>
            <CssBaseline />
            <Header />
            <Menu />
            <Contents />
        </StyledContainer>
    )
}
