import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import './App.scss'
import Navbar from './components/common/navbar/Navbar'
import Footer from './components/common/footer/Footer'
import { useEffect } from 'react'
import products from './store/products'
import { BackgroundImage } from './components/common/bacground-image/BackgroundImage'

function App() {
  useEffect(() => {
    products.loadData()
  }, [])
  const routes = useRoutes()
  document.title = 'Pelmen Bar | by Andrew'
  return (
    <Router>
      <div className="all">
        <Navbar/>
        <div className="App">
          { routes }
        </div>
        <Footer/>
      </div>
      <BackgroundImage/>
    </Router>
  )
}

export default App
