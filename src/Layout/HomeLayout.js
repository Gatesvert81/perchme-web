import React from 'react';
import HomeNav from './HomeNav';

function HomeLayout({ children }) {
  return (
    <div className="w-full h-screen">
      <HomeNav />
      {children}
    </div>
  );
}

export default HomeLayout;
