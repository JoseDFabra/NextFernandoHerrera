import { Navbar } from '@/components';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};
const GeneralLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Navbar/>
      <main className='flex flex-col items-center p-24 bg-amber-400'>
        <span className='text-lg bg-red-500 font-bold'>Hola mundo</span>
          {children}
      </main>
    </>
  );
};

export default GeneralLayout;
