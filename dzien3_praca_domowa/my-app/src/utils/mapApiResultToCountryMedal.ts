import { CountryMedals } from '../types/CountryMedals'

export const mapApiResultToCountryMedal = (data: any): CountryMedals[] => {
    if (!data) {
        return []
    }

    return data.countries.map((country: any) => ({
        id: country.id,
        name: country.name,
        summerGold: country.summerMedals.gold,
        summerSilver: country.summerMedals.silver,
        summerBronze: country.summerMedals.bronze,
        summerTotal: country.summerMedals.total,
        winterGold: country.winterMedals.gold,
        winterSilver: country.winterMedals.silver,
        winterBronze: country.winterMedals.bronze,
        winterTotal: country.winterMedals.total,
    }))
}
