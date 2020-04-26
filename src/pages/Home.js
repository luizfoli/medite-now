import React from "react";
import { Image, StyleSheet, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import womanMedite from "../assets/woman-medite.jpg";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    imgWoman: {
        alignSelf: "center",
        width: 350,
        height: 300,
    },

    title: {
        color: '#5CA9B1',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: "center",
        maxWidth: 250,
        marginVertical: 80
    }
});

export default function Home() {
  return (
      <LinearGradient
        colors={["#fff", "#fff"]}
        style={styles.container}
      >
        <Image 
            source={womanMedite}
            style={styles.imgWoman}>
        </Image>
        <Text
            style={styles.title}>
            Stay focused and know yourself
        </Text>
      </LinearGradient>
  );
}
