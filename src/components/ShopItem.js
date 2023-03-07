import { useShoppingCart } from '../context/shoppingCartContext';

export const ShopItem = ({ id, name, price, imgUrl }) => {

  const {
    cartQuantity,
  } = useShoppingCart();

  const quantity = cartQuantity;

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
            <button className='add-button'>Add To Cart</button>
          ):(
            <div className='item-card-body-lower-alternative'>
              <button>-</button>
              <div>{quantity}<span> in cart</span></div>
              <button>+</button>
            </div>
          )
        }
        </div>
      </div>

    </div>
  )
}