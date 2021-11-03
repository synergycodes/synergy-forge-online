import { ChartValue } from '../components/ChartPage/types'
import { CountryMedals } from '../types/CountryMedals'
import { GameType } from '../types/GameType'
import { mapApiResultToCountryMedal } from './mapApiResultToCountryMedal'

export const mapApiResultToChartData = (
    data: any,
    gameType: GameType,
    take: number = 10
): ChartValue[] => {
    const countryMedals = mapApiResultToCountryMedal(data)
    const bestCountries = getBestCountriesByGame(countryMedals, gameType, take)
    return mapToChartData(bestCountries, gameType)
}

const getBestCountriesByGame = (
    countryMedals: CountryMedals[],
    gameType: GameType,
    take: number
) =>
    countryMedals
        .sort((a, b) =>
            gameType === GameType.SUMMER
                ? b.summerTotal - a.summerTotal
                : b.winterTotal - a.winterTotal
        )
        .slice(0, take)

const mapToChartData = (
    countryMedals: CountryMedals[],
    gameType: GameType
): ChartValue[] =>
    countryMedals.map((countryMedal) => {
        const { name } = countryMedal
        if (gameType === GameType.SUMMER) {
            const { summerGold, summerSilver, summerBronze } = countryMedal
            return [name, summerGold, summerSilver, summerBronze]
        } else {
            const { winterGold, winterSilver, winterBronze } = countryMedal
            return [name, winterGold, winterSilver, winterBronze]
        }
    })
