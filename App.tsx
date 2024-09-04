import Home from "./src/screens/Home/HomeScreen";
import Contact from "./src/screens/Habilidades/SkillScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CONTATO" component={Contact}/>
        <Tab.Screen name="HABILIDADES" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
