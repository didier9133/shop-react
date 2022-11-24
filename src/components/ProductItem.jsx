import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext'
import '../styles/ProductItem.scss';
import add_car from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const{addToCart}=useContext(AppContext)

	const handleCart=(e,item)=>{
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={(e)=>handleCart(e,product)}>
					<img src={add_car} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
