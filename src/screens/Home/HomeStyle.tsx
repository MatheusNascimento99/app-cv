import { StyleSheet } from "react-native";

export const stylesFullHome = StyleSheet.create({
  container: {
    backgroundColor: "#dedafb",
    width: "auto",
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  AllLinks:{
    padding:5,
    marginTop:20,
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
    backgroundColor:"#D91110",
    borderColor: "orange",
    borderWidth: 2,
    padding:5,
    margin:3,
    borderRadius:8,
  },
  containerFotoPerfil: {
    width:300,
    alignItems: "center",
    paddingBottom: 10,
  },
  fotoPerfil: {
    resizeMode: "cover",
    width: 180,
    height: 180,
    borderRadius:100,
  },
  txtName:{
    fontWeight:"700",
    fontSize:24
  },
  Text:{
    fontWeight:"800",
    color:"#dedafb",
    textAlign:"center",
  },
});
