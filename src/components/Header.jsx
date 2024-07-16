import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

export default function Header() {
  const cartQuantity = 0;

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
