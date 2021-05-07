import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Footer from './components/common/footer/Footer'
import Navbar from './components/common/navbar/Navbar'
import { useRoutes } from './routes'
import products from './store/products'

function App() {
	useEffect(() => {
		products.loadData()
	}, [])
	const routes = useRoutes()
	document.title = 'Pelmen Bar | by Andrew'
	return (
		<Router>
			<div className='all'>
				<Navbar />
				<div className='App'>{routes}</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
