import { Dimensions, StyleSheet,Platform,StatusBar } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize'
const styles = StyleSheet.create({
    textSolution: {
        fontSize: RFValue(14),
        color: '#fff',
        fontFamily: 'Jost_500Medium',
        marginTop: 10
    },
    divisor: {
        width: '100%',
        height: 2,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: 5,
    }
})

export default styles