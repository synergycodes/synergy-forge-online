import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SvgIcon,
    Toolbar,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { CHART_PAGE, TABLE_PAGE } from '../consts/routes'
import { ReactComponent as ChartIcon } from '../assets/Chart.svg'
import { ReactComponent as TableIcon } from '../assets/Table.svg'

const LINK_ACTIVE_CLASS = 'active'

const Link = styled(NavLink)`
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 8px;

    .MuiListItemText-root > span {
        font-weight: bold;
        font-size: 14px;
    }

    .MuiButtonBase-root {
        width: 80%;
        border-radius: 10px;
    }

    &.${LINK_ACTIVE_CLASS} {
        .MuiButtonBase-root {
            background: #e5f2fc;
        }
    }

    &:not(.${LINK_ACTIVE_CLASS}) {
        color: #8d8d8d;

        svg {
            filter: opacity(0.7);
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

const StyledSvgIcon = styled(SvgIcon)`
    color: black;
    transform: scale(0.7);
    .c {
        fill: transparent;
    }

    .a,
    .b,
    .d {
        fill: black;
    }
`

export function Menu() {
    return (
        <StyledDrawer variant="permanent">
            <Toolbar />
            <List>
                <Link to={CHART_PAGE} activeClassName={LINK_ACTIVE_CLASS}>
                    <ListItem button>
                        <ListItemIcon>
                            <StyledSvgIcon>
                                <ChartIcon />
                            </StyledSvgIcon>
                        </ListItemIcon>
                        <ListItemText>Chart</ListItemText>
                    </ListItem>
                </Link>
                <Link to={TABLE_PAGE} activeClassName={LINK_ACTIVE_CLASS}>
                    <ListItem button>
                        <ListItemIcon>
                            <StyledSvgIcon>
                                <TableIcon />
                            </StyledSvgIcon>
                        </ListItemIcon>
                        <ListItemText>Table</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </StyledDrawer>
    )
}
