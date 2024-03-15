import { TouchableOpacity, View, Image } from "react-native";
import { Stylesheet } from "../../../styles/Stylesheet";
import { BtnImage } from "../../../Assets/Images";
import { AlertButton } from "../../../Assets/Script";

export default function ThreeBtnComponent({}) {
  return (
    <View>
      <TouchableOpacity onPress={AlertButton} style={Stylesheet.Btn}>
        <Image style={Stylesheet.Image} source={BtnImage} resizeMode="center" />
      </TouchableOpacity>
    </View>
  );
}
