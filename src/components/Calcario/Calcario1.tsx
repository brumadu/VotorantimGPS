import React, { useEffect, useState } from 'react'
import { StyleSheet, Pressable, Text, View, ModalBaseProps } from 'react-native'
import Background from '../../../assets/background';
import BackgroundSuccess from '../../../assets/backgroundSuccess';
import Direction from '../directionIcon';
import DirectionText from '../directionText';
import Distance from '../distance';
import Tts from 'react-native-tts';
import BackButton from '../BackButton';
import { styles } from './style';
import AntDesign from '@expo/vector-icons/build/AntDesign';

export type CarouselState = {
    currentStep: number;
    goNext: () => void;
    goBack: () => void;
};

export default function Calcario1() {
    const [currentStep, setCurrentStep] = useState(0);
    const [carousel, setCarousel] = useState({
        currentStep: currentStep,
        goNext: handleNextStep,
        goBack: handlePrevStep,
    } as CarouselState);

    function handleNextStep() {
        setCurrentStep(currentStep + 1);
    }

    function handlePrevStep() {
        setCurrentStep(currentStep - 1);
    }

    useEffect(() => {
        console.log(currentStep)
    }, [carousel.goBack])
    useEffect(() => {
        console.log(currentStep),
            setCarousel({
                currentStep: currentStep,
                goBack: handlePrevStep,
                goNext: handleNextStep,
            });
    }, [currentStep]);

    return (
        <>
            {
                currentStep >= 5 ? <BackgroundSuccess /> : <Background />
            }

            <View style={styles.gradient}>
                <View style={styles.background}>
                    <Pressable style={styles.background2} onPress={carousel.goNext}>
                        <View style={styles.routeText}>
                {
                    currentStep > 0 ?
                    <View style={styles.backButtonView}>
                        <Pressable style={styles.backButton} onPress={carousel.goBack}>
                                      <AntDesign name="left" size={24} color={"#5B5B5F"} />
                        </Pressable>
                    </View>
                        : <View />
                }

                            <Text style={styles.textStyle}>Rota para Calcario</Text>

                        </View>
                        <View style={styles.routeDirection}>
                            <DirectionText
                                currentState={currentStep} />
                        </View>
                        <View style={styles.routeIcon}>
                            <Direction currentState={currentStep} />
                        </View>
                        <View style={styles.routeDistance}>
                            <Distance currentState={currentStep} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
