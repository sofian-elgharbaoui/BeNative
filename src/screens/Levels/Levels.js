import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const LevelsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Image
            style={styles.emoji}
            source={require("../../assets/icons/waving-hand.png")}
          />
          <Text style={styles.h1}>Welcome!</Text>
        </View>
        <Text style={styles.h3}>
          How proficient are you in speaking English?
        </Text>
        <Text style={styles.h4}>
          We will tailor the study plan to align with your current proficiency
          in English.{" "}
        </Text>
      </View>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <Image source={require("../../assets/icons/beginner.png")} />
          <Text style={styles.listItemTxt}>
            I'm just starting to learn English
          </Text>
        </View>
        <View style={styles.listItem}>
          <Image source={require("../../assets/icons/elementary.png")} />
          <Text style={styles.listItemTxt}>
            I've been studying English for a little while now
          </Text>
        </View>
        <View style={styles.listItem}>
          <Image source={require("../../assets/icons/intermediate.png")} />
          <Text style={styles.listItemTxt}>
            I'm pretty comfortable speaking English
          </Text>
        </View>
        <View
          style={styles.listItem}
          onTouchStart={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../../assets/icons/fluent.png")} />
          <Text style={styles.listItemTxt}>
            I'm completely fluent in English
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LevelsScreen;
