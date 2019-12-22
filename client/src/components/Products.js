import React, {Component} from 'react';
import {Fragment} from 'react';
import axios from 'axios';
import '../components/Products.css';

class ProductsList extends Component {
 state = {
	 products: []
 }

 componentDidMount(){
  axios.get('http://localhost:2233/products').then(res => {
   	const products = res.data
	this.setState({ products })
  })
 }

 render(){
   return(
     <Fragment>
		<div>
		<div>
			<h1>ProductsList</h1>
		</div>
		<div>{this.state.products.map(product => 
			<div className="Card-product">
				<img src={product.image} />
				<h2>{product.product}</h2>
				<p>{product.store}</p>
			</div>
		)}</div>
	   </div>
     </Fragment>
   )
 }
}

export default ProductsList;
