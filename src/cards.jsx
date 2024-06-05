import React, { useEffect,useContext,useState } from "react";
import { cardContext } from "./context/cardcontextcomponent";
import Button from "react-bootstrap/Button";
import { findIndex } from "./utitlity/arrayindex";
function Card() {
  let { cardData, setData } = useContext(cardContext);
  let[total,setTotal] = useState();
  const handlerDelete = (id) => {
    let index = findIndex(cardData, id);
    if (index != -1) {
      let newArray = [...cardData];
      newArray.splice(index, 1);
	//   console.log(newArray);
      setData(newArray);
	  totals(newArray)
    }
  };
  
  const handleChange = (event,id) => {
	let newQty = parseInt(event.target.value); 
	if(newQty<=0){
		newQty=1
	}else{
		newQty+1;
	}
	const prev=setData((prevData) => {
		let updatedData = prevData.map(item => 
        item.id == id ? { ...item, qty: newQty } : item);
      return updatedData;
    });
	// console.log(prev);
	totals(cardData);
  };
  useEffect(()=>{
	totals(cardData)
})
  const totals =(datas)=>{
	// console.log(datas);
	let tot=0;
	datas.forEach(e => {
		let subprice=e.price*e.qty;
		// console.log(e.price,e.qty);
		tot+=subprice;
	});
	// console.log(tot);
	setTotal(tot);
  };
  return (
    <>
      <section className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {
				  cardData.map((e, i) => {
                    return <>
                        <div className="product" key={i}>
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                src={e.thumbnail}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-5 product-name">
                                    <div className="product-name">
                                      <a href="#">{e.title}</a>
                                      <div className="product-info">
                                        <div>
                                          Discription:{" "}
                                          <span className="value">
                                            {e.description}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 quantity">
                                    <label>Quantity:</label>
                                    <input
                                      id="quantity"
                                      type="number"
									  value={e.qty}
                                      className="quantity-input"
									  onChange={() => handleChange(event,e.id)}
                                    />
                                  </div>
                                  <div className="col-md-3 price">
                                    <span>${e.price}</span>
                                    <Button
                                      variant="danger"
                                      onClick={() => handlerDelete(e.id)}
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                  })
				  }
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item">
                    <span className="text">Subtotal</span>
                    <span className="price">${total}</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Shipping</span>
                    <span className="price">Free</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Total</span>
                    <span className="price">${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
