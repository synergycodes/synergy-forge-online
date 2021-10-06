import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export function Header() {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Olympic Scores
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
