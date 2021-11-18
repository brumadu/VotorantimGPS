import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, View } from "react-native";
import { styles } from "./style"

export default function BackButton() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonArea}>
        <View style={styles.button}>
          <AntDesign name="left" size={24} color={"#5B5B5F"} />
        </View>
      </Pressable>
    </View>
  );
}