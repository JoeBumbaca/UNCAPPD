import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const Splash = () => (
  <>
    <section className='main-top'>
      <GreetingContainer />
      <section className='main-mid'>
        <div className='main-left'>
          <div className='yellow-div'></div>
          <div className='splash-text'>
            Share your love of Beer with millions of your closest friends.
          </div>
        </div>
        <div className='main-right'></div>
      </section>
    </section>
    <section className='main-bottom'>
      <div className='bottom-images'>
        <img src={window.images.ratings} alt='ratings' />
        <img src={window.images.badges} alt='badges' />
      </div>
      <section className='bottom-images'>
        <p className='bottom-images-header'>CHECK IN AND RATE BEER</p>
        <p className='bottom-images-header'>DRINK NEW BEERS, UNLOCK BADGES</p>
      </section>
      <section className='bottom-images'>
        <p className='bottom-images-text'>
          Keep track of what you’ve tried and what you thought of it by checking
          in a beer and rating it.
        </p>
        <p className='bottom-images-text'>
          Expand your palate by trying new & different beer styles and unlock
          achievements along the way.
        </p>
      </section>
      <section className='footer'>
        <a href='https://github.com/JoeBumbaca'>
          <i className='fab fa-github fa-4x'></i>
        </a>
        <a href='https://www.linkedin.com/in/joseph-bumbaca-b4591568/'>
          <i className='fab fa-linkedin fa-4x'></i>
        </a>
        <a href='https://angel.co/u/joe-bumbaca'>
          <i className='fab fa-angellist fa-4x'></i>
        </a>
        <a href='https://joebumbaca.com/'>
          <i className='fas fa-gem fa-4x'></i>
        </a>
      </section>
    </section>
  </>
);

export default Splash;
