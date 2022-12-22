import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { AnchorLink, Button } from '../Components';

interface MainNavProps {
  children?: React.ReactNode;
}

function MainNav({ children }: MainNavProps) {
  const [sideNav, setSideNav] = useState(false);

  const sideNavMainBtns = [
    {
      name: 'My Rental',
      seen: false,
      route: `/profile/rentals?userId=`,
      number: 0,
    },
    {
      name: 'Messages',
      route: `/profile/chat?userId=`,
      seen: true,
      number: 4,
    },
    {
      name: 'Favorites',
      route: `/profile/rentals?userId=`,
      seen: false,
      number: 0,
    },
  ];

  return (
    <>
      <nav className="w-full h-fit fixed top-0 left-0 z-30 flex px-5 py-2 justify-between items-center bg-white ">
        <div className="">
          <div className="">
            <AnchorLink route="/rooms">
              <Button name="list__nav__btn">PINQL</Button>
            </AnchorLink>
          </div>
          <div className="list__nav__filters">{children}</div>
        </div>
        {/* <div className="chatChildren">{chatChildren}</div> */}
        <div className="w-fit flex justify-between gap-5 items-center">
          <Button style="icon" icon="/icons/notify.png" />
          <Button
            click={() => setSideNav(true)}
            style="icon"
            icon="/icons/menu.png"
          />
        </div>
      </nav>
      <AnimatePresence>
        {sideNav && (
          <>
            <motion.div
              className="w-[70vw] h-full fixed top-0 right-0 z-50 bg-white px-5 py-10"
              initial={{
                opacity: 0,
                x: '100%',
              }}
              animate={{
                opacity: 1,
                x: '0%',
              }}
              exit={{
                opacity: 0,
                x: '100%',
              }}
              transition={{
                default: { ease: 'linear' },
              }}>
              {true ? (
                <>
                  <div className="side__nav__main">
                    <div className="side__nav__profile">
                      {/* <ProfileCard
                  name={user?.name}
                  className="side__nav__proflie__btn"
                >
                  <AnchorLink route="/profile">
                    <Button name="tetiary expand">View Profile</Button>
                  </AnchorLink>
                  <AnchorLink route="/host">
                    <Button name="tetiary expand">Host a Room</Button>
                  </AnchorLink>
                </ProfileCard> */}
                    </div>
                    <div className="side__nav__main__btns">
                      {sideNavMainBtns.map((btn, index) => (
                        <AnchorLink route={btn.route} key={index}>
                          <Button name="side__nav__btn">
                            <div className="side__nav__btn__text">
                              {btn.name}
                            </div>
                            <div className="side__nav__btn__num">
                              {btn.number}
                            </div>
                          </Button>
                        </AnchorLink>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Button
                      name="secondary"
                      // click={() => signOut()}
                    >
                      Log out
                    </Button>
                  </div>
                </>
              ) : (
                <div className="side__nav__no__user">
                  <div className="side__nav__no__user__head">
                    You are not Logged In
                  </div>
                  <div>
                    <AnchorLink route="/auth">
                      <Button style="primary-btn">Sign In</Button>
                    </AnchorLink>
                  </div>
                </div>
              )}
            </motion.div>
            <motion.div
              className="w-full h-full fixed top-0 left-0 z-40 bg-black/60 "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setSideNav(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainNav;
