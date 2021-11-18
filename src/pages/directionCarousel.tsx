import React, { useEffect, useState } from 'react'
import { ModalBaseProps, StyleSheet, Text, View } from 'react-native'
import Background from '../../assets/background.svg'
import Calcario1 from '../components/Calcario/Calcario1';
import Coque1 from '../components/Coque1';
import Ferro1 from '../components/Ferro1';
import Residuos1 from '../components/Residuos1';



export default function DirectionCarousel(){
    
    
    return (
        <View>
            <Background>
                {/* <Calcario1/> */}
                <Ferro1/>
                {/* <Coque1/> */}
                {/* <Residuos1/> */}
            </Background>
        </View>
    )
}

const styles = StyleSheet.create({})
