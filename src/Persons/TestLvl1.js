import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles, t_styles } from "../StyleTests";
import { test_names, tests } from "../TestJSON";
import BtnContTest from "../BtnContTest";
import Ad from "../AdBlock";

function TestLvl1({ navigation, route }) {
  function arrayRandElement(arr, question) {
    let rand = Math.floor(Math.random() * arr.length);

    let comf = arr[rand].text.split(" // ")[0];

    if (comf != question) {
      return arr[rand];
    } else {
      return arrayRandElement(arr, question);
    }
  }

  const [state_ren, setstate_ren] = useState(0);

  const letter_arr = ["А", "Б", "В", "Г"];

  let testNameEng = route.params.name;
  let question = route.params.question;

  let testName = test_names.find((test) => test.name === testNameEng).name_rus;

  let TestObj = tests
    .filter((test) => test.name === testName)
    .filter((test) => test.level === 1);
  TestObj = arrayRandElement(TestObj, question);
  let text = TestObj.text;
  let [qestion, answers] = text.split(" // ");
  let answers_arr = answers.split(" / ");

  let answer_accept = TestObj.answer.trim();
  answer_accept = answers_arr.indexOf(answer_accept);
  answer_accept = letter_arr[answer_accept];

  return (
    <View style={styles.styles_all.view}>
      <Ad />
      <ScrollView contentContainerStyle={t_styles.main}>
        <View style={t_styles.textDiv}>
          <Text style={t_styles.textTitle}>{qestion}</Text>
          <Text style={t_styles.text}>
            <Text style={t_styles.bold}>А)</Text> {answers_arr[0]}
          </Text>
          <Text style={t_styles.text}>
            <Text style={t_styles.bold}>Б)</Text> {answers_arr[1]}
          </Text>
          <Text style={t_styles.text}>
            <Text style={t_styles.bold}>В)</Text> {answers_arr[2]}
          </Text>
          <Text style={t_styles.text}>
            <Text style={t_styles.bold}>Г)</Text> {answers_arr[3]}
          </Text>
        </View>
      </ScrollView>
      <BtnContTest
        answer={answer_accept}
        navigation={navigation}
        setstate={setstate_ren}
        route={testNameEng}
        question={qestion}
        level={1}
      />
    </View>
  );
}

export default TestLvl1;
