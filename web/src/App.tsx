import './styles/global.css'
import {Habit} from './components/Habit'

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={11} />
      <Habit completed={22} />
      <Habit completed={33} />
    </div>
  )
}

export default App
