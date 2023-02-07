import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Dimensions, View, TouchableOpacityProps } from "react-native";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32*2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSizes = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length

interface Props extends TouchableOpacityProps {}

export default function HabitDaySquare({...rest}: Props) {

  const {navigate} = useNavigation()

  return (
    <View className="flex-row flex-wrap">
      {/* actual days */}
      {
        datesFromYearStart.map(date => (
          <TouchableOpacity
            key={date.toISOString()}
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 "
            style={{width:DAY_SIZE, height:DAY_SIZE}}
            activeOpacity={0.7}
            onPress={() => navigate('habit',{date:date.toISOString()})}
            {...rest}
          />
        ))
      }
      {/* days to fill, just to complete the box */}
      {
        amountOfDaysToFill > 0 && Array
        .from({length:amountOfDaysToFill})
        .map((_,index) => (
          <View 
            key={index}
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
            style={{width:DAY_SIZE, height:DAY_SIZE}}
          />
        ))
      }
    </View>
  )
}
