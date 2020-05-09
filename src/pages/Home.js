import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import womanMedite from "../assets/woman-medite.jpg";
import { useNavigation } from "@react-navigation/core";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  imgWoman: {
    alignSelf: "center",
    width: 350,
    height: 300
  },

  title: {
    color: "#5CA9B1",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: 250,
    marginVertical: 80
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

export default function Home() {
  const navigation = useNavigation();

  const navigateToTimer = () => {
    navigation.navigate("Timer");
  };

  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <Image source={womanMedite} style={styles.imgWoman}></Image>
      <Text style={styles.title}>Stay focused and know yourself</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToTimer}>
        <MaterialIcons name="chevron-right" size={32} color="#fff"></MaterialIcons>
      </TouchableOpacity>
    </LinearGradient>
  );
}
