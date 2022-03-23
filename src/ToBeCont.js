import { View, Text } from "react-native";

const styles = {
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbdbdb",
  },
  text: {
    fontSize: 50,
  },
};

function ToBeCont() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Скоро...</Text>
    </View>
  );
}

export default ToBeCont;
