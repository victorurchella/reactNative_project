import React, { Fragment } from 'react';
import {
  Text,
  Image,
  View,
} from "react-native";
import style from "./style"

const Cabecalho = ({nomeUsuario, urlImage}) =>{
    return (
        <View style={style.cabecalho}>
            <Image 
            source={{ uri: urlImage }} 
            style={style.fotoUsuario}
            />
            <Text style={style.userN}>{nomeUsuario}</Text>

        </View>
    )
}

export default Cabecalho;