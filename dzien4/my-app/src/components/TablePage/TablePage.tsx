import { useQuery } from '@apollo/client'
import { Box, styled } from '@mui/system'
import React from 'react'

import { mapApiResultToCountryMedal } from '../../utils/mapApiResultToCountryMedal'
import { COUNTRY_MEDALS_QUERY } from '../../queries/countryMedals'
import { GameTypeChooser } from '../GameTypeChooser'
import { GameType } from '../../types/GameType'
import { Table } from './Table'
import { SUMMER_COLUMNS, WINTER_COLUMNS } from './consts'
import { Loader } from '../Loader'

const StyledBox = styled(Box)`
    margin-top: 24px;
`

export function TablePage() {
    const [gameType, setGameType] = React.useState(GameType.SUMMER)
    const onGameTypeChange = (nextGameType: GameType) => {
        setGameType(nextGameType)
    }

    const { data, loading } = useQuery(COUNTRY_MEDALS_QUERY)
    const rows = React.useMemo(() => mapApiResultToCountryMedal(data), [data])

    return (
        <StyledBox>
            <GameTypeChooser
                gameType={gameType}
                onGameTypeChange={onGameTypeChange}
            />
            {loading ? (
                <Loader />
            ) : (
                <Table
                    rows={rows}
                    columns={
                        gameType === GameType.SUMMER
                            ? SUMMER_COLUMNS
                            : WINTER_COLUMNS
                    }
                />
            )}
        </StyledBox>
    )
}
