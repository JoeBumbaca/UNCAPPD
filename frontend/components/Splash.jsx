import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const Splash = () => (
<div>
  <header>
    <GreetingContainer />
  </header>

  <div className="main">
    <div className="main-left">
      <div className="yellow-div">
      </div>
      <div className="splash-text">
          Share your love of Beer with millions of your closest friends.
      </div>
    </div>
    <div className="main-right">
    </div>
  </div>
</div>

);

export default Splash;