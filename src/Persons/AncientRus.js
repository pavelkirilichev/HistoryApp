import { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Ad from "../AdBlock";
import { cards, card_chapters } from "../CardJSON";
import { ChapterScreen, CardScreen } from "../CardScreen";

let ObjArr = [];
let ChaptersObj = card_chapters.filter(
  (chapter) => chapter.chapter_name === "Древняя Русь"
);

ChaptersObj.map((chapter) => {
  ObjArr.push(chapter);
  let CardArr = cards.filter((card) => card.name === chapter.name);
  CardArr.map((card) => {
    ObjArr.push(card);
  });
});

import { styles, c_styles } from "../StyleCards";

function AncientRus() {
  const [screen_index, setscreen_index] = useState(0);

  let screen;
  if (ObjArr[screen_index].chapter_name == null) {
    screen = <CardScreen card={ObjArr[screen_index]} />;
  } else {
    screen = <ChapterScreen chapter={ObjArr[screen_index]} />;
  }

  return (
    <View style={styles.styles_all.view}>
      <Ad />

      {screen}
      <View style={c_styles.btnDiv}>
        <TouchableOpacity
          onPress={() => {
            if (screen_index - 1 == -1) {
              setscreen_index(ObjArr.length - 1);
            } else {
              setscreen_index(screen_index - 1);
            }
          }}
          style={c_styles.swipeBtn}
        >
          <Image
            source={require("./arrow.png")}
            style={{ width: "20%", height: "50%" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (screen_index + 1 == ObjArr.length) {
              setscreen_index(0);
            } else {
              setscreen_index(screen_index + 1);
            }
          }}
          style={c_styles.swipeBtn}
        >
          <Image
            source={require("./m_arrow.png")}
            style={{ width: "20%", height: "50%" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AncientRus;
