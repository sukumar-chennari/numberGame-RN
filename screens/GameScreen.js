import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import {Ionicons} from '@expo/vector-icons'

function generateRandomNumber(min, max, exclude) {
  const rdnNumber = Math.floor(Math.random() * (max - min) + min);

  if (rdnNumber == exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rdnNumber;
  }
}
function GameScreen({ userNumber, gameOverHandler }) {
  let minBoundary = 1;
  let maxBoundary = 100;

  const intialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessRounds,setGuessRounds]=useState([intialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
      console.log("usernumber: ", userNumber, "currentguess: ", currentGuess);
    }
  }, [currentGuess]);

  useEffect(()=>{
    minBoundary=1,
    maxBoundary=100
  },[])

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("!!  OOPS  !!", "You are lying", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRdnNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRdnNumber);
    setGuessRounds([newRdnNumber,...guessRounds])
  };

  const guessRoundListLength=guessRounds.length
  return (
    <View style={styles.container}>
      <Title>Oponent's Guess</Title>
      <Text style={styles.textContainer}>{currentGuess}</Text>
      <Text style={{ textAlign: "center", color: "yellow", marginTop: 10 }}>
        Higher or Lower?
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="remove-sharp" size={24}/>
          </PrimaryButton>
        </View>

          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24}/>
            </PrimaryButton>
    
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
        data={guessRounds}
        renderItem={(itemData)=>{
            return(
                <View style={styles.guessRoundContainer}>
                    <Text># {guessRoundListLength-itemData.index}</Text>
                    <Text>Oppenents Guess: {itemData.item}</Text>
                </View>
            )
        }}
        style={styles.guessRoundsContainer}/>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    flex: 1,
    padding: 12,
    borderRadius: 20,
    elevation: 20,
    paddingTop: 60,
  },
  textContainer: {
    borderColor: "white",
    color: "white",
    borderWidth: 2,
    margin: 10,
    height: 80,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 38,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row", // Arrange buttons side by side
    marginTop: 20,
  },
  buttonWrapper: {
    flex: 1, // Equal width for buttons
  },


  listContainer:{
    flex:1  
  },
  guessRoundContainer:{
    flexDirection:'row',
    backgroundColor:'yellow',
    margin:10,
    justifyContent:'space-around',
    borderRadius:50,
    height:30,
    alignItems:'center'
  },

});
