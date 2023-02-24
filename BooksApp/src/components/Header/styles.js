import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        color: Colors.black_text,
    },
    title_container:{
        paddingBottom:15,
        borderBottomWidth:2,
        borderColor: Colors.yellow1
    },
    ic:{
        paddingBottom:15
    }
})