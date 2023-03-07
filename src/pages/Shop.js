import shopItems from '../data/shopItems.json';
import { ShopItem } from '../components/ShopItem';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop-items-grid'>
        {shopItems.map((item) => (
          // <h2 key={item.id}>{JSON.stringify(item)}</h2>
          <ShopItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};
