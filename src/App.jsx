import './App.scss'
import { Card } from './components/Card'
import { Header } from './components/Header'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>{cards && cards}</div>
    </div>
  )
}

export default App
