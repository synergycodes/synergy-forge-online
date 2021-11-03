import { ChartSeriesConfig } from './types'

export const CHART_OPTIONS = {
    title: 'Medals by country',
    chartArea: { width: '50%' },
    hAxis: {
        title: 'Medals',
        minValue: 0,
    },
    vAxis: {
        title: 'Country',
    },
    colors: ['#EFC41F', '#B2B2B2', '#935959'],
}

export const CHART_SERIES_CONFIG: ChartSeriesConfig = [
    'Country',
    'Gold',
    'Silver',
    'Bronze',
]
