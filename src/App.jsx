import Quiz from './Quiz'
import {jsQuizz} from "./constants"

function App() {
  return (
    <>
    <Quiz questions ={jsQuizz.questions}></Quiz>
    </>
  )
}

export default App
