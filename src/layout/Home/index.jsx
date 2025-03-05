import { View, ScrollView } from "react-native";
import Card from "../../components/Card";
import tw from "twrnc";

const Home = () => {
  return (
    <ScrollView style={tw`w-full bg-white min-h-svh`}>
      <View style={tw`mx-5 flex flex-col`}>
        <Card />
      </View>
    </ScrollView>
  );
};

export default Home;
