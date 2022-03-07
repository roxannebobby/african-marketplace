import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<main className='py-3'>
				<Header />
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/shop' component={ShopScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/cart' component={CartScreen} />
					<Route path='/login' component={LoginScreen} />
				</Container>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
