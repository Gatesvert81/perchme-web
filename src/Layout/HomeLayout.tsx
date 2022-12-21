import React from 'react';
import HomeNav from './HomeNav';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen">
      <HomeNav />
      {children}
    </div>
  );
}

export default HomeLayout;
