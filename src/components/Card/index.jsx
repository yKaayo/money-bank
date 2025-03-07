import { Text, View, Image, ImageBackground } from "react-native";
import tw from "twrnc";
import WifiIcon from "../../assets/wifi_icon.svg";
import ChipIcon from "../../assets/chip_icon.svg";
import MasterCardIcon from "../../assets/mastercard_icon.svg";


const Card = () => {
  return (
    <ImageBackground
      style={tw`flex flex-col justify-between w-full h-[300px] bg-black bg-cover p-5 rounded-xl`}
      source={require("../../assets/worldmap.webp")}
    >
      <View style={tw`flex flex-row justify-between w-full`}>
        <ChipIcon />
        <WifiIcon />
      </View>

      <Text style={tw`text-white font-medium text-2xl mx-auto`}>
        0000 0000 0000 0000
      </Text>

      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`flex flex-row gap-5`}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-gray-300`}>Validade</Text>
            <Text style={tw`text-white font-medium`}>01/2000</Text>
          </View>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-gray-300`}>CVV</Text>
            <Text style={tw`text-white font-medium`}>000</Text>
          </View>
        </View>

        <View style={tw`flex flex-col items-center`}>
          <MasterCardIcon />
          <Text style={tw`text-white`}>Mastercard</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;
