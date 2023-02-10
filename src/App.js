import React ,{} from 'react';
import './App.css';
//import {Container} from 'react-bootstrap/Button';
import Cart from './Component/Cart.jsx';
import Add from './Component/Addcart';
import Navbar1 from './Component/Navbar'


const App = ()=> {
  //const [cart setCart ]= useState(['0']);
  //const [ ]= useState();
  return (
    <>
    <Navbar1/>
    < div className='container'>
     <Cart title="ADD items to cart"/>
     </div>
     <Add />
    </>
  );
};

export default App;
