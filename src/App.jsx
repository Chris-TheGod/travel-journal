import './App.scss'
import { Card } from './components/Card'
import { Header } from './components/Header'

function App() {
  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <Card />
      </div>
    </div>
  )
}

export default App
