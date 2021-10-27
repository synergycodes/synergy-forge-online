import { useQuery } from '@apollo/client'
import { Box, styled } from '@mui/system'
import React from 'react'
import { COUNTRY_MEDALS_QUERY } from '../../queries/countryMedals'
import { GameType } from '../../types/GameType'
import { mapApiResultToChartData } from '../../utils/mapApiResultToChartData'
import { GameTypeChooser } from '../GameTypeChooser'
import { Loader } from '../Loader'
import { Chart } from './Chart'

const StyledBox = styled(Box)`
    margin-top: 24px;
`

export function ChartPage() {
    const [gameType, setGameType] = React.useState(GameType.SUMMER)
    const onGameTypeChange = (nextGameType: GameType) => {
        setGameType(nextGameType)
    }

    const { data, loading } = useQuery(COUNTRY_MEDALS_QUERY)
    const chartData = React.useMemo(
        () => mapApiResultToChartData(data, gameType),
        [data, gameType]
    )

    return (
        <StyledBox>
            <GameTypeChooser
                gameType={gameType}
                onGameTypeChange={onGameTypeChange}
            />
            {loading ? <Loader /> : <Chart data={chartData} />}
        </StyledBox>
    )
}
