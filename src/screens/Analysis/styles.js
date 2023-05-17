import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 25,
  },
  userInfo_Name: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
    letterSpacing: 1,
  },
  userInfo_Subscription: {
    fontFamily: "Nunito_500Medium",
    fontSize: 16,
    color: "#333",
  },
  gradient: {
    borderRadius: 20,
  },
  userStats: {
    gap: 5,
    padding: 10,
  },
  userStats_item: {
    flexDirection: "row",
  },
  userStats_item_fC: {
    flex: 1,
    fontFamily: "Nunito_800ExtraBold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  userStats_item_sC: {
    flex: 1,
    fontFamily: "Nunito_800ExtraBold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  streakContainer: {
    backgroundColor: "#c9f9f9",
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
    gap: 15,
  },
  streakContainer_BestStreak: {
    backgroundColor: "#c9f9f9",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
  },
  streakContainer_BestStreak_Txt: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
  },
  streakContainer_Days: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  day: {},
  dayCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#088395",
  },
  completedDay: {
    backgroundColor: "#05BFDB",
  },
  day_Txt: {
    fontFamily: "Nunito_400Regular",
  },
});

export default styles;
