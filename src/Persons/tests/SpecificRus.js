import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "../../Styles";
import { Dimensions } from "react-native";
import Ad from "../../AdBlock";

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

function SpecificRus({ navigation }) {
  return (
    <View style={styles.styles2.view}>
      <Ad />
      <View style={styles.styles2.btnCont}>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() =>
            navigation.navigate("Per_TestLvl1", { name: "SpecificRus" })
          }
        >
          <Text style={styles.styles2.buttonText(fz)}>Уровень №1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() =>
            navigation.navigate("Per_TestLvl2", { name: "SpecificRus" })
          }
        >
          <Text style={styles.styles2.buttonText(fz)}>Уровень №2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles2.buttonText(fz)}>Уровень №3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SpecificRus;
