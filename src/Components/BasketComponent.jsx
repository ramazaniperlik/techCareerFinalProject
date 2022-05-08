import React, { Component } from 'react'
import ClockComponent from './ClockComponent'

export default class BasketComponent extends Component {

  renderBasket(){
    return(
    <div className="container">
    <div className="row">
      <button type="button" class="btn border mt-4 text-black">
        <i class="fa fa-shopping-basket text-black"></i> Sepetim <span class="badge bg-primary text-white">{this.props.basket.length}</span>
      </button>
      </div>
    <div className="row">
  <ul class="list-unstyled">
    {this.props.basket.map(product=>(
  
    <li key={product.product.id}><div className="badge bg-danger mt-2 shadow" onClick={()=>this.props.removeFromBasket(product.product)} style={{cursor:"pointer"}}>X</div> {product.product.productName} <span class="badge bg-success text-white d-flex justify-content-end mt-1 opacity-50">{product.quantity} adet</span></li>
  
    ))}
  </ul>
    </div>
  </div>
  )
  }

  render() {
    return (
      <div>
         
         {(this.props.basket.length>0)?this.renderBasket() :<div>
           <h6 class="text-danger mt-3 text-center ">Sepetinizde Hiç Ürün Yok!</h6>
           <h5 class="text-center"><ClockComponent/></h5>
           {/* <h5>{this.state.time()}</h5> */}
         </div>
         }
      </div> 
    )
  }
}

