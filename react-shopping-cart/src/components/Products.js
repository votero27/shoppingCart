import React, { Component } from 'react';
import formatCurrency from './util';

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                              <a href={"#" + product.id}>
                              <img src={product.image} alt={product.name} style={{width:'350px',height:'400px'}}/>
                              <p>
                                 {product.name} 
                              </p>
                              </a>
                              
                              <div className="product-price">
                              <div>{formatCurrency(product.price)}</div> 
                                <button
                                onClick={()=> this.props.addToCart(product)}
                                 className="button primary">
                                  Add To Cart
                              </button>
                              </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
