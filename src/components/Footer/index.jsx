import { View, Text } from "react-native";
import tw from "twrnc";

// Icons
import HomeIcon from "../../assets/home_icon.svg";
import PieIcon from "../../assets/pie_icon.svg";

// Components
import FooterItem from "../FooterItem";

const Footer = () => {
  return (
    <View
      style={tw`absolute bottom-0 z-[1] h-[60px] w-full bg-gray-400 flex flex-row justify-around py-2`}
    >
      <FooterItem text="Início" Icon={HomeIcon} route="home" />
      <FooterItem text="Carteira" Icon={PieIcon} route="wallet" />
    </View>
  );
};

export default Footer;
