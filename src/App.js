import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';

import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = item => {
    const isAlreadyAdded = cartItem.findIndex(res => res.id === item.id);

    if (isAlreadyAdded !== -1) {
      return toast('Item Already Added', { type: 'warning' });
    }
    /* cartItem.push(item);
    setCartItem(cartItem); */
    setCartItem([...cartItem, item]);
  }

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Completer", { type: 'success' });
  }
  const removeItem = item => {
    setCartItem(cartItem.filter(res => res.id !== item.id))
  }

  return (
    <Container fluid>
      <ToastContainer position="top-right" />
      <Row>
        <Col md={8}>
          <BuyPage addToCart={addToCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
