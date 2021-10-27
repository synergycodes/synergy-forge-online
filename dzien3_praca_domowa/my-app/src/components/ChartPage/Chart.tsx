import React from 'react'
import GoogleChart from 'react-google-charts'
import { CHART_OPTIONS, CHART_SERIES_CONFIG } from './consts'
import { ChartValue } from './types'

type Props = {
    data: ChartValue[]
}

export function Chart({ data }: Props) {
    return (
        <GoogleChart
            width={'100%'}
            height={'600px'}
            chartType="BarChart"
            data={[CHART_SERIES_CONFIG, ...data]}
            options={CHART_OPTIONS}
        />
    )
}
