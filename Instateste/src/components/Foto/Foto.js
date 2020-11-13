import React, { Fragment, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import style from './style';
import { likeFoto, imgLike } from '../../api/curtidas';

const Foto = ({urlFoto, descricao, qntLikes}) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qntLikes);

  const clickLike = ()=> {
    const [nEcurtiu, qnt] = likeFoto(curtiu, likes)
    setLikes(qnt)
    setCurtiu(nEcurtiu)
  }

  return (
    <Fragment>
      <Image 
        source={require("../../../res/img/foto_3.jpg")}
        style={style.imagem}
      />

      <View style={style.viewLike}>

        <TouchableOpacity onPress={clickLike}>

          <Image 
            style={style.like}
            source={imgLike(curtiu)}
          />

        </TouchableOpacity>

        <Text style={style.espaco}>{likes}</Text>

      </View>

      {/* <Text style={style.desc}>{descricao}</Text> */}
      
      <Text style={style.desc}>Descrição da foto.</Text>
    </Fragment>
  )
};

export default Foto;
