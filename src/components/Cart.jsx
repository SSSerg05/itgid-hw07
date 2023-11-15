import { Component } from "react";


export class Cart extends Component {

  renderObj = () => {
    const {cart, } = this.props;
    const out = [];
    for (let key in cart) {
        const goods = this.getGoodsFromArr(key);
        console.log(goods);
        out.push(
          <tr key={key}>
            <td>{goods['title']}</td>
            <td>{ cart[key] }</td>
            <td>{ cart[key]*goods['cost'] }</td>
          </tr>);
    }
    return out;
  }

  getGoodsFromArr = (art) => {
    const { goods } =  this.props;
    
    for (let i = 0; i < goods.length; i++) {
        if (art === goods[i]['articul']) {
            return goods[i];
        }
    }
  }

  render() {
    return (
      <div className="cart-field">
          <h1>Корзина</h1>
          <table>
              <tbody>
              <tr><th>Art</th><th>Count</th><th>Cost</th></tr>
              { this.renderObj() }
              </tbody>
          </table>
      </div>
      );
  }
}

export default Cart;