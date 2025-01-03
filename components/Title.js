import { StyleSheet, Text } from "react-native"

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles=StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
        color:'#ddb52f',
        // borderColor:'#ddb52f',
        // borderWidth:2
    }
})