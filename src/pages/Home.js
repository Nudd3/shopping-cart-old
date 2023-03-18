import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-main'>
        <div className='home-text-section'>
          <p className='initial'>Newcomer of the year 2022!</p>
          <h2>
            Looking for something? We have it. Not looking for something? We
            have it
          </h2>
          <p className='home-info'>
            With the though process of{' '}
            <span>
              "everyone can be needing anything, at any time, everywhere"
            </span>{' '}
            we at Buy<span style={{color: 'red', textDecoration: 'overline'}}>Stuff</span> are always trying to improve our stash of stuff, to
            fit your, and everyone elses needs.
          </p>
          <Link to={'/shop'}>
            <button className='home-shop-button'>Go To Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='home-left'>
        <p>

          <h3><span>You</span> <u>need</u> it? </h3>
          <h3><span>We</span> <u>have</u> it! </h3>
        </p>
      </div>
      <div className='home-right'>

      </div> */
}
