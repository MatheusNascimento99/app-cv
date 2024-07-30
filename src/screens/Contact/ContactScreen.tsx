import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { stylesContact } from './ContactStyle';

const ContactScreen = () => {
  return (
    <View style={stylesContact.container}>
      <Text>Página Contatos</Text>
    </View>
  );
};

export default ContactScreen;
