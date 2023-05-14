import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.register}>
        <Text style={styles.registerHeading}>Join to Be Native</Text>
        <Text style={styles.registerPr}>
          sign up to keep your information save
        </Text>
        <Text style={styles.registerPr}>and get it next sections</Text>
        <View style={styles.registerBn}>
          <Text style={styles.Register_Text}>Register Now</Text>
        </View>
      </View>
      <View style={styles.container}>
        {/* <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.fullName}>Soufiane El gharbaoui</Text> */}
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
            style={styles.gradientBotton}
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
        <View style={styles.logOutBn}>
          <Text style={styles.logOut_Text}>Log out</Text>
          <Feather name="log-out" size={24} color="black" />
        </View>
        <View style={styles.navList}>
          <View style={styles.navList_Item}>
            <View style={styles.navList_Item_TextIcon}>
              <Octicons name="info" size={24} color="black" />
              <Text>About NativeSpeak</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.navList_Item}>
            <View style={styles.navList_Item_TextIcon}>
              <Feather name="send" size={24} color="black" />
              <Text>Contact Us</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.navList_Item}>
            <View style={styles.navList_Item_TextIcon}>
              <MaterialCommunityIcons
                name="help-rhombus-outline"
                size={24}
                color="black"
              />
              <Text>Help Center</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.navList_Item}>
            <View style={styles.navList_Item_TextIcon}>
              <SimpleLineIcons name="notebook" size={24} color="black" />
              <Text>Terms & Conditions</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
