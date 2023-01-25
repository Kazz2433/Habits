import { View, ScrollView } from "react-native";

import HabitDaySquare from "../components/HabitDaySquare";
import Header from "../components/Header";
import WeekDays from "../components/WeekDays";

export default function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <WeekDays />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
      >
        <HabitDaySquare />
        
      </ScrollView>

    </View>
  )
}
