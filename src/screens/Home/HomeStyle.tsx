import { StyleSheet } from "react-native";

export const stylesFullHome = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    width: "auto",
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 2,
  },
  AllLinks:{
    padding:5
  },
  lkd: {
    backgroundColor:'#0A66C2',
    borderColor: "blue",
    borderWidth: 2,
    padding:5,
    margin:3,
    borderRadius:8,
  },
  git: {
    backgroundColor:"#2C3036",
    borderColor: "black",
    borderWidth: 2,
    padding:5,
    margin:3,
    borderRadius:8,
  },
  email: {
    backgroundColor:"#FF5700",
    borderColor: "orange",
    borderWidth: 2,
    padding:5,
    margin:3,
    borderRadius:8,
  },
  containerFotoPerfil: {
    width:300,
    borderColor: "green",
    borderWidth: 2,
    alignItems: "center",
    paddingBottom: 10,
  },
  fotoPerfil: {
    resizeMode: "cover",
    width: 300,
    height: 300,
    borderRadius:10,
  },
  Text:{
    fontWeight:800,
    color:"pink",
    textAlign:"center",
  },
});
