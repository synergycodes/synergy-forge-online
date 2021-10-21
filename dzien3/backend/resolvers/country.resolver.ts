import { FieldResolver, Query, Resolver, Root } from "type-graphql";

import { Country } from "../models/country";
import { getCountriesAndMedals } from "../repositories/countryRepository";

@Resolver(() => Country)
export class CountryResolver {

  @Query(() => [Country])
  countries(): Promise<Country[]> {
    return getCountriesAndMedals();
  }

  @FieldResolver()
  totalMedals(@Root() country: Country) {
    let sum = 0;
    if (country.summerMedals) {
      sum +=
        country.summerMedals.bronze +
        country.summerMedals.silver +
        country.summerMedals.gold;
    }
    if (country.winterMedals) {
      sum +=
        country.winterMedals.bronze +
        country.summerMedals.silver +
        country.summerMedals.gold;
    }
    return sum;
  }
}
