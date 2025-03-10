import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

// Class
import { client, account } from "../../class/main";

// Components
import Card from "../../components/Card";
import Button from "../../components/Button";

// Icons
import ArrowLeftIcon from "../../assets/arrow_left.svg";
import PlusIcon from "../../assets/plus_icon.svg";

// Utils
import currency from "../../utils/currency";

const SendMoney = () => {
  const [value, setValue] = useState(0);

  const navigation = useNavigation();

  const handleValueChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setValue(numericValue ? parseFloat(numericValue) / 100 : 0);
  };

  return (
    <ScrollView style={tw`w-full bg-white min-h-full py-3`}>
      <View style={tw`mx-5 flex flex-col gap-4`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity
            style={tw`absolute`}
            onPress={() => navigation.navigate("home")}
          >
            <Button Icon={ArrowLeftIcon} />
          </TouchableOpacity>

          <Text style={tw`font-semibold text-xl mx-auto my-5`}>
            Enviar Dinheiro
          </Text>
        </View>

        <Card name={client.name} cardNum={account.cardNumber} />

        <View
          style={tw`flex flex-col items-start gap-3 border border-gray-400 rounded-xl p-2`}
        >
          <Text style={tw`text-lg`}>Enviar para:</Text>

          <View style={tw`flex flex-col items-center gap-1 mx-1`}>
            <View style={tw`p-1 rounded-full border border-blue-600 size-10`}>
              <PlusIcon />
            </View>

            <Text>Adicionar</Text>
          </View>
        </View>

        <View
          style={tw`flex flex-col gap-2 border border-gray-400 rounded-xl px-2 py-5`}
        >
          <View style={tw`flex flex-row justify-between`}>
            <Text>Digite o valor:</Text>
            <Text style={tw`text-red-600`}>Mudar Moeda?</Text>
          </View>
          <View style={tw`flex flex-row gap-5`}>
            <Text style={tw`text-2xl text-gray-400 font-semibold`}>BRL</Text>

            <View style={tw`flex flex-row items-center`}>
              <TextInput
                value={currency(value)}
                onChangeText={handleValueChange}
                style={[
                  tw`text-2xl font-semibold`,
                  { outlineWidth: 0, outlineColor: "transparent" },
                ]}
                placeholder="0,00"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => (account.take(value), console.log(account))}
        >
          <Text
            style={tw`px-5 py-3 rounded-xl bg-blue-600 text-lg text-white text-center font-semibold`}
          >
            Enviar o Dinheiro
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SendMoney;
