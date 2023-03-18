import { Link } from 'react-router-dom';

export const Home = () => {

  return (
      <div className='home'>
        <div className='home-main'>
          <div className="home-text-section">
            <p>New to the market, best of its kind</p>
            <h2>Looking for something? We have it. Not looking for something? We have it </h2>
            <Link to={'/shop'}>
              <button>Go To Shop</button>
            </Link>
          </div>
          <div className="home-image">
            {/* <img src="images/piggy.jpg" alt="a book" /> */}
            <p>
              We at Buy!Stuff have thuroughly studied the needs of mankind, and with that in mind found what stuff people are most likely to need. 
            </p>
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
