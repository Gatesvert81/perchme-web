import { signIn } from 'next-auth/react';
import React from 'react';
import { AnchorLink, Button, Image } from '../Components';

function HomeNav() {
  return (
    <nav className="w-full h-fit fixed top-0 left-0 z-30 flex justify-between items-center px-5 py-3">
      <div className="homenav__logo">
        <Button name="list__nav__btn" type="button">
          PINQL
        </Button>
      </div>
      <div className="flex justify-between items-center gap-10 ">
        <div className="flex">
          <div>
            <Button text="Discover" type="button" />
          </div>
          <div>
            <Button text="Help" type="button" />
          </div>
        </div>
        <div className="flex">
          {/* <AnchorLink route={`/auth?registerValue=${true}`}> */}
          {/* BUG: arrow won't show because it's also black */}
          <Button
            text="Sign Up"
            type="button"
            click={() => signIn('google')}
            icon="/icons/arrow.png"
            style="signup_btn"
          />
          {/* </AnchorLink> */}
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
