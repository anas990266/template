import { Search } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return(
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="text-2xl font-bold text--900">
          Hekto
        </div>

      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center px-4 py-2  text-slate-600">
        <Link href={"/"} className="mr-5  text-gray-900  hover:text-pink-500 " >Home </Link>
        <Link href={"/About"} className="mr-5 text-gray-900  hover:text-pink-500" >About US </Link>
        <Link href={""} className="mr-5 text-gray-900  hover:text-pink-500" >Products </Link>
        <Link href={""} className="mr-5 text-gray-900  hover:text-pink-500" >Blog </Link>
        <Link href={"/Contact"} className="mr-5 text-gray-900  hover:text-pink-500" >Contact </Link>
        <Link href={"/Form"} className="mr-5 text-gray-900  hover:text-pink-500" >Sign Up </Link>
      </nav>
      
       <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            /><div className="bg-pink-500 w-10 h-10"><Search /></div>
    </div>
     </div >
  </header>
  )
}