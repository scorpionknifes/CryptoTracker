import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'

const GraphComponent = () => {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    return (
        <LineChart
            style={{ flex: 1 }}
            data={data}
            svg={{
                stroke: 'rgb(134, 65, 244)',
            }}
        />
    )
}

export default GraphComponent