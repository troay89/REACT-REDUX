import { useState } from 'react'
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App
