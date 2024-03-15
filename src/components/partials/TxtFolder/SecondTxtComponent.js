import { View, Text } from "react-native-web";

export default function SecondTxtComponent({ children }) {
  return (
    <View>
      <Text>Second Component</Text>
      {children}
    </View>
  );
}
