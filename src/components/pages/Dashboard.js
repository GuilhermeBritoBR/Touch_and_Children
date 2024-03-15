import { View } from "react-native-web";
import OneTxtComponent from "../partials/TxtFolder/OneTxtComponent";
import OneBtnComponent from "../partials/BtnFolder/OneBtnComponent";
import SecondTxtComponent from "../partials/TxtFolder/SecondTxtComponent";
import SecondBtnComponent from "../partials/BtnFolder/SecondBtnComponent";
import ThreeTxtComponent from "../partials/TxtFolder/ThreeTxtComponent";
import ThreeBtnComponent from "../partials/BtnFolder/ThreeBtnComponent";
import { Stylesheet } from "../../styles/Stylesheet";

export default function Dashboard() {
  return (
    <View style={Stylesheet.Container}>
      <OneTxtComponent>
        <OneBtnComponent />
      </OneTxtComponent>
      <SecondTxtComponent>
        <SecondBtnComponent />
      </SecondTxtComponent>
      <ThreeTxtComponent>
        <ThreeBtnComponent />
      </ThreeTxtComponent>
    </View>
  );
}
