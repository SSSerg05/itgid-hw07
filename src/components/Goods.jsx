import { Component } from "react";


export class Goods extends Component {
  render() {
    const {title, image, cost, articul} = this.props;
    
    return (
      <div className="goods-block">
        <img src={ image } alt={title} />
        <p>{ title }</p>
        <p>{ cost }</p>
        <button className="add-to-cart" data-key={ articul }>Add to cart</button>
      </div>
    );  
  }
}

export default Goods;