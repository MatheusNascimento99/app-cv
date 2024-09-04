import { View, Text, Pressable, Linking, Image } from "react-native";
import { stylesFullHome } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";
import FotoPerfil from '../../../assets/FotoPerfil.png';

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
      <View style={stylesFullHome.containerFotoPerfil}>
        <Image style={stylesFullHome.fotoPerfil} source={FotoPerfil}/>
        <Text style={stylesFullHome.txtName}>Matheus Nascimento</Text>
      </View>
      <View style={stylesFullHome.AllLinks}>
        <View style={stylesFullHome.lkd}>
          <Pressable onPress={() => openLink(urlLinkedin)}>
            <Text style={stylesFullHome.Text}>LINKEDIN</Text>
          </Pressable>
        </View>
        <View style={stylesFullHome.git}>
          <Pressable onPress={() => openLink(urlGitHub)}>
            <Text style={stylesFullHome.Text}>GITHUB</Text>
          </Pressable>
        </View>
        <View style={stylesFullHome.email}>
          <Pressable onPress={() => openLink(urlPortfolio)}>
            <Text style={stylesFullHome.Text}>PORTFÓLIO</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
