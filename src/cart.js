import React from "react";

function Cart(props) {
  return (
    
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#"><img className="card-img-top"src="http://placehold.it/700x400"alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.data.itemname}</a>
          </h4>
          <h5>{props.data.currency}{props.data.price}</h5>
          <p className="card-text">
          {props.data.discription}
          </p>
        </div>
        <div className="card-footer">
        <button className="btn btn-block btn-primary text-uppercase" onClick={() => props.handleSelectedPlan(props.data)}>ADD TO CART</button>
        </div>
        </div>
      </div>
    
    
  );
}
export default Cart;
