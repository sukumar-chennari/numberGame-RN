import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import PrimaryButton from "../components/primaryButton"

function GameOverScreen({rounds,userNumber,startNewGameHandler}){
    return <View style={styles.container}>
        <Title>!! GAME OVER !!</Title>
        <View  style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image} />
        </View>

        <Text style={styles.textContainer}>Your Phone needs <Text style={styles.innerText}>{rounds}</Text>  rounds to guess  <Text style={styles.innerText}>{userNumber} </Text>number</Text>
        <PrimaryButton onPress={startNewGameHandler}> Start a new game</PrimaryButton>
        
    </View>
}
export default GameOverScreen

const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:24
        },
        imageContainer:{
            width:300,
            height:300,
            borderRadius:150,
            borderWidth:3,
            margin:36,
            borderColor:'yellow',
            overflow:'hidden'
        },
        image:{
            height:'100%',
            width:'100%'
        },
        textContainer:{
            textAlign:'center',
            fontFamily:'sansBold',
            fontSize:24,
            marginBottom:24
        },
        innerText:{
            color:'maroon'
        }
    }
)