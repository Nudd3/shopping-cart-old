import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const Navbar = () => {

  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className='navbar'>
      <nav>
        <div className='nav-logo'>
          <Link to={'/'} className='nav-link'>
            <h1 className='title'>Buy<span>Stuff</span></h1>
          </Link>
        </div>
        <div className='nav-links'>
          <Link to={'/shop'} className='nav-link'>
            Shop
          </Link>
          <Link to={'/about'} className='nav-link'>
            About
          </Link>
        </div>
      </nav>
      {cartQuantity > 0 && (
        <button className='cart-button' onClick={openCart}>
          <svg
            viewBox='-2.4 -2.4 28.80 28.80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke='#CCCCCC'
              strokeWidth='0.096'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                opacity='0.1'
                d='M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z'
                fill='#323232'
              ></path>{' '}
              <path
                d='M5.60464 11.4417C5.79269 13.1343 5.88672 13.9805 6.45624 14.4903C7.02576 15 7.87723 15 9.58017 15H9.70588H13.4706H14.827C16.0002 15 16.5867 15 17.0627 14.7134C17.5387 14.4268 17.8132 13.9084 18.3621 12.8716L20.8303 8.20947C21.361 7.207 20.6343 6 19.5 6V6H9.70588H9.46906C7.38336 6 6.34051 6 5.74427 6.66616C5.14803 7.33231 5.2632 8.36878 5.49353 10.4417L5.60464 11.4417Z'
                stroke='#323232'
                strokeWidth='2.4'
                strokeLinejoin='round'
              ></path>{' '}
              <path
                d='M3 3H3.5V3C4.1642 3 4.72218 3.49942 4.79553 4.15955L5.55558 11'
                stroke='#323232'
                strokeWidth='2.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
              <path
                d='M9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18C8.32843 18 9 18.6716 9 19.5Z'
                stroke='#323232'
                strokeWidth='2.4'
              ></path>{' '}
              <path
                d='M18 19.5C18 20.3284 17.3284 21 16.5 21C15.6716 21 15 20.3284 15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5Z'
                stroke='#323232'
                strokeWidth='2.4'
              ></path>{' '}
            </g>
          </svg>
          <div className='cart-items-number'>{cartQuantity}</div>
        </button>
      )}
    </div>
  );
};

