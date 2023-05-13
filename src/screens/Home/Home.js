import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "green" }}>
      <Text>Hello World</Text>
    </View>
  );
};

export default HomeScreen;
