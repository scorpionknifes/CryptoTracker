import { StyleSheet } from 'react-native';
export default StyleSheet.create({
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