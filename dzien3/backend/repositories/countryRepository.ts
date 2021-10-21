import { Country as CountryDB, Medal as MedalDB } from "@prisma/client";

import { Country } from "../models/country";
import { GameType, Medal } from "../models/medal";
import { providePrismaClient } from "../prisma/clientProvider";

type CountryMedalsDB = CountryDB & { medals: MedalDB[] };

export const getCountriesAndMedals = async (): Promise<Country[]> => {
  const prisma = providePrismaClient();
  const countries = await prisma.country.findMany({
    include: {
      medals: true
    }
  });

  return countries.map(
    (country) => mapToCountryModel(country)
  );
};

const mapToCountryModel = (country: CountryMedalsDB): Country => ({
  id: String(country.id),
  name: country.name,
  code: country.code,
  summerMedals: getCountryMedalsForGameType(country, "SUMMER"),
  winterMedals: getCountryMedalsForGameType(country, "WINTER")
} as Country);

const getCountryMedalsForGameType = (country: CountryMedalsDB, gameType: string): Medal => {
  const medalDb = country.medals.find(
    (medal) => medal.gameType === gameType
  );

  const { id, gameCount, gold, silver, bronze } = medalDb;
  return {
    id: String(id),
    gameType: gameType as GameType,
    gameCount, gold, silver, bronze
  } as Medal;
};
