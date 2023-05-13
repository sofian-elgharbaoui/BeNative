import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

const PracticeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
    </View>
  );
};

export default PracticeScreen;
