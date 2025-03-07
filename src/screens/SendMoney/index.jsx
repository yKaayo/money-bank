import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

// Components
import Card from "../../components/Card";
import Button from "../../components/Button";

// Icons
import ArrowLeftIcon from "../../assets/arrow_left.svg";

const SendMoney = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={tw`w-full bg-white min-h-svh`}>
      <View style={tw`mx-5 flex flex-col`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity style={tw`absolute`} onPress={() => navigation.navigate("home")}>
            <Button Icon={ArrowLeftIcon} />
          </TouchableOpacity>

          <View style={tw`flex flex-col mx-auto my-5`}>
            <Text style={tw`font-semibold text-xl -mt-[4px]`}>
              Enviar Dinheiro
            </Text>
          </View>
        </View>

        <Card />
      </View>
    </ScrollView>
  );
};

export default SendMoney;
