/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
} from "react-native";
import { Comentarios } from './src/components/Comentarios';
import { Cabecalho } from './src/components/Cabecalho';
import { Foto } from './src/components/Foto';
import lerFotos from './src/api/feed';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(()=>{
    lerFotos(setFotos);
  }, [])

  return (
    <ScrollView>

      <FlatList
      data={fotos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=> 

        <Fragment>
          <Cabecalho 
            nomeUsuario={item.userName}
            urlImage={item.userURL} 
          />

          <Foto 
            // urlFoto={item.url}
            descricao={item.description}
            qntLikes={item.likes}
          />

          <Comentarios 
            comentarios={item.comentarios}
          />
          
        </Fragment>
      }
      />

    </ScrollView>
  )
};

export default App;
