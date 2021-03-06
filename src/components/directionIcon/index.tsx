import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ForwardArrow from '../../../assets/forwardArrow';
import LeftArrow from '../../../assets/leftArrow';
import RightArrow from '../../../assets/rightArrow';
import Route from '../../../assets/route';
import Wink from '../../../assets/wink';


type props = {
    currentState: number;
};

export default function Direction({currentState}: props) {
    if(currentState === 0) {
        return(
            <Route />
        )
    } else if (currentState === 1) {
        return (
            <LeftArrow />
        )
    } else if (currentState === 2) {
        return (
            <ForwardArrow />
        )
    } else if (currentState === 3) {
        return (
            <LeftArrow />
        )
    } else if (currentState === 4) {
        return (
            <LeftArrow />
        )
    } else {
        return (
            <Wink />
        )
    } 
}

const styles = StyleSheet.create({
    textStyle:{

        fontWeight: "bold",
    }

})
