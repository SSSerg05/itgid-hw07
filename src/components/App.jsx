import { Component } from "react";

import goodsArr from "../data/goods.json"
import Goods from "./Goods";

export class App extends Component {
  
  state = {
    cart: {},
    count: 0,
  }
  
  addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;

    let cartTemp = this.state.cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    // cartTemp++;
    this.setState({cart : cartTemp});
    let count = this.state.count;
    count++;
    this.setState({'count' :  count})
  }


  render() {
  
    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={this.addToCart}>
          {
            goodsArr.map(item => <Goods 
              title={item.title} 
              cost={item.cost} 
              image={item.image} 
              articul={item.articul} 
              key={item.articul} 
            />
          )}
        </div>
      </div>
    );  
  }
}

export default App;