import { Pressable, Text } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const FooterItem = ({ text, Icon, route }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      style={tw`flex flex-col items-center`}
    >
      <Icon />
      <Text style={tw`font-semibold text-md`}>{text}</Text>
    </Pressable>
  );
};

export default FooterItem;
