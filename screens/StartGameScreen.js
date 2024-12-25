import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/primaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";

function StartGameScreen(props) {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (currentText) => {
    setEnteredText(currentText);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredText);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    props.numberHandler(chosenNumber);
    console.log("ENtered number is : ", chosenNumber);
  };

  const resetHandler = () => {
    setEnteredText("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.titleContainer}>Guess my Number</Title>
      <View style={styles.inputContainer}>
        <Text>Enter Your number to guess </Text>
        <TextInput
          value={enteredText}
          onChangeText={inputHandler}
          style={styles.textBoxContainer}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
  },
  titleContainer:{
    color:'white' ,
    borderColor:'white',
    borderWidth:2
  },
  inputContainer: {
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    padding: 24,
    marginTop: 40,
    borderRadius: 20,
    elevation: 20, // Shadow for Android
    shadowColor: "black", // Shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    alignItems: "center", // Center contents horizontally
  },
  textBoxContainer: {
    height: 60,
    width: 100,
    borderBottomColor: Colors.darkYellow,
    // fontSize: 32,
    fontFamily:'sansBold',
    borderBottomWidth: 4,
    color: Colors.darkYellow,
    marginVertical: 10,
    textAlign: "center", // Centers the text inside the input
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row", // Arrange buttons side by side
    marginTop: 20,
  },
  buttonWrapper: {
    flex: 1, // Equal width for buttons
    marginHorizontal: 8,
  },
});
