import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.image} />
      <Text style={styles.fullName}>Soufiane El gharbaoui</Text>
      <Text style={styles.uniqueName}>@soufiane</Text>
      <View style={styles.cardInfo}>
        <View style={styles.cardInfo_Item}>
          <Text style={styles.cardInfo_Item_Text}>English level</Text>
          <View style={styles.cardInfo_Item_TextIcon}>
            <Text style={styles.cardInfo_Item_Text}>Elementary</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cardInfo_Item}>
          <Text style={styles.cardInfo_Item_Text}>Native language</Text>
          <View style={styles.cardInfo_Item_TextIcon}>
            <Text style={styles.cardInfo_Item_Text}>Arabic</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View style={styles.cardInfo_Item}>
          <Text style={styles.cardInfo_Item_Text}>Subscription</Text>
          <View style={styles.cardInfo_Item_TextIcon}>
            <Text style={styles.cardInfo_Item_Text}>Without</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
        <LinearGradient
          colors={["#00FFCA", "#088395"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBotton}
        >
          <View style={styles.cardInfo_Botton_Container}>
            <Text style={styles.cardInfo_Botton}>
              explore{" "}
              <Text style={styles.cardInfo_Botton_Premium}>Premium</Text>{" "}
              features
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#088395", "#00FFCA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradientBotton, styles.mt_10]}
        >
          <View style={styles.cardInfo_Botton_Container}>
            <Image
              source={require("../../assets/icons/face.png")}
              style={styles.faceIcon}
            />
            <Text style={styles.cardInfo_Botton}>Invite your friends!</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.logOut}>
        <Text style={styles.logOut_Text}>Log out</Text>
        <Feather name="log-out" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProfileScreen;
