import { styles } from "./StyleCards";
import { View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

function Ad() {
  return (
    <View style={styles.styles_all.adwert}>
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-8988485890107038/9592591435"
        onDidFailToReceiveAdWithError={(e) => {
          console.log(e);
        }}
      />
    </View>
  );
}

export default Ad;
