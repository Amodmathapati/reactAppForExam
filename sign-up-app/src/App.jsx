import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello, welcome to my sign-up form</h1>

      <form>

        <lable>
          username:
        </lable>
        <input type='text'name='username' required></input>

        <lable>
          password:
        </lable>
        <input type='password'name='password' required></input>

        <button type = 'submit'>submit</button>
      </form>
    </>
  )
}

export default App
