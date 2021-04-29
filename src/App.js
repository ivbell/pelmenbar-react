import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import './App.scss'
import Navbar from './components/common/navbar/Navbar'
import Footer from './components/common/footer/Footer'

function App () {
  const routes = useRoutes()
  document.title = 'Pelmen Bar | by Andrew'
  return (
    <Router>
      <Navbar />
      <div className="App">
        { routes }
      </div>
      <Footer />
    </Router>
  )
}

export default App
