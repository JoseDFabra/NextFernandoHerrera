import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";



export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded ">

      <Link href="./"  className="flex items-center bg-gray-300 mx-2 rounded p-1 hover:bg-gray-400" >
      <HomeIcon  />
        <span className="pl-2" >Home</span>
      </Link>


      <div className=" flex flex-1">
      </div>
        <Link className="bg-gray-300 mx-2 rounded p-1 hover:bg-gray-400" href="/about">About</Link>
        <Link className="bg-gray-300 mx-2 rounded p-1 hover:bg-gray-400" href="/pricing">Pricnig</Link>
        <Link className="bg-gray-300 mx-2 rounded p-1 hover:bg-gray-400" href="/contact">Contact</Link>

    </nav>
  )
}
