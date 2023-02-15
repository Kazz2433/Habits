import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import dayjs from 'dayjs'

interface HabitListProps {
    date:Date
    onCompletedChange: (completed:number) => void
}

interface HabitsInfo {
    possibleDailyHabits:{
        id:string
        title:string
        created_at:string
    }[],
    completedDayhabit:string[]
}

export default function HabitList({onCompletedChange,date} :HabitListProps) {
    const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()
    
    useEffect(() => {
        api.get('day',{
            params:{
                date:date.toISOString()
            }
        }).then((response) => {
            setHabitsInfo(response.data)
        })
    },[])

    async function handleToggleHabit(habitId:string) {
        await api.patch(`/habits/${habitId}/toggle`)
        
        const isHabitAlreadyCompleted = habitsInfo!.completedDayhabit.includes(habitId)

        let completedHabits: string[] = []

        if(isHabitAlreadyCompleted){
            completedHabits = habitsInfo!.completedDayhabit.filter(id => id !== habitId)
        }else{
            completedHabits = [...habitsInfo!.completedDayhabit,habitId]
        }

        setHabitsInfo({
            possibleDailyHabits: habitsInfo!.possibleDailyHabits,
            completedDayhabit: completedHabits
        })

        onCompletedChange(completedHabits.length)

    }

    const isDateInPast = dayjs(date)
        .endOf('day')
        .isBefore(new Date())

    return (
        <div className='mt-6 flex flex-col gap-3'>
            {habitsInfo?.possibleDailyHabits.map(habit => {
                return (
                    <Checkbox.Root
                        key={habit.id}
                        onCheckedChange={()=> handleToggleHabit(habit.id) }
                        checked={habitsInfo.completedDayhabit.includes(habit.id)}
                        disabled={isDateInPast}
                        className='flex items-center gap-3 group'
                    >
                        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                            <Checkbox.Indicator>
                                <Check size={20} className="text-white" />
                            </Checkbox.Indicator>
                        </div>

                        <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                            {habit.title}
                        </span>
                    </Checkbox.Root>

                )
            })}
        </div>
    )
}
