import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import flechita from '../assets/icons/flechita.svg'
import { AppContext } from '../context/AppContext';

const MyOrder = () => {
	const{state}=useContext(AppContext)
	
	const sumTotal=()=>{
		const sumaArray=state.cart.reduce((acumulador,current)=>{
			return acumulador + current.price
		},0)

		return sumaArray
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product=>{
					console.log(state)
					return <OrderItem product={product} key={`orderItem-${product.id}`} />
				})}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
