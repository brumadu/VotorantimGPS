import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type props = {
    currentState: number;
};

export default function Distance({ currentState }: props) {
    if (currentState === 0) {
        return (
            <View style={styles.StartButton}>
                <Text style={styles.textStyle}>Inicie Sua rota</Text>
            </View>
        )
    }else if (currentState === 1) {
        return (
            <Text style={styles.textStyle}>300 Metros</Text>
        )
    } else if (currentState === 2) {
        return (
            <Text style={styles.textStyle}>600 Metros</Text>
        )
    } else if (currentState === 3) {
        return (
            <Text style={styles.textStyle}>600 Metros</Text>
        )
    } else if (currentState === 4) {
        return (
            <Text style={styles.textStyle}>500 Metros</Text>
        )
    } else {
        return (
            <Text style={styles.textStyle}>Faça seu procedimento com segurança!</Text>
        )
    }
}

const styles = StyleSheet.create({
    StartButton:{
        width: "100%",
        height: "30%",
        backgroundColor: "#100f0d",
        borderRadius: 20,
        justifyContent: "center",
    },
    textStyle:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    }

})
