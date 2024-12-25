import { SafeAreaView, StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber,setUserNumber]=useState('')
  const [gameOver,setGameOver]=useState(true)
  const [rounds,setRounds]=useState(0)

  const  userNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
    setGameOver(false)
  }

  const gameOverHandler=(numberOfRounds)=>{
    setGameOver(true)
    setRounds(numberOfRounds)
  }

  console.log('rounds: ',rounds)
  const startNewGameHandler=()=>{
    setRounds(0)
    setUserNumber('')
  }

  const [fontsloaded]=useFonts({
    sansBold:require('./assets/fonts/OpenSans-Bold.ttf'),
    sans:require('./assets/fonts/OpenSans-Regular.ttf')
  })
  if(!fontsloaded){
    return <AppLoading/>
  }
  
  let screen=<StartGameScreen numberHandler={userNumberHandler}  />

  if(userNumber){
    screen=<GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler}/>
  }

  if(gameOver && userNumber){
    screen=<GameOverScreen rounds={rounds}  userNumber={userNumber} startNewGameHandler={startNewGameHandler}/>
  }
  return (
    <SafeAreaView style={styles.rootScreen}>  
         <View style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradient overlay on top of the image */}
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "rgba(150, 92, 45, 1)"]}
          style={styles.gradientOverlay}
        />
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // Ensures the image covers the screen
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject, // Makes the gradient fill the entire parent
  },
});
