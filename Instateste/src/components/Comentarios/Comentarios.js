import React, { Fragment, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
  onChangeText,
} from "react-native";
import style from './style';


const Comentarios = ( { comentarios} ) => {

    const [estComentario, setComentario] = useState(comentarios)

    const addComentario = () => {
        campoInput.clear();

        const novoComentario = {
            date: Date.now(),
            text: contCampoInput,
            userName: "Victor"
        }

        setComentario([...estComentario, novoComentario]);
    }

    let campoInput;
    let contCampoInput = "";
    return (
        <Fragment>
            <FlatList
                data={estComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item})=> 
                <View style={style.viewF}>
                    <Text style={style.espaco, style.userN}>{item.userName} </Text>
                    <Text style={style.espaco}>{item.text}</Text>
                </View>
            } 
            />

            <View style={style.viewF}>
                <TextInput 
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => contCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={addComentario}>
                    <Image 
                        source={require("../../../res/img/send.png")}
                        style={style.send}
                    />
                </TouchableOpacity>
            </View>

        </Fragment>
    )

}

export default Comentarios;