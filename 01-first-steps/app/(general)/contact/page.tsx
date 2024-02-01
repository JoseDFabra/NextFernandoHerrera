import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description para contact page',

};

export default function contactPage(){

    return(
        <>
            <span className="text-7xl" >Contact Page</span>
        </>
    )
}