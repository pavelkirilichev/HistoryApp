import { Text, View, ScrollView, Image } from "react-native";
import { c_styles } from "./StyleCards";
import topicImages from "./ImgArr";
import { Dimensions } from "react-native";

const ex = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const styleImg = {
  img: {
    marginTop: 0,
    marginBottom: 0,
    flex: 1,
    width: "95%",
    height: 350,
    resizeMode: "contain",
  },
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
      <Image source={topicImages[index]} style={styleImg.img} />
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
