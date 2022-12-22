import React from 'react';
import MainNav from './MainNav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNav />
      {children}
    </div>
  );
}

export default Layout;
