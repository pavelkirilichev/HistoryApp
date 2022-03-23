import { styles } from "./StyleCards";
import { View } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

function Ad() {
  return (
    <View style={styles.styles_all.adwert}>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-8988485890107038~4723408137" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
    </View>
  );
}

export default Ad;
