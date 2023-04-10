import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import storeItems from '../data/shopItems.json';
export const ShoppingCart = ({ cartIsOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {cartIsOpen && (
        <div className='cart-view-background'>
          <div className='shopping-cart-container'>
            <div className='cart-header'>
              <h3>Cart</h3>
              <button onClick={closeCart}>X</button>
            </div>
            <div className='cart-body'>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className='cart-total'>
                Total: ${' '}
                {cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
