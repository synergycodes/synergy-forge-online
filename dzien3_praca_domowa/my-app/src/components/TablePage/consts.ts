import { GridColDef } from '@mui/x-data-grid'

export const SUMMER_COLUMNS: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name' },
    { field: 'summerGold', headerName: 'Gold' },
    { field: 'summerSilver', headerName: 'Silver' },
    { field: 'summerBronze', headerName: 'Bronze' },
    { field: 'summerTotal', headerName: 'Total' },
]

export const WINTER_COLUMNS: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name' },
    { field: 'winterGold', headerName: 'Gold' },
    { field: 'winterSilver', headerName: 'Silver' },
    { field: 'winterBronze', headerName: 'Bronze' },
    { field: 'winterTotal', headerName: 'Total' },
]
