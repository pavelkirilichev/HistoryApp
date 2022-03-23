import * as React from "react";
import { Text, Button, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../StylesPers";

import { Dimensions } from "react-native";
import Ad from "../AdBlock";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

let fz = 23;

if (ex.width > 520) {
  fz = 24;
}

if (ex.width > 600) {
  fz = 31;
}

if (ex.width > 925) {
  fz = 35;
}

if (ex.height < 750) {
  fz = 23;
}

if (ex.height < 675) {
  fz = 21;
}

if (ex.height < 600) {
  fz = 19;
}
if (ex.height < 570) {
  fz = 17;
}
function Per_Tests({ navigation }) {
  return (
    <View style={styles.styles_all.view}>
      <Ad />
      <ScrollView contentContainerStyle={styles.styles_6.btnCont}>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("Per_AncientRus")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>Древняя Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("Per_SpecificRus")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>Удельная Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>Московская Русь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>
            Российская империя XVIII век
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>
            Российская империя XIX век
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.styles_6.button]}
          onPress={() => navigation.navigate("ToBeCont")}
        >
          <Text style={styles.styles_6.buttonText(fz)}>XX век</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Per_Tests;
