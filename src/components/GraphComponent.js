import React, { useEffect, useState } from 'react'
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View } from 'react-native'

const GraphComponent = (props) => {

    const data = props.data.history?.map(item => item.rate).filter((value, index, Arr) => {
        return index % 10 == 0;
    })

    if (data === undefined) {
        return <View></View>
    }

    return (
        <LineChart
            style={{ flex: 1 }}
            data={data}
            curve={shape.curveBasis}
            svg={{
                stroke: '#F15A29',
                strokeWidth: 3,
            }}
        />
    )
}

export default GraphComponent