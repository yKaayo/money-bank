import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SendMoney from "../screens/SendMoney";
import RequestMoney from "../screens/RequestMoney";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="send" component={SendMoney} />
      <Tab.Screen name="request" component={RequestMoney} />
    </Tab.Navigator>
  );
}
