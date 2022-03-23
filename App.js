import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";

import WorldHistory from "./src/WorldHistory/WorldHistory";
import WH_Cards from "./src/WorldHistory/Cards";
import WH_Process from "./src/WorldHistory/Process";
import WH_Countries from "./src/WorldHistory/Сountries";
import WH_Epochs from "./src/WorldHistory/Epochs";
import WH_Tests from "./src/WorldHistory/Tests";
import WH_FactConsequence from "./src/WorldHistory/FactConsequence";
import WH_ProcessArg from "./src/WorldHistory/ProcessArg";
import WH_RusWorldHis from "./src/WorldHistory/RusWorldHis";

import Terms from "./src/Terms/Terms";
import T_Cards from "./src/Terms/Cards";
import T_Rulers from "./src/Terms/Rulers";
import T_Spheres from "./src/Terms/Spheres";
import T_Epochs from "./src/Terms/Epochs";
import T_Tests from "./src/Terms/Tests";
import T_TestLvl1 from "./src/Terms/TestLvl1";
import T_TestLvl2 from "./src/Terms/TestLvl2";
import T_TestLvl3 from "./src/Terms/TestLvl3";

import Persons from "./src/Persons/Persons";
import Per_Cards from "./src/Persons/Cards";
import Per_Tests from "./src/Persons/Tests";

import Per_AncientRus from "./src/Persons/AncientRus";
import Per_SpecificRus from "./src/Persons/SpecificRus";
import Per_MoscowRus from "./src/Persons/MoscowRus";
import Per_Rus18 from "./src/Persons/Rus18";
import Per_Rus19 from "./src/Persons/Rus19";
import Per_Century20 from "./src/Persons/Сentury20";

import T_Per_AncientRus from "./src/Persons/tests/AncientRus";
import T_Per_SpecificRus from "./src/Persons/tests/SpecificRus";
import T_Per_MoscowRus from "./src/Persons/tests/MoscowRus";
import T_Per_Rus18 from "./src/Persons/tests/Rus18";
import T_Per_Rus19 from "./src/Persons/tests/Rus19";
import T_Per_Century20 from "./src/Persons/tests/Сentury20";
import T_AllEpochs from "./src/Persons/tests/AllEpochs";

import Per_TestLvl1 from "./src/Persons/TestLvl1";
import Per_TestLvl2 from "./src/Persons/TestLvl2";
import Per_TestLvl3 from "./src/Persons/TestLvl3";
import ToBeCont from "./src/ToBeCont";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Меню" }}
        />

        <Stack.Screen
          name="WorldHistory"
          component={WorldHistory}
          options={{ title: "Всемирная история" }}
        />
        <Stack.Screen
          name="WH_Cards"
          component={WH_Cards}
          options={{ title: "Карточки" }}
        />
        <Stack.Screen
          name="WH_Tests"
          component={WH_Tests}
          options={{ title: "Тесты" }}
        />

        <Stack.Screen
          name="WH_Process"
          component={WH_Process}
          options={{ title: "Процессы" }}
        />
        <Stack.Screen
          name="WH_Countries"
          component={WH_Countries}
          options={{ title: "Страны" }}
        />
        <Stack.Screen
          name="WH_Epochs"
          component={WH_Epochs}
          options={{ title: "Эпохи" }}
        />

        <Stack.Screen
          name="WH_FactConsequence"
          component={WH_FactConsequence}
          options={{ title: "Факт-Следствие" }}
        />
        <Stack.Screen
          name="WH_ProcessArg"
          component={WH_ProcessArg}
          options={{ title: "Процесс-Аргумент" }}
        />
        <Stack.Screen
          name="WH_RusWorldHis"
          component={WH_RusWorldHis}
          options={{ title: "Россия — Всемирная история" }}
        />

        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{ title: "Термины" }}
        />
        <Stack.Screen
          name="T_Cards"
          component={T_Cards}
          options={{ title: "Карточки" }}
        />
        <Stack.Screen
          name="T_Tests"
          component={T_Tests}
          options={{ title: "Тесты" }}
        />

        <Stack.Screen
          name="T_Spheres"
          component={T_Spheres}
          options={{ title: "Сферы" }}
        />
        <Stack.Screen
          name="T_Rulers"
          component={T_Rulers}
          options={{ title: "Правители" }}
        />
        <Stack.Screen
          name="T_Epochs"
          component={T_Epochs}
          options={{ title: "Эпохи" }}
        />

        <Stack.Screen
          name="T_TestLvl1"
          component={T_TestLvl1}
          options={{ title: "Уровень №1" }}
        />
        <Stack.Screen
          name="T_TestLvl2"
          component={T_TestLvl2}
          options={{ title: "Уровень №2" }}
        />
        <Stack.Screen
          name="T_TestLvl3"
          component={T_TestLvl3}
          options={{ title: "Уровень №3" }}
        />

        <Stack.Screen
          name="Persons"
          component={Persons}
          options={{ title: "Всемирная история" }}
        />
        <Stack.Screen
          name="Per_Cards"
          component={Per_Cards}
          options={{ title: "Теория" }}
        />
        <Stack.Screen
          name="Per_Tests"
          component={Per_Tests}
          options={{ title: "Практика" }}
        />

        <Stack.Screen
          name="Per_AncientRus"
          component={Per_AncientRus}
          options={{ title: "Древняя Русь" }}
        />
        <Stack.Screen
          name="Per_SpecificRus"
          component={Per_SpecificRus}
          options={{ title: "Удельная Русь" }}
        />
        <Stack.Screen
          name="Per_MoscowRus"
          component={Per_MoscowRus}
          options={{ title: "Московсая Русь" }}
        />
        <Stack.Screen
          name="Per_Rus18"
          component={Per_Rus18}
          options={{ title: "Российская империя XVIII век" }}
        />
        <Stack.Screen
          name="Per_Rus19"
          component={Per_Rus19}
          options={{ title: "Российская империя XIX век" }}
        />
        <Stack.Screen
          name="Per_Century20"
          component={Per_Century20}
          options={{ title: "XX век" }}
        />

        <Stack.Screen
          name="T_Per_AncientRus"
          component={T_Per_AncientRus}
          options={{ title: "Древняя Русь" }}
        />
        <Stack.Screen
          name="T_Per_SpecificRus"
          component={T_Per_SpecificRus}
          options={{ title: "Удельная Русь" }}
        />
        <Stack.Screen
          name="T_Per_MoscowRus"
          component={T_Per_MoscowRus}
          options={{ title: "Московсая Русь" }}
        />
        <Stack.Screen
          name="T_Per_Rus18"
          component={T_Per_Rus18}
          options={{ title: "Российская империя XVIII век" }}
        />
        <Stack.Screen
          name="T_Per_Rus19"
          component={T_Per_Rus19}
          options={{ title: "Российская империя XIX век" }}
        />
        <Stack.Screen
          name="T_Per_Century20"
          component={T_Per_Century20}
          options={{ title: "XX век" }}
        />
        <Stack.Screen
          name="T_AllEpochs"
          component={T_AllEpochs}
          options={{ title: "Все эпохи" }}
        />

        <Stack.Screen
          name="Per_TestLvl1"
          component={Per_TestLvl1}
          options={{ title: "Уровень №1" }}
        />
        <Stack.Screen
          name="Per_TestLvl2"
          component={Per_TestLvl2}
          options={{ title: "Уровень №2" }}
        />
        <Stack.Screen
          name="Per_TestLvl3"
          component={Per_TestLvl3}
          options={{ title: "Уровень №3" }}
        />

        <Stack.Screen
          name="ToBeCont"
          component={ToBeCont}
          options={{ title: "Скоро..." }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
