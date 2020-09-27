import React from 'react'
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const GraphComponent = () => {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    return (
        <LineChart
            style={{ flex: 1 }}
            data={data}
            curve={shape.curveBasis}
            svg={{
                stroke: '#F15A29',
            }}
        />
    )
}

export default GraphComponent