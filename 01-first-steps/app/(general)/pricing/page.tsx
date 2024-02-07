import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'SEO description para pricing page',
 keywords: ['precios','valor','ahoro','ofertas']
};



export default function pricingPage(){

    return(
        <>
            <span className="text-7xl" >Pricing Page</span>
        </>
    )
}