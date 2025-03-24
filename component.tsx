import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function Component() {
    const [moeda, setMoeda] = useState('')

    function converter(valor) {

        if (valor == '') {
            alert("Campo vazio")
        } else {
            alert(`Valor dolar: $${(valor / 5.60).toFixed(2)} 
            \nValor euro: $${(valor / 6.18).toFixed(2)}`)
        }
    }

    return (
        // View é div 
        <View style={style.caixa}>

            <Text style={style.ctitle}>Valor:</Text>
            <TextInput style={style.cinput} keyboardType='numeric' value={moeda} onChangeText={setMoeda} />
            <Button title='Converter' 
            onPress={()=>converter(moeda)}/>

        </View>
    );
}

const style = StyleSheet.create({
    caixa: {
        backgroundColor: 'white',
        width: '55%',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },

    ctitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2196f3',
    },

    cinput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#2196f3',
        marginBottom: 15,
        marginTop: 10,
    }

})
