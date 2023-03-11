import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem';

export const ShoppingCart = ({ cartIsOpen }) => {
 
  const {closeCart, cartItems } = useShoppingCart();
  
  return (
    <>
      {cartIsOpen && (
      <div className="cart-view-background" onClick={closeCart}>
        <div className='shopping-cart-container'>
          <div className='cart-header'>
            <h3>Cart</h3>
            <button onClick={closeCart}>Close</button>
          </div>
          <div className='cart-body'>
            {cartItems.map(item => (
              <CartItem key={item.id} { ...item }/>
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  )
}