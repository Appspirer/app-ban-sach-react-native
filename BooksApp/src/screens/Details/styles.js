import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        backgroundColor: Colors.yellow,
        paddingTop: 60,
        paddingHorizontal: 16
    },
    top_row: {
        marginTop: 20,
        paddingBottom:30
    },
    top_info: {
        flexDirection: 'row',

    },
    img_container: {
        backgroundColor:Colors.yellow,
        shadowColor: Colors.black_text,
        shadowOffset: {
            height: 20,
        },
        shadowOpacity: 0.4,
        shadowRadius:15,
        marginRight: 20,
        alignItems:'center'
    },
    info_container: {
        width: width - 32 - 100 - 16
    },
    rate_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black_text
    },
    auth: {
        marginTop: 5,
        fontSize: 14,
        color: Colors.yellow3
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    rating_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    star: {
        marginRight: 3
    },
    page:{
        fontSize:14,
        color: Colors.yellow3
    },
    top_row_bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        paddingLeft:16
    },
    buy_container:{
        flexDirection:'row',
        alignItems:'center',
        height:46
    },
    buy_button:{
        backgroundColor: Colors.blue,
        paddingHorizontal:32,
        paddingVertical:12,
        borderRadius:100,
        shadowColor: Colors.blue,
        shadowOpacity:0.4,
        shadowOffset:{
            height:10
        },
        shadowRadius:10
    },
    buy_text:{
        fontSize:13,
        fontWeight:'bold',
        color: Colors.white
    },
    favorite:{
        backgroundColor: Colors.red,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        marginLeft:15
    },
    content_container:{
        paddingHorizontal:16,
        paddingTop:16,
        marginTop:16
    },
    content:{
        fontSize:14,
        color: Colors.gray_text,
        lineHeight:30
    },
    favorite_container:{
        width:46,
        marginRight:10
    }
})