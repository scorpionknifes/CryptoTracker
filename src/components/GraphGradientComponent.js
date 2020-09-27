import React, { useContext } from 'react'
import { AreaChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import * as shape from 'd3-shape'
import { View } from 'react-native'

const GraphGradientComponent = (props) => {
    const data = props.data?.history?.map(item => item.rate < 0 ? 0 : item.rate).filter((value, index, Arr) => {
        return index % 10 == 0;
    })

    if (data === undefined) {
        return <View></View>
    }

    const Gradient = () => (
        <Defs>
            <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'0'} y2={'100%'} gradientUnits='userSpaceOnUse'>
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