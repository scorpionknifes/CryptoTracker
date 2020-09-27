import React from 'react'
import { AreaChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import * as shape from 'd3-shape'

const GraphGradientComponent = () => {

    const data = [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 90]

    const Gradient = ({ index }) => (
        <Defs key={index}>
            <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'#F15A29'} stopOpacity={0.2} />
                <Stop offset={'100%'} stopColor={'#F15A29'} stopOpacity={0.0} />
            </LinearGradient>
        </Defs>
    )

    return (
        <AreaChart
            style={{ flex: 1 }}
            data={data}
            curve={shape.curveBasis}
            contentInset={{ bottom: -1, left: -1, right: -1 }}
            svg={{
                stroke: '#F15A29',
                fill: 'url(#gradient)',
            }}
        >
            <Gradient />
        </AreaChart>
    )
}

export default GraphGradientComponent