import shopItems from '../data/shopItems.json'

export const CartItem = ( { id, quantity }) => {

  const item = shopItems.find(item => item.id === id)
  if (item == null) return null;
  // What to show
  // 1. Image of item
  // 2. Price of single item
  // 3. Quantity of items
  // 4. Total Price 

  return (
      <div className='cart-item-row'>
        <img src={item.imgUrl} alt="" style={{width: '125px', height: '75px'}}/>
        <div className="cart-item-info">
          <h2>{item.name}<span>x{quantity}</span></h2>
          <h3>${item.price}</h3>
        </div>
      </div>
  )
}