import * as React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../Styles";
import { Dimensions } from "react-native";
import Ad from "../AdBlock";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

let fz = 32;

if (ex.width > 520) {
  fz = 33;
}

if (ex.width > 600) {
  fz = 40;
}

if (ex.width > 925) {
  fz = 44;
}

if (ex.height < 750) {
  fz = 30;
}

if (ex.height < 675) {
  fz = 28;
}

if (ex.height < 600) {
  fz = 25;
}

function Persons({ navigation }) {
  return (
    <View style={styles.styles1.view}>
      <Ad />
      <ScrollView contentContainerStyle={styles.styles1.btnCont}>
        <TouchableOpacity
          style={[styles.styles1.button]}
          onPress={() => navigation.navigate("Per_Cards")}
        >
          <Text style={styles.styles1.buttonText(fz)}>Теория</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles1.button]}
          onPress={() => navigation.navigate("Per_Tests")}
        >
          <Text style={styles.styles1.buttonText(fz)}>Практика</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Persons;
