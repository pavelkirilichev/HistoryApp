import * as React from "react";
import { Text, Button, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../StylesPers";

import { Dimensions } from "react-native";
import Ad from "../AdBlock";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

let fz = 22;

if (ex.width > 520) {
  fz = 23;
}

if (ex.width > 600) {
  fz = 30;
}

if (ex.width > 925) {
  fz = 34;
}

if (ex.height < 750) {
  fz = 22;
}

if (ex.height < 675) {
  fz = 20;
}

if (ex.height < 600) {
  fz = 18;
}
if (ex.height < 570) {
  fz = 15;
}

function Per_Tests({ navigation }) {
  return (
    <View style={styles.styles_all.view}>
      <Ad />
      <ScrollView contentContainerStyle={styles.styles_7.btnCont}>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("T_Per_AncientRus")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>Древняя Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("T_Per_SpecificRus")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>Удельная Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>Московская Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>
            Российская империя XVIII век
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>
            Российская империя XIX век
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>XX век</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_7.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_7.buttonText(fz)}>Все эпохи</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Per_Tests;
