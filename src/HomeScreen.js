import * as React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import Ad from "./AdBlock";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};
let fz = 30;

if (ex.width > 520) {
  fz = 31;
}

if (ex.width > 600) {
  fz = 38;
}

if (ex.width > 925) {
  fz = 42;
}

if (ex.height < 750) {
  fz = 28;
}

if (ex.height < 675) {
  fz = 26;
}

if (ex.height < 600) {
  fz = 23;
}

const styles = {
  adwert: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    backgroundColor: "transparent",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  view: {
    flex: 1,
    padding: 0,
    backgroundColor: "#dbdbdb",
  },
  text: {
    color: "red",
    fontSize: 30,
  },
  adwertText: {
    color: "#000",
    fontSize: 22,
  },
  btnCont: {
    marginTop: "15%",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#B3AEA2",
    width: "95%",
    height: "27.5%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#8F7669",
    borderWidth: 5,
    borderRadius: 10,
  },
  buttonText: (fz) => ({
    fontSize: fz,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }),
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Ad />
      <Text
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontSize: fz + 8,
        }}
      >
        Всемирная история ЕГЭ
      </Text>
      <ScrollView contentContainerStyle={styles.btnCont}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("Persons")}
        >
          <Text style={styles.buttonText(fz)}>Всемирная история</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.buttonText(fz)}>Личности</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.buttonText(fz)}>Термины</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
