import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

// Components
import Button from "../../components/Button";
import Footer from "../../components/Footer";

// Icons
import ArrowLeftIcon from "../../assets/arrow_left.svg";

const Wallet = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={tw`w-full bg-white min-h-full py-3`}>
        <View style={tw`mx-5 flex flex-col gap-4`}>
          <View style={tw`flex flex-row items-center`}>
            <TouchableOpacity
              style={tw`absolute`}
              onPress={() => navigation.navigate("home")}
            >
              <Button Icon={ArrowLeftIcon} />
            </TouchableOpacity>

            <Text style={tw`font-semibold text-xl mx-auto my-5`}>Carteira</Text>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </>
  );
};

export default Wallet;
