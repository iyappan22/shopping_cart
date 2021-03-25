import React from "react";


function Cartdetails(plan){
   
    return (
        <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
            {

          <div className="list-group-item" >plan:{plan.handlebtnclick}</div>

            }
         
        </div>
        </div>

    )}
export default Cartdetails;