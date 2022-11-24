import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png'
import { AppContext } from '../context/AppContext';

const OrderItem = ({product}) => {
	const{deleteToCart}=useContext(AppContext)
	const handlerDelete=(e,product)=>deleteToCart(product)
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img onClick={(e)=>handlerDelete(e,product)} src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
