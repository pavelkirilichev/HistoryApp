import { Text, View, ScrollView, Image } from "react-native";
import { c_styles } from "./StyleCards";
import topicImages from "./ImgArr";
import { Dimensions } from "react-native";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

let height = 275;

if (ex.height > 900) {
  height = 400;
}
if (ex.height > 1200) {
  height = 500;
}

const styleImg = {
  img: {
    marginTop: 10,
    width: "95%",
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    resizeMode: "contain",
  },
  imgDiv: (height) => ({
    width: "100%",
    height: height,
    backgroundColor: "#B3AEA2",
    justifyContent: "center",
    alignItems: "center",
    //flex: 1,
  }),
};

function ChapterScreen({ chapter }) {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={c_styles.chapterTitle}>
        <Text style={c_styles.textTitle}>{chapter.name}</Text>
      </View>
      <View style={c_styles.chapterTextDiv}>
        <Text style={c_styles.chapterText}>{chapter.argument}</Text>
      </View>
    </ScrollView>
  );
}

function CardScreen({ card }) {
  let index = card.id - 1;
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={styleImg.imgDiv(height)}>
        <Image source={topicImages[index]} style={styleImg.img} />
      </View>
      <View style={c_styles.chapterTitle}>
        <Text style={c_styles.textTitle}>Страна: {card.country}</Text>
      </View>
      <View style={c_styles.chapterTitle}>
        <Text style={c_styles.textTitle}>Факты</Text>
      </View>
      <View style={c_styles.chapterTextDiv}>
        <Text style={c_styles.chapterText}>{card.facts}</Text>
      </View>
      <View style={c_styles.chapterTitle}>
        <Text style={c_styles.textTitle}>Полный аргумент</Text>
      </View>
      <View style={c_styles.chapterTextDiv}>
        <Text style={c_styles.chapterText}>{card.full_argument}</Text>
      </View>
    </ScrollView>
  );
}

export { ChapterScreen, CardScreen };
