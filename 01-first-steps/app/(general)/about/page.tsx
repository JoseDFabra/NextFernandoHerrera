import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'SEO Description',
 keywords: ['About Page', 'Jose', 'informacion', '...']
};

export default function aboutPage(){

    return(
        <>
            <span className="text-7xl" >About Page</span>
        </>
    )
}