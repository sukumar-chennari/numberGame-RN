import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children,onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: '#590747' }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 8,
  },
  buttonContainer: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e651e8',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  buttonText: {
    color: 'white',
    fontWeight: '600', // Use numeric weight for React Native
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75, // Adds feedback for pressed state
  },
});
