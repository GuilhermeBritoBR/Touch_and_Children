import { View, Text } from "react-native-web";

export default function ThreeTxtComponent({ children }) {
  return (
    <View>
      <Text>Three Component</Text>
      {children}
    </View>
  );
}
