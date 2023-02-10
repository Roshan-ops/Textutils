//import { Button } from "bootstrap";
import React , {useState} from "react";
import img from '../Img/bottle.png';
//import Button from 'react-bootstrap/Button';
import './cart.css';
const Cart= (props)=>  {
const [count, setCount]= useState(0);
  return (
    <div className="Cart">
      {count}
      <div>{props.title}</div>
      <div className="coontainer-shooping ">
        <div className="container1">
            <img src ={img} alt='imag'/>
            <div className="btn"> 
           <button onClick={()=> setCount(count +1)}> BuyNow </button>
           {count>=1 && <button onClick={()=> setCount(count -1)}> Remove</button>}
          </div>
        </div>
        </div>
      </div>

  );
};
export default Cart;
