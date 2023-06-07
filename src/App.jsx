import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import ProductsInDb from './components/ProductsInDb'
import LastUserInDb from './components/LastUserInDb'
import ContentRowUserProducts from './components/ContentRowUserProducts'
import LastProductInDb from './components/LastProductInDb'
import SearchProducts from './components/SearchProducts'

import './App.css'
import User from './components/User'

function App() {
	return (
		<div id="wrapper">

			{/* <!-- Sidebar --> */}
			<Sidebar />
			{/* <!-- End of Sidebar --> */}

			{/* <!-- Content Wrapper --> */}
			<Routes>
				<Route path="/" element={<ContentWrapper />} />
				<Route path="/products" element={<ProductsInDb />} />
				<Route path="/users" element={<User/>} />
				<Route path="/last-product" element={<LastProductInDb />} />
				<Route path="/last-user" element={<LastUserInDb />} />
				<Route path="/search" element={<SearchProducts prueba="esta es una propiedad de prueba" />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}

		</div>
	)
}

export default App
