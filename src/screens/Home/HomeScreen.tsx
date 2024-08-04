import { View, Text, Pressable, Linking } from "react-native";
import { stylesFullHome } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const urlLinkedin =
    "https://www.linkedin.com/in/matheus-nascimento-106a00226/";
  const urlGitHub = "https://github.com/MatheusNascimento99";
  const urlPortfolio = "https://portfolio-fawn-five-18.vercel.app/";

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={stylesFullHome.container}>
      <StatusBar style="auto" />
      <View>
        <View style={stylesFullHome.lkd}>
          <Pressable onPress={() => openLink(urlLinkedin)}>
            <Text>LINKEDIN</Text>
          </Pressable>
        </View>
        <View style={stylesFullHome.git}>
          <Pressable onPress={() => openLink(urlGitHub)}>
            <Text>GITHUB</Text>
          </Pressable>
        </View>
        <View style={stylesFullHome.email}>
          <Pressable onPress={() => openLink(urlPortfolio)}>
            <Text>PORTFÓLIO</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
