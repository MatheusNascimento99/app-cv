import React from "react";
import { View, Text } from "react-native";
import { stylesFullHome } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <View style={stylesFullHome.container}>
      <StatusBar style="auto" />
      <Text>Página Inicial</Text>
    </View>
  );
};

export default HomeScreen;
