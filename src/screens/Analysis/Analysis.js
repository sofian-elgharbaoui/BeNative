import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const todayIndex = new Date().getDay();
const today = days[todayIndex];

const AnalysisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userInfo_Name}>Soufiane</Text>
        <Text style={styles.userInfo_Subscription}>Free user</Text>
      </View>
      <LinearGradient colors={["#00ffc1", "#05BFDB"]} style={styles.gradient}>
        <View style={styles.userStats}>
          <View style={styles.userStats_item}>
            <Text style={styles.userStats_item_fC}>Language:</Text>
            <Text style={styles.userStats_item_sC}>💬 {"Arabic"}</Text>
          </View>
          <View style={styles.userStats_item}>
            <Text style={styles.userStats_item_fC}>Level:</Text>
            <Text style={styles.userStats_item_sC}>📈 {"Beginner"}</Text>
          </View>
          <View style={styles.userStats_item}>
            <Text style={styles.userStats_item_fC}>Goal:</Text>
            <Text style={styles.userStats_item_sC} numberOfLines={1}>
              🥅 {"Break barrier"}
            </Text>
          </View>
          <View style={styles.userStats_item}>
            <Text style={styles.userStats_item_fC}>Topics:</Text>
            <Text style={styles.userStats_item_sC} numberOfLines={1}>
              🌟 {"Nature, language, travel, food"}
            </Text>
          </View>
          <View style={styles.userStats_item}>
            <Text style={styles.userStats_item_fC}>Practice:</Text>
            <Text style={styles.userStats_item_sC} numberOfLines={1}>
              ⏲️ {"15 minutes / day"}
            </Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.streakContainer}>
        <View style={styles.streakContainer_BestStreak}>
          <MaterialCommunityIcons
            name="trophy-award"
            size={32}
            color="#FFB84C"
          />
          <Text style={styles.streakContainer_BestStreak_Txt}>
            Best streak: {"9"}
          </Text>
          {/* "streak from server" */}
        </View>
        <View style={styles.streakContainer_Days}>
          {days.map((day) => (
            <View key={day} style={styles.day}>
              {day === today ? (
                <MaterialCommunityIcons name="fire" size={28} color="#00ff77" />
              ) : (
                <View style={[styles.dayCircle, styles.completedDay]}></View>
              )}
              <Text style={styles.day_Txt}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AnalysisScreen;
