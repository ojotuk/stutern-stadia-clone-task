import React from "react";



export default function Nav(props) {
    // console.log(props)
  return (
    <div className="nav">
      <div className='banner'>
      <div className='container'>
        <div className='nav-container-contents'>
        <h3><i className='fa fa-briefcase'></i>Play Cyberpunk 2077 on Stadia!</h3>
          <span><a href='/#'>Click here to Buy Now. </a>No subscription required.</span>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="nav-two">
            <img src="https://www.gstatic.com/stadia/gamers/landing_pages/cobranded/6f147f371c174dc/static/images/icons/stadia-logo-color.svg" />
            <ul className="nav-two-ul">
              <li className='mr-50 dark'>
                <a>About Stadia</a>
              </li>
              <li>
                <a>Games</a>
              </li>
            </ul>
            <ul className="nav-two-ul">
              <li className='mr-30'>
                <a>Sign in</a>
              </li>
              <li className='btn'>
                <a>Try Now</a>
              </li>
            </ul>
          </div>

      </div>
      
    </div>
  );
}

