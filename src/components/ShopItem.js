import { useShoppingCart } from '../context/ShoppingCartContext';

export const ShopItem = ({ id, name, price, imgUrl }) => {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className='item-card'>
      <div className='item-card-image'>
        <img src={imgUrl} alt="" />
      </div>
      <div className="item-card-body">
        <div className="item-card-body-upper">
          <h2>{name}</h2>
          <h2>${price}</h2>
        </div>
        <div className="item-card-body-lower">
          {quantity === 0 ? (
            <button className='add-button' onClick={() => increaseCartQuantity(id) }>Add To Cart</button>
          ):(
            <div className='item-card-body-lower-alternative'>
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <div>{quantity}<span> in cart</span></div>
              <button onClick={() => increaseCartQuantity(id) }>+</button>
            </div>
          )
        }
        </div>
      </div>

    </div>
  )
}