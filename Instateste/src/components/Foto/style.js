import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const style = StyleSheet.create({
    imagem:{
      width:largura,
      height:largura,
      marginBottom:3
    },
    desc:{
      margin:6,
    },
    like:{
      width:30,
      height:30,
      marginLeft:6
    },
    viewLike:{
      flexDirection: "row",
      alignItems: "center",
    },
    espaco:{
      marginLeft:6
    }
})

export default style