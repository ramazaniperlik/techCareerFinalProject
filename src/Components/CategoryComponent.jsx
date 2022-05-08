import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CategoryComponent extends Component {

  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }

  getCategories = () => {
      fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data=>this.setState({categories:data}))
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card rounded mt-4">
            {/* { <div className="card-title text-center bg-white rounded-top">Kategori</div> } */}
            <div className="card-body rounded-bottom"> <ListGroup className=" list-group-flush">
              {this.state.categories.map((categories) => (
                <ListGroupItem action active={categories.categoryName===this.props.currentCategory?true:false} onClick={() => this.props.changeCurrentCategory(categories)} 
                  key={categories.id}
                >
                  {categories.categoryName}
                </ListGroupItem>
              ))}
            </ListGroup></div>
           
            {/* <h4>{this.props.currentCategory}</h4> */}
          </div>
        </div>
      </div>
    );
  }
}
