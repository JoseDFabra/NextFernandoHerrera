// Importa React desde 'react'
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'SEO Description para contact page',
};

// Exporta la función de componente como la exportación predeterminada
export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
