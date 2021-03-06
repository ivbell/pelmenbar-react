import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import { CartFixedComponent } from './components/common/cart-count/CartFixedComponent'
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
				<CartFixedComponent />
				<Footer />
				<ToastContainer position='bottom-right' />
			</div>
		</Router>
	)
}

export default App
