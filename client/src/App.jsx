import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import GameInfo from './components/GameInfo'
import ChatWithLink from './components/ChatWithLink'

function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<GameInfo />} />
          <Route path="/chat" element={<ChatWithLink />} />
        </Routes>
      </div>
  )
}

export default App