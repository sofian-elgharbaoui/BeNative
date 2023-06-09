import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  register: {
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 30,
    padding: 15,
    marginVertical: 20,
  },
  registerHeading: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
  },
  registerPg: {
    fontFamily: "Nunito_500Medium",
  },
  registerBn: {
    backgroundColor: "#088395",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 20,
    shadowColor: "#00ffc1",
    elevation: 20,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: -5,
      height: -5,
    },
  },
  registerTxt: {
    fontFamily: "Nunito_700Bold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
  },
  fullName: {
    marginTop: 10,
    fontFamily: "Nunito_500Medium",
    fontSize: 24,
  },
  uniqueName: {
    fontFamily: "Nunito_700Bold",
    color: "gray",
  },
  cardInfo: {
    backgroundColor: "#f9f9f9",
    width: "90%",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    gap: 15,
  },
  cardInfo_Item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cardInfo_Item_Text: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
  },
  cardInfo_Item_TextIcon: {
    flexDirection: "row",
  },
  gradientBotton: {
    borderRadius: 50,
  },
  cardInfo_Botton_Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  faceIcon: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  cardInfo_Botton: {
    fontFamily: "Nunito_500Medium",
    fontSize: 20,
    color: "#fff",
    textShadowColor: "#555",
    textShadowRadius: 5,
  },
  cardInfo_Botton_Premium: {
    fontFamily: "Nunito_700Bold",
    letterSpacing: 0.6,
  },
  logOutBn: {
    borderColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logOut_Text: {
    fontFamily: "Nunito_500Medium",
    fontSize: 20,
  },
  navList: {
    marginTop: 30,
    width: "90%",
    gap: 15,
  },
  navList_Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  navList_Item_TextIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default styles;
