import React from "react";
import { discoutProducts } from "./discoutProducts ";
const Bigdiscount = () => {
  return (
    <div className="container ">
      <div className="row">
        <h2 className="d-flex justify-content-center mt-5">Big Discount</h2>
      </div>
      <div className="row gx-4 ms-5 mt-5 ">
        {discoutProducts.map(
          (product) => {

          return(
            <div key={product.id} className="col-lg-4 mb-4">
              <div class="card" style={{width:"250px",height:"350px",marginTop:"10px",justifyContent:"space-between"}} >
                <img src={product.imgUrl} class="w-50 ms-5 mt-5 " alt="..." />
                <div class="card-body">
                  <h5 className="mt-4">{product.productName}</h5>
                  
                  <p class="card-text">{product.price}
                  </p> 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Bigdiscount;
