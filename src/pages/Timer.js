import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },

    button: {
        width: 72,
        height: 72,
        backgroundColor: "#5CA9B1",
        borderRadius: 36,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });

let currentInterval = undefined;

export default function Timer() {

    const period = 60;

    const [isPlay, setIsPlay] = useState(false);
    const [seconds, setSeconds] = useState(period);

    const count = () => {
        setIsPlay(!isPlay);

        if(isPlay) {
            clearInterval(currentInterval); 
        } else {
            currentInterval = setInterval(() => {
                setSeconds(state => state - 1);
            }, 1000);
        }
    };

    return (
        <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
            <Text>{seconds}</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={e => count()}>
                <MaterialIcons name={isPlay ? "pause" : "play-arrow"} size={32} color="#fff"></MaterialIcons>
            </TouchableOpacity>
        </LinearGradient>
    );


}