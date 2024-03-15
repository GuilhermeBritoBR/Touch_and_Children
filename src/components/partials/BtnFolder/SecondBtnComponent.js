import { TouchableOpacity, View, Text } from "react-native-web";
import { Stylesheet } from "../../../styles/Stylesheet";
import { AlertButton } from "../../../Assets/Script";

export default function SecondBtnComponent({}) {
  return (
    <View>
      <TouchableOpacity onPress={AlertButton} style={Stylesheet.Btn}>
        <Text>Sig in</Text>
      </TouchableOpacity>
    </View>
  );
}
