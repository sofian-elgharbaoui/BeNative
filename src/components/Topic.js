import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Topic = ({ topic, index, navigation, currTopicIndex }) => {
  let { title, desc, completed } = topic;
  let lessonNum = index + 1;
  // let finalLesson = arrLength === index + 1;
  return (
    <TouchableOpacity
      style={[
        styles.lessonContainer,
        index === currTopicIndex ? styles.currLesson : {},
      ]}
      onPress={() =>
        navigation.navigate(
          index <= currTopicIndex ? "Conversation" : "Premium"
        )
      }
    >
      <Image
        style={[
          styles.lessonImg,
          completed ? styles.finished : styles.notFinished,
        ]}
        // source={require("../../assets/icons/grinning-face.png")}
      />
      <View style={styles.lessonTxtContainer}>
        <Text style={styles.lessonNum}>Topic {lessonNum}</Text>
        <Text style={styles.lessonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Topic;
