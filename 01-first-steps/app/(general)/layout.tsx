// layout.tsx

import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        {/* Puedes agregar tu encabezado aquí */}
        <h1>My Website</h1>
      </header>
      <main className='bg-blue-400' >{children}</main>
      <footer>
        {/* Puedes agregar tu pie de página aquí */}
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
