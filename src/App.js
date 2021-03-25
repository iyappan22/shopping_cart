import "./App.css";
import Cart from "./cart";
import { useState } from "react";

function App() {
  let details = [
    {
      itemname: "Item One",
      currency: "$",
      price: 19.99,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      itemname: "Item Two",
      currency: "$",
      price: 24.99,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    },
    {
      itemname: "Item Three",
      currency: "$",
      price: 39,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      itemname: "Item Four",
      currency: "$",
      price: 50.99,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
      itemname: "Item Five",
      currency: "$",
      price: 19.99,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",
    },
    {
      itemname: "Item Six",
      currency: "$",
      price: 15.99,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
  ];
  const [currentitem, setCurrentitem] = useState([]);
  const [total, setTotal] = useState(0)

  function handleSelectedPlan(plan) {
    setCurrentitem([...currentitem, plan]);
    let newTotal = +total  + plan.price
    setTotal(newTotal.toFixed(2))
  }
  function handleRemoveCart(index) {
    let newTotal = total - currentitem[index].price
    setTotal(newTotal.toFixed(2))
    currentitem.splice(index, 1)
    setCurrentitem([...currentitem])

  }
  return (
    <>
      <div className="container">
        <div className="row bg">
          <div className="col-lg-3">
            <h1 className="my-4 new">Cart</h1>
            <div className="list-group">
            <ul class="list-group">
              {
              currentitem.map((plan,index) => {
                return(<li class="list-group-item d-flex justify-content-between align-items-center">
                {plan.itemname} - ${plan.price}
                <button className="btn" onClick={() => handleRemoveCart(index)}><span class="badge bg-danger rounded-pill"> X </span></button>
              </li>
                
              )})
              }
             </ul>
             <h3 className="new">Total : {total}</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {details.map((detail) => {
                return (
                  <Cart
                    data={detail}
                    handleSelectedPlan={handleSelectedPlan}
                    handleRemoveCart ={handleRemoveCart}
                  ></Cart>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
