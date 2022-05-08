import React, { Component, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import HeaderComponent from './Components/HeaderComponent';
import MainComponent from './Components/MainComponent';
import CategoryComponent from './Components/CategoryComponent';
import BasketComponent from './Components/BasketComponent';
import NotFoundComponent from './Components/NotFoundComponent'
import { Container, Row, Col} from 'react-bootstrap';
import alertify from 'alertifyjs';
import {Switch,Route} from 'react-router-dom'

export default class App extends Component {

// MainData
 CarouselInfo1 = {title:"ÜZÜM", description:"Manisa ilimizden gelen %100 doğal lezzetler "}
 CarouselInfo2 = {title:"AHUDUDU", description:"C vitamini deposu ürünlerimiz tamamen doğaldır "}
 CarouselInfo3 = {title:"ÇİLEK",description:"Muğla'mızda yetişen tamamen doğal, organik sebzelerimiz"}

//  CategoryData
state={currentCategory:"", products:[], basket:[]}

//Bu metotla currentCategory state'i değişecek, getProducts metodu categoryId parametresini alarak yeniden tetiklenecek.
changeCurrentCategory = categories =>{
this.setState({currentCategory:categories.categoryName})
// console.log(categories);
this.getProducts(categories.id)
}

componentDidMount(){
  this.getProducts();
}

//ürünleri listele, kategori id'ye göre
getProducts = (categoryId) => {
  let url ="http://localhost:3000/products";
  if(categoryId) //categoryId gönderildiyse
    url += "?categoryId=" + categoryId;
    fetch(url)
    .then(response => response.json())
    .then(data=>this.setState({products:data}))
};

//sepete ekle
addToCart=(product)=>{
  let newBasket = this.state.basket;

  var addedItem = newBasket.find(c=>c.product.id === product.id);
  if(addedItem){
    addedItem.quantity += 1;
  }else{
    newBasket.push({product:product,quantity:1});
  }
  // let newCart = this.state.cart;
  this.setState({basket:newBasket});
  alertify.success(product.productName + " sepete eklendi");
  }

//ürün sil
removeFromBasket = (product)=>{
  let newBasket = this.state.basket.filter(c=>c.product.id!==product.id)
  this.setState({basket:newBasket})
  alertify.error(product.productName + " sepetten silindi");
}


  render() {
    return (
      <div>
        <Container/>
        <Row>
        <HeaderComponent/>
        </Row>
         <Row className="mainRow" style={{marginTop:"60px"}}>
           <Col xs="3" className="category">
           <CategoryComponent  currentCategory={this.state.currentCategory} changeCurrentCategory={this.changeCurrentCategory}/>
           </Col>
           <Col xs="6">


            <Switch>
              <Route exact path="/" component={NotFoundComponent}/>
              <Route path="/products" > <MainComponent  addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} Info1={this.CarouselInfo1} Info2={this.CarouselInfo2} Info3={this.CarouselInfo3}/></Route>
              <Route component={NotFoundComponent}/>
            </Switch>

           </Col>
           <Col xs="3" className="basket">
            <BasketComponent removeFromBasket={this.removeFromBasket} basket={this.state.basket} />
           </Col>
         </Row>
         <Container/>
      </div>
    )
  }
}

