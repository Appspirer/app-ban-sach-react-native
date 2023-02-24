import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.yellow,
        paddingTop: 60
    },
    img: {
        resizeMode: 'cover',
        width: (width - 16 * 4) / 3,
        height: ((width - 16 * 4) / 3) * 1.3
    },
    item: {
        width: (width - 16 * 4) / 3,
        marginBottom: 28,
        alignItems: 'center'
    },
    list: {
        paddingTop: 28
    }
})