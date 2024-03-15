import { View, Text } from "react-native-web";

export default function OneTxtComponent({ children }) {
  return (
    <View>
      <Text>First Component</Text>
      {children}
    </View>
  );
}
