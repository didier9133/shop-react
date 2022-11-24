import React, { useContext, useState } from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder'
import {AppContext} from '../context/AppContext';
import menu from '../assets/icons/icon_menu.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import shoppin_car from '../assets/icons/icon_shopping_cart.svg'


const Header = () => {
	const[toggle, setToggle]=useState(false)
	const[toggleOrder, settoggleOrder]=useState(false)
	const{state}=useContext(AppContext)

	const handleToggle=(e)=>{
		setToggle(!toggle)
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li onClick={(e)=>handleToggle(e)} className="navbar-email">platzi@example.com</li>
					<li onClick={(e)=>settoggleOrder(!toggleOrder)} className="navbar-shopping-cart">
						<img src={shoppin_car} alt="shopping cart" />
						{state.cart.length 
							?<div>{state.cart.length}</div>
							:null
						}
					</li>
				</ul>
			</div>
			{toggle && (<Menu />)}
			{toggleOrder && (<MyOrder />)}
		</nav>
	);
}

export default Header;

<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
