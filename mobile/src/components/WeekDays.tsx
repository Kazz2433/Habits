import { View,Text } from "react-native";
import { DAY_SIZE } from "./HabitDaySquare";

const weekDays = ['S','M','T','W','T','F','S']

export default function WeekDays() {
  return (
    <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay,i) => (  
            <Text 
              key={`${weekDay}-${i}`}
              className='text-zinc-400 text-xl font-bold text-center mx-1'
              style={{width:DAY_SIZE}}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>
  )
}
