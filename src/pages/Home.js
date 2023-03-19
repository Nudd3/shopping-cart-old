import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-main'>
        <div className='home-text-section'>
          <p className='initial'>Newcomer of the year 2022!</p>
          <p className='home-info'>
            With the thought process of{' '}
            <span>
              "everyone can be needing anything, at any time, everywhere"
            </span>{' '}
            we at Buy<span>Stuff</span> are always trying to improve our stash
            of stuff, to fit your, and everyone elses needs.
          </p>
          <Link to={'/shop'}>
            <button className='home-shop-button'>Go To Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
