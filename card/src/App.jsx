import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

import burger from './assets/burger.jpeg'
import pizza from './assets/pizza.jpeg'
import coldDrink from './assets/cold drink.jpeg'
import frenchFries from './assets/french fries.jpeg'
import redSaucePasta from './assets/red sauce pasta.jpeg'
import tacos from './assets/tacos.jpeg'

function App() {
  const [count, setCount] = useState(0)
  const link2= burger
  const link1= pizza
  const link3= coldDrink
  const link5= frenchFries
  const link6= redSaucePasta
  const link4 = tacos

  return (
    <>
    <div className='flex flex-col md:flex-row gap-4 justify-center'>
    <Card title = "Burger" link = {link2} amount = "₹499"/>
    <Card title = "Pizza" link = {link1} amount = "₹799" />
    <Card  title = "Cold drink" link = {link3} amount = "₹49"/>
    </div>

    <div className='flex flex-col md:flex-row gap-4 justify-center'>
    <Card title = "French Fries" link = {link5} amount = "₹299"/>
    <Card title = "Red Sauce Pasta" link = {link6} amount = "₹499"/>
    <Card title = "Tacos" link = {link4} amount = "₹699"/>
    </div>
      
    </>
  )
}

export default App
