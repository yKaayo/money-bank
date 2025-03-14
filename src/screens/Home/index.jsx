import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

// Class
import { client, account } from "../../class/main"

// Components
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

// Icons
import ArrowTopIcon from "../../assets/arrow_top_icon.svg";
import ArrowDownIcon from "../../assets/arrow_down_icon.svg";
import SearchIcon from "../../assets/search_icon.svg";

const Home = () => {
  const navigation = useNavigation();

  console.log(client);
  console.log(account);

  return (
    <>
      <ScrollView style={tw`w-full bg-white min-h-full py-3`}>
        <View style={tw`mx-5 flex flex-col`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`flex flex-col mx-auto my-5`}>
              <Text style={tw`text-gray-400`}>Bem vindo</Text>
              <Text style={tw`font-semibold text-xl -mt-[4px]`}>
                {client.name}
              </Text>
            </View>

            <Button Icon={SearchIcon} />
          </View>

          <Card name={client.name} cardNum={account.cardNumber} />

          <View style={tw`flex flex-row justify-between px-5 my-10`}>
            <TouchableOpacity onPress={() => navigation.navigate("send")}>
              <Button Icon={ArrowTopIcon} text="Enviar" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("request")}>
              <Button Icon={ArrowDownIcon} text="Receber" />
            </TouchableOpacity>
          </View>

          <View style={tw`flex flex-row justify-between items-center`}>
            <Text style={tw`font-semibold text-xl`}>Transações</Text>
            <Text>Ver tudo</Text>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </>
  );
};

export default Home;
