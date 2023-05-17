import { ScrollView, Share, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./styles";

const ProfileScreen = ({ navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "share Be Native",
        message:
          "Invite your friends and family member to join the BeNative, and Help them learning English.",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <View style={styles.register}>
        <Text style={styles.registerHeading}>Join to Be Native</Text>
        <Text style={styles.registerPg}>
          sign up to keep your information save
        </Text>
        <Text style={styles.registerPg}>and get it next sessions</Text>
        <View style={styles.registerBn}>
          <Text
            style={styles.registerTxt}
            onPress={() => navigation.navigate("Register")}
          >
            Register Now
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.fullName}>Soufiane El gharbaoui</Text>
        <Text style={styles.uniqueName}>@soufiane</Text>
        <View style={styles.cardInfo}>
          <View style={styles.cardInfo_Item}>
            <Text style={styles.cardInfo_Item_Text}>English level</Text>
            <View style={styles.cardInfo_Item_TextIcon}>
              <Text
                style={styles.cardInfo_Item_Text}
                onPress={() => navigation.navigate("Levels")}
              >
                Elementary
              </Text>
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
              <Text
                style={styles.cardInfo_Item_Text}
                onPress={() => navigation.navigate("Native Language")}
              >
                Arabic
              </Text>
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
              <Text
                style={styles.cardInfo_Item_Text}
                onPress={() => navigation.navigate("Subscription")}
              >
                Without
              </Text>
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
              <Text
                style={styles.cardInfo_Botton}
                onPress={() => navigation.navigate("Premium")}
              >
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
                style={styles.faceIcon}
                source={require("../../assets/icons/grinning-face.png")}
                alt="Grinning Face on Microsoft Teams 15.0"
              />
              <Text style={styles.cardInfo_Botton} onPress={onShare}>
                Invite your friends!
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* <View style={styles.logOutBn}>
          <Text style={styles.logOut_Text}>Log out</Text>
          <Feather name="log-out" size={24} color="black" />
        </View> */}
        <View style={styles.navList}>
          <View style={styles.navList_Item}>
            <View style={styles.navList_Item_TextIcon}>
              <Octicons name="info" size={24} color="black" />
              <Text>About BeNative</Text>
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
