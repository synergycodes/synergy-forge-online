import { gql, useQuery } from '@apollo/client'
import { Box, styled } from '@mui/system'
import { GridRowData } from '@mui/x-data-grid'
import React from 'react'
import { DataChooser } from '../DataChooser'
import { rows } from './data'
import { Table } from './Table'

const TABLE_QUERY = gql`
    query {
        countries {
            id
            name
            summerMedals {
                gold
                silver
                bronze
                total
            }
        }
    }
`

const StyledBox = styled(Box)`
    margin-top: 24px;
`

const mapToTableModel = (data: any) => {
    if (!data) {
        return [];
    }

    return data.countries.map((country: any) => ({
        id: country.id,
        name: country.name,
        gold: country.summerMedals.gold,
        silver: country.summerMedals.silver,
        bronze: country.summerMedals.bronze,
        total: country.summerMedals.total
    }));
};

export function TablePage() {
    const { data, loading } = useQuery(TABLE_QUERY);
    const rows = React.useMemo(
        () =>  mapToTableModel(data),
        [data]
    );

    // const [currentData, setCurrentData] = React.useState<GridRowData[]>(rows)

    return (
        <StyledBox>
            {/* <DataChooser
                currentData={currentData}
                setCurrentData={setCurrentData}
            /> */}
            { loading
                ? 'Loading ...'
                : <Table rows={rows} />
            }
        </StyledBox>
    )
}
