import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#eee",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  timer_Txt: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: "#aaa",
  },
  fires: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  fires_Txt: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
  },
  lessonsContainer: {
    gap: 10,
    padding: 15,
  },
  lessonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
  },
  lessonImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    padding: 2,
  },
  currLesson: {
    backgroundColor: "#43ffc122",
  },
  finished: {
    borderColor: "#00ffc1",
  },
  notFinished: {
    borderColor: "#ddd",
  },
  lessonTxtContainer: {
    flex: 1,
  },
  lessonNum: {
    fontFamily: "Nunito_700Bold",
    color: "#999",
  },
  lessonTitle: {
    fontFamily: "Nunito_700Bold",
    color: "#333",
  },
  loadMoreBn: {
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
  },
  loadMoreBn_Txt: {
    fontFamily: "Nunito_700Bold",
    color: "#fff",
    textShadowColor: "#555",
    textShadowRadius: 5,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles;
