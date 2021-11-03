# Lista zmian

## Ogólne zmiany

-   Dodano folder `types` i zamieszczono tam typy wykorzystane w komponentach.
-   Dodano folder `queries` i zamieszczono w nim query GQL.
-   Dodano folder `utils` i funkcję `mapApiResultToCountryMedal`.

## DataChooser

-   Wykomentowano użycie `DataChooser` wszędzie.
-   Zrefaktorowano komponent `DataChooser` na `GameTypeChooser`.
-   Dodano stałe `SUMMER_COLUMNS` i `WINTER_COLUMNS` w pliku `data.ts`.
-   Zmieniono nazwę pliku `data.ts` na `consts.ts`.

## TablePage

-   Zmieniono użycie `DataChooser` na `GameTypeChooser` w TablePage.
-   Zmieniono plik `Table.tsx` aby komponent przyjmował dane otypowane oraz definicje kolumn od rodzica. Zmieniono również styl tabeli aby była wyższa.

## ChartPage

-   Utworzono plik `types` i dodano tam `ChartModel`.
-   Utworzono plik `consts` i dodano tam konfigurację serii danych oraz opcje wykresu.
-   W pliku chart page dodano hook useQuery.
-   Utworzono funkcję `mapApiResultToChartData` w folderze utils. Ze względu na ograniczoną przestrzeń, dla charta, będziemy pokazywać tylko N najlepszych wyników.
-   Analogicznie do `TablePage` dodano dane do `ChartPage`

## Loadery

-   Dodano komponent `Loader` i użyto go w `ChartPage` i `TablePage`
