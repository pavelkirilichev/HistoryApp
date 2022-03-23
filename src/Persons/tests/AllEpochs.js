import * as React from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";
import Ad from "../../AdBlock";
import { Dimensions } from "react-native";
import styles from "../../Styles";

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

function AllEpochs({ navigation }) {
  return (
    <View style={styles.styles_all.view}>
      <Ad />
      <View style={styles.styles2.btnCont}>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() =>
            navigation.navigate("Per_TestLvl1", { name: "AllEpochs" })
          }
        >
          <Text style={styles.styles2.buttonText}>Уровень №1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() =>
            navigation.navigate("Per_TestLvl2", { name: "AllEpochs" })
          }
        >
          <Text style={styles.styles2.buttonText}>Уровень №2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles2.button]}
          onPress={() =>
            navigation.navigate("Per_TestLvl3", { name: "AllEpochs" })
          }
        >
          <Text style={styles.styles2.buttonText}>Уровень №3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AllEpochs;
