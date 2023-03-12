import shopItems from '../data/shopItems.json'
import { useShoppingCart } from '../context/ShoppingCartContext';

export const CartItem = ( { id, quantity }) => {

  const { removeFromCart } = useShoppingCart();

  const item = shopItems.find(item => item.id === id)
  if (item == null) return null;
  // What to show
  // 1. Image of item
  // 2. Price of single item
  // 3. Quantity of items
  // 4. Total Price 

  return (
      <div className='cart-item-row'>
        <img src={item.imgUrl} alt=""/>
        <div className="cart-item-info">
          <div className="cart-item-info-left">
            <h2>{item.name}<span> x{quantity}</span></h2>
            <h3>$ {item.price}</h3>
          </div>

          <div className="cart-item-info-right">
            <h3>${item.price * quantity}</h3>
            <button onClick={() => removeFromCart(id)}>X</button>
          </div>
        </div>
      </div>
  )
}