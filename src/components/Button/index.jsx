import { View, Text } from "react-native";
import tw from "twrnc";

const Button = ({ Icon, text }) => {
  return (
    <View style={tw`flex flex-col items-center`}>
      <View style={tw`flex justify-between items-center bg-gray-400 rounded-full size-10 p-2`}>
        <Icon />
      </View>

      <Text style={tw`mt-2`}>{text}</Text>
    </View>
  );
};

export default Button;
