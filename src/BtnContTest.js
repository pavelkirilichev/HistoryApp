import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { t_styles } from "./StyleTests";
import { Dimensions } from "react-native";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

let c_razm = 160;
let fz = 22;
let des = 0;

if (ex.width < 400) {
  c_razm = 140;
  fz = 21;
}
if (ex.width < 350) {
  c_razm = 125;
  fz = 20;
}
if (ex.width > 700) {
  c_razm = 250;
  fz = 24;
}
if (ex.width > 900) {
  c_razm = 325;
  fz = 26;
}

function BtnContTest({ answer, navigation, setstate, route, question, level }) {
  const [color_1, setcolor_1] = useState("#B3AEA2");
  const [color_2, setcolor_2] = useState("#B3AEA2");
  const [color_3, setcolor_3] = useState("#B3AEA2");
  const [color_4, setcolor_4] = useState("#B3AEA2");

  function ChoiseAnswer(answer_accept, answer, question) {
    if (des == 0) {
      if (answer == answer_accept) {
        if (answer == "А") {
          setcolor_1("#19f965");
        }
        if (answer == "Б") {
          setcolor_2("#19f965");
        }
        if (answer == "В") {
          setcolor_3("#19f965");
        }
        if (answer == "Г") {
          setcolor_4("#19f965");
        }
      } else {
        if (answer_accept == "А") {
          setcolor_1("#47acef");
        }
        if (answer_accept == "Б") {
          setcolor_2("#47acef");
        }
        if (answer_accept == "В") {
          setcolor_3("#47acef");
        }
        if (answer_accept == "Г") {
          setcolor_4("#47acef");
        }

        if (answer == "А") {
          setcolor_1("#fa1931");
        }
        if (answer == "Б") {
          setcolor_2("#fa1931");
        }
        if (answer == "В") {
          setcolor_3("#fa1931");
        }
        if (answer == "Г") {
          setcolor_4("#fa1931");
        }
      }

      let test_route = "";
      if (level == 1) {
        test_route = "Per_TestLvl1";
      }
      if (level == 2) {
        test_route = "Per_TestLvl2";
      }
      if (level == 3) {
        test_route = "Per_TestLvl3";
      }
      des = 1;
      setTimeout(() => {
        setstate(1);
        setcolor_1("#B3AEA2");
        setcolor_2("#B3AEA2");
        setcolor_3("#B3AEA2");
        setcolor_4("#B3AEA2");
        des = 0;
        navigation.navigate(test_route, { name: route, question: question });
      }, 1500);
    }
  }

  return (
    <View style={t_styles.btnCont}>
      <TouchableOpacity
        style={[t_styles.button(c_razm), { backgroundColor: color_1 }]}
        onPress={() => ChoiseAnswer(answer, "А", question)}
      >
        <Text style={t_styles.buttonText(fz)}>А</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[t_styles.button(c_razm), { backgroundColor: color_2 }]}
        onPress={() => ChoiseAnswer(answer, "Б", question)}
      >
        <Text style={t_styles.buttonText(fz)}>Б</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[t_styles.button(c_razm), { backgroundColor: color_3 }]}
        onPress={() => ChoiseAnswer(answer, "В", question)}
      >
        <Text style={t_styles.buttonText(fz)}>В</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[t_styles.button(c_razm), { backgroundColor: color_4 }]}
        onPress={() => ChoiseAnswer(answer, "Г", question)}
      >
        <Text style={t_styles.buttonText(fz)}>Г</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BtnContTest;
