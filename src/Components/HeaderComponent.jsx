import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import RegisterComponent from "./RegisterComponent"


export default function HeaderComponent() {

  return (
    <div>
      <div className="container-fluid"></div>
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top shadow ">
            <div className="container">
              <div className="logo">
              <a
                className="navbar-brand text-success d-inline"
                href="/products"
                style={{ fontFamily: "Lora" }}
              >
               <img src="img/logo.png" style={{heigth:"20px",width:"60px"}}></img> Doğal Bahçe
               
            </a>
              </div>
              <button
                className="navbar-toggler d-lg-none text-success"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0 mx-5">
                  <li className="nav-item active">
                    <a className="nav-link text-success" href="#">
                 
                    Biz kimiz<span className="visually-hidden">(current)</span> 
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link text-success" href="#">
                     
                      Kampanya <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                  
                  <a className="nav-link text-success" style={{cursor:"pointer"}} data-toggle="modal" data-target="#exampleModal">
                    <i class="fa fa-user-o"></i>  Üye Ol</a>

                  <li className="nav-item active ma">
                    <a className="nav-link text-success" style={{cursor:"pointer"}} >
                     <i class="fa fa-arrow-circle-o-right "></i> Giriş Yap <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                </ul>

                <form className="d-flex my-2 my-lg-0">
                  <input
                    className="form-control me-sm-2 radius-5"
                    type="text"
                    placeholder="Search"
                  />
             
                  <button
                    className="border border-white my-2 my-sm-0 text-success rounded"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div> 
      </div>
</div>
  );
}
