import { ScrollView, View, Text } from "react-native";
// import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

import Lesson from "../../components/Lesson";

const a1_lessons = [
  {
    title: "Introductions",
    desc: "Basic greetings and self-introductions.",
    completed: true,
  },
  {
    title: "Daily Routine",
    desc: "Vocabulary and phrases for describing daily activities.",
    completed: true,
  },
  {
    title: "Weather",
    desc: "Vocabulary related to weather conditions and forecasts.",
    completed: true,
  },
  {
    title: "Family",
    desc: "Vocabulary and sentence structures for discussing family members.",
    completed: false,
  },
  {
    title: "Food and Drinks",
    desc: "Common food and drink vocabulary and ordering at a restaurant.",
    completed: false,
  },
  {
    title: "Hobbies and Interests",
    desc: "Expressing preferences and talking about hobbies.",
    completed: false,
  },
  {
    title: "Transportation",
    desc: "Vocabulary and phrases for discussing different modes of transportation.",
    completed: false,
  },
  {
    title: "Describing People",
    desc: "Adjectives to describe physical appearance and personality traits.",
    completed: false,
  },
  {
    title: "Shopping",
    desc: "Vocabulary for shopping and practicing dialogue at a store.",
    completed: false,
  },
  {
    title: "Time and Dates",
    desc: "Telling time, days of the week, and months.",
    completed: false,
  },
  {
    title: "Jobs and Professions",
    desc: "Vocabulary for different occupations and talking about work.",
    completed: false,
  },
  {
    title: "Likes and Dislikes",
    desc: "Expressing preferences and opinions about various topics.",
    completed: false,
  },
  {
    title: "Health and Illness",
    desc: "Vocabulary for common health issues and expressing symptoms.",
    completed: false,
  },
  {
    title: "Giving Directions",
    desc: "Learning how to ask for and give directions.",
    completed: false,
  },
  {
    title: "Travel and Tourism",
    desc: "Vocabulary related to travel and planning a trip.",
    completed: false,
  },
  {
    title: "Sports and Activities",
    desc: "Vocabulary for different sports and leisure activities.",
    completed: false,
  },
  {
    title: "Colors",
    desc: "Basic color vocabulary and describing objects by color.",
    completed: false,
  },
  {
    title: "Holidays and Celebrations",
    desc: "Vocabulary for holidays and cultural celebrations.",
    completed: false,
  },
  {
    title: "At the Doctor's Office",
    desc: "Practicing dialogue at a doctor's office or clinic.",
    completed: false,
  },
  {
    title: "Asking for Help",
    desc: "Expressing needs and asking for assistance.",
    completed: false,
  },
  {
    title: "Making Phone Calls",
    desc: "Practicing telephone conversations and taking messages.",
    completed: false,
  },
  {
    title: "Daily Life in the Past",
    desc: "Talking about past routines and experiences.",
    completed: false,
  },
  {
    title: "Comparative and Superlative",
    desc: "Comparing things and using comparative adjectives.",
    completed: false,
  },
  {
    title: "Giving Advice",
    desc: "Offering and soliciting advice using modal verbs.",
    completed: false,
  },
  {
    title: "Travel Plans",
    desc: "Discussing future travel plans and making reservations.",
    completed: false,
  },
  {
    title: "Likes and Dislikes",
    desc: "Expressing preferences and opinions about various topics.",
    completed: false,
  },
  {
    title: "Making Invitations",
    desc: "Inviting others and responding to invitations.",
    completed: false,
  },
  {
    title: "Animals",
    desc: "Vocabulary for different animals and talking about pets.",
    completed: false,
  },
  {
    title: "Technology",
    desc: "Vocabulary related to computers, smartphones, and the internet.",
    completed: false,
  },
  {
    title: "Shopping for Clothes",
    desc: "Describing clothing and shopping for clothes.",
    completed: false,
  },
  {
    title: "Daily Life in the Future",
    desc: "Talking about future routines and aspirations.",
    completed: false,
  },
  {
    title: "At the Post Office",
    desc: "Practicing dialogue at a post office and sending mail.",
    completed: false,
  },
  {
    title: "Describing Places",
    desc: "Vocabulary for describing cities, countries, and landmarks.",
    completed: false,
  },
  {
    title: "Inviting Guests",
    desc: "Planning and hosting social events.",
    completed: false,
  },
  {
    title: "Prepositions of Place",
    desc: "Using prepositions to describe the location of objects.",
    completed: false,
  },
  {
    title: "In the Kitchen",
    desc: "Vocabulary for kitchen items and cooking terms.",
    completed: false,
  },
  {
    title: "Festivals and Traditions",
    desc: "Discussing cultural festivals and traditions.",
    completed: false,
  },
  {
    title: "Environmental Issues",
    desc: "Vocabulary for discussing environmental topics.",
    completed: false,
  },
  {
    title: "Describing Feelings",
    desc: "Expressing emotions and feelings using adjectives.",
    completed: false,
  },
  {
    title: "Jobs and Career Paths",
    desc: "Discussing different job opportunities and career paths.",
    completed: false,
  },
  {
    title: "Adverbs of Frequency",
    desc: "Talking about how often activities are done.",
    completed: false,
  },
  {
    title: "Music and Entertainment",
    desc: "Vocabulary for different types of music and entertainment.",
    completed: false,
  },
  {
    title: "At the Bank",
    desc: "Practicing dialogue at a bank and discussing financial matters.",
    completed: false,
  },
  {
    title: "Making Reservations",
    desc: "Booking accommodations and making reservations.",
    completed: false,
  },
  {
    title: "Giving Presentations",
    desc: "Practicing presentation skills and public speaking.",
    completed: false,
  },
  {
    title: "In the Classroom",
    desc: "Vocabulary for classroom objects and discussing education.",
    completed: false,
  },
  {
    title: "Nationalities and Countries",
    desc: "Learning nationalities and talking about countries.",
    completed: false,
  },
  {
    title: "Expressing Regret",
    desc: "Using modal verbs to express regret or missed opportunities.",
    completed: false,
  },
  {
    title: "Festivals and Celebrations",
    desc: "Vocabulary for specific festivals and celebrations.",
    completed: false,
  },
  {
    title: "Review and Consolidation",
    desc: "A comprehensive review of previously learned topics.",
    completed: false,
  },
  // {
  //   title: "At the Airport",
  //   desc: "Vocabulary and phrases for traveling through airports.",
  //   completed: false,
  // },
  // {
  //   title: "Cultural Etiquette",
  //   desc: "Discussing customs and etiquette in different cultures.",
  //   completed: false,
  // },
  // {
  //   title: "Technology in Everyday Life",
  //   desc: "Discussing the role of technology in our lives.",
  //   completed: false,
  // },
  // {
  //   title: "Grammar Review",
  //   desc: "Reviewing key grammar concepts and practicing exercises.",
  //   completed: false,
  // },
  // {
  //   title: "Creative Writing",
  //   desc: "Engaging in writing activities to express creativity.",
  //   completed: false,
  // },
];

// these should be on another object

const lessons = a1_lessons;

const HomeScreen = ({ navigation }) => {
  const currLessonIndex = lessons.reduce(
    (prev, curr) => (curr.completed ? prev + 1 : prev),
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timer}>
          <Text style={styles.timer_Txt}>{"2:05:45"}</Text>
          <MaterialIcons name="timer" size={24} color="#aaa" />
        </View>
        <View style={styles.fires}>
          <Text style={styles.fires_Txt}>8</Text>
          <MaterialCommunityIcons name="fire" size={28} color="#FFB84C" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.lessonsContainer}>
          {lessons.map((lesson, index) => (
            <Lesson
              key={index}
              lesson={lesson}
              index={index}
              currLessonIndex={currLessonIndex}
              navigation={navigation}
            />
          ))}
        </View>
        <LinearGradient
          colors={["#00FFCA", "#088395"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loadMoreBn}
        >
          <Text
            style={styles.loadMoreBn_Txt}
            onPress={() => navigation.navigate("Subscription")}
          >
            Unlock more content
          </Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
