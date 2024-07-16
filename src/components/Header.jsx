import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import { useContext } from 'react';
import CartContext from '../store/cart-context.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const cartQuantity = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartQuantity})</Button>
      </nav>
    </header>
  );
}
