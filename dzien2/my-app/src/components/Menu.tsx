import { ShowChart, TableChart } from '@mui/icons-material'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CHART_PAGE, TABLE_PAGE } from '../consts/routes'

const Link = styled(NavLink)`
    &.${(props) => props.activeClassName} {
        .MuiButtonBase-root {
            background: #e5f2fc;
        }
    }
`

const StyledDrawer = styled(Drawer)`
    width: 240px;
    flex-shrink: 0;

    .MuiDrawer-paperAnchorLeft {
        width: 240px;
        box-sizing: border-box;
    }
`

export function Menu() {
    return (
        <StyledDrawer variant="permanent">
            <Toolbar />
            <List>
                <Link to={CHART_PAGE} activeClassName="active">
                    <ListItem button>
                        <ListItemIcon>
                            <ShowChart />
                        </ListItemIcon>
                        <ListItemText>Chart</ListItemText>
                    </ListItem>
                </Link>
                <Link to={TABLE_PAGE} activeClassName="active-213">
                    <ListItem button>
                        <ListItemIcon>
                            <TableChart />
                        </ListItemIcon>
                        <ListItemText>Table</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </StyledDrawer>
    )
}
