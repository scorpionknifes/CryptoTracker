import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');


const HorizontalScrollPicker = (props) => {
    const size = width / props.rowItems;
    const [selected, setSelected] = useState(props.initialIdx);
    const [isParking, setIsParking] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [scrollView, setScrollView] = useState(null);
    const initialIdx = props.initialIdx;


    calculateLayout = () => {
        scrollView.scrollTo({ x: initialIdx * size, y: 0, animated: false });
    };

    renderItem = (item, idx) => {
        const { itemStyle, textStyle, selectedTextStyle } = props;
        const { label, value } = item;

        return (
            <TouchableOpacity
                onPress={() => {
                    setSelected(idx);
                    props.onSelect(idx);
                    scrollView.scrollTo({ x: idx * size, y: 0, animated: true })
                }}
                key={`item-${idx}-${value}`}
                style={[
                    styles.itemContainer,
                    {
                        width: width / props.rowItems,
                    },
                    itemStyle,
                ]}
            >
                <Text style={[styles.item, { color: selected == idx ? "#F15A29" : "#8A96AA", }, textStyle,
                (selected == idx) && selectedTextStyle
                ]}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    };

    handleScroll = (event) => {
        setScrollOffset(event.nativeEvent.contentOffset.x);
    };

    handleParking = () => {
        const { onSelect } = props;

        setIsParking(true);

        setTimeout(() => {
            if (isParking) {
                const selected = selectItem();
                setSelected(selected)
                setIsParking();
                scrollView.scrollTo({ y: 0, x: size * selected, animated: true });
                onSelect(selected);
            }
        }, 150);
    };

    cancelParking = () => {
        setIsParking(false);
    }

    selectItem = () => {
        const { items, onSelect } = props;

        const idx = Math.abs(Math.round(scrollOffset / size));
        const selected = idx === items.length ? idx - 1 : idx;

        setSelected(selected)

        onSelect(selected);
        return selected;
    }


    const { items, rowItems, containerStyle } = props;

    const sideItems = (rowItems - 1) / 2;

    return (
        <View style={[styles.timelineContainer, { width: rowItems * size }, containerStyle]}>
            <ScrollView
                horizontal
                ref={(ref) => (setScrollView(ref))}
                showsHorizontalScrollIndicator={false}
                onLayout={calculateLayout}
                snapToInterval={size}
                onScroll={handleScroll}
                onTouchEnd={handleParking}
                onScrollEndDrag={handleParking}
                scrollEventThrottle={16}
                onMomentumScrollBegin={cancelParking}
                onMomentumScrollEnd={selectItem}
                shouldCancelWhenOutside={false}
                contentContainerStyle={{
                    paddingLeft: size * sideItems,
                    paddingRight: size * sideItems,
                }}
            >
                {items.map((item, idx) => renderItem(item, idx))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    timelineContainer: {
        flexGrow: 0,
        flexDirection: 'row',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0,
    },
    item: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#000',
        fontSize: 15,
    },
    selectedItem: {
        flex: 1,
        position: 'absolute',
        top: 0,
        backgroundColor: 'transparent',
    },
});

export default HorizontalScrollPicker;