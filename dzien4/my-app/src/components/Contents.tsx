import { Toolbar } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { CHART_PAGE, TABLE_PAGE } from '../consts/routes'
import { ChartPage } from './ChartPage/ChartPage'
import { TablePage } from './TablePage/TablePage'

const StyledBox = styled(Box)`
    width: 100%;
    flex-grow: 1;
`

export function Contents() {
    return (
        <StyledBox>
            <Toolbar />
            <Switch>
                <Route path={CHART_PAGE}>
                    <ChartPage />
                </Route>
                <Route path={TABLE_PAGE}>
                    <TablePage />
                </Route>
                <Route path="/" exact>
                    <Redirect to={CHART_PAGE} />
                </Route>
                <Route path="*">Błąd 404</Route>
            </Switch>
        </StyledBox>
    )
}
