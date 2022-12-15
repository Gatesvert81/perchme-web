import React from 'react';
import { AnchorLink, Button, Image } from '../Components';

function HomeNav() {
  return (
    <nav className="w-full h-fit fixed top-0 left-0 z-30 flex justify-between items-center px-5 py-3">
      <div className="homenav__logo">
        <Button name="list__nav__btn">PINQL</Button>
      </div>
      <div className="flex justify-between items-center gap-10 ">
        <div className="flex">
          <div>
            <Button>Discover</Button>
          </div>
          <div>
            <Button>Help</Button>
          </div>
        </div>
        <div className="flex">
          <AnchorLink route={`/auth?registerValue=${true}`}>
            <Button icon="/icons/arrow.png" style="signup_btn">
              Sign Up
            </Button>
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
