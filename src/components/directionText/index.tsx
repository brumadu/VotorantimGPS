import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type props = {
    currentState: number;
};

export default function DirectionText({ currentState }: props) {

    if (currentState === 0) {
        return (
            <Text style={styles.textStyle}>Carregamento de Calcario</Text>
        )
    }else if (currentState === 1) {
        return (
            <Text style={styles.textStyle}>Vire a esquerda</Text>
        )
    } else if (currentState === 2) {
        return (
            <Text style={styles.textStyle}>Siga Reto</Text>

        )
    } else if (currentState === 3) {
        return (
            <Text style={styles.textStyle}>Vire a esquerda</Text>

        )
    } else if (currentState === 4) {
        return (
            <Text style={styles.textStyle}>Vire a esquerda</Text>

        )
    } else {
        return (
            <Text style={styles.textStyle}>Você chegou ao seu destino!</Text>

        )
    }
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    }

})
