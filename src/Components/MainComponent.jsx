import React, { Component } from "react";
import RegisterComponent from "./RegisterComponent";


export default class MainComponent extends Component {
 
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide mt-4"
          data-bs-ride="carousel" 
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="img/fruit-6630377_1920.jpg"
                class="d-block mx-auto"
                alt="resim yok"
                width="700" height="305"
              />
              <div class="carousel-caption d-none d-md-block ">
                <h6 className="text-black mt-3">{this.props.Info1.description} </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="img/berry-3513546_1920.jpg"
                class="d-block mx-auto"
                alt="resim yok"
                width="700" height="305"
              />
              <div class="carousel-caption d-none d-md-block">
                <h6 className="text-black mt-3">{this.props.Info2.description} </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="img/strawberry-6648685_1920.jpg"
                class="d-block mx-auto"
                alt="resim yok"
                width="700" height="305"
              />
              <div class="carousel-caption d-md-block">
                <h6 className="mb-3">{this.props.Info3.description} </h6>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h5 className="mt-3">{this.props.currentCategory}</h5>

        
        <div className="container" >
            <div className="row produts">
                {this.props.products.map( product => (
                <div className="col-md-4">
                    <div className="card mt-3 p-4 productCard" key={product.id}>
                        <div className="card-title text-center">{product.productName}</div>
                        <button className="btn btn-secondary margin shadow" type="submit" onClick={()=>this.props.addToCart(product)}><i class="fa fa-shopping-cart"></i> Sepete Ekle</button>
                            <div className="card-body d-flex justify-content-center">
                              
                              <table class="text-center">
                                <tr>
                                  <td>{product.productDescription}</td>
                                </tr>
                                <tr>
                                  <td>{product.productPrice} TL </td>
                                </tr>
                              </table>
                              
                            </div>
                        </div>
                    </div>
                    ))}
                </div>            
      </div>
      </div>
    )
  }
}
