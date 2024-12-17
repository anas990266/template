import Link from "next/link";
import { ArrowDown} from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return (
      <div className="bg-purple-600 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Link href={"#"} className="hover:underline">mhhasanul@gmail.com</Link>
            </div>
            <div className="flex items-center gap-1">
              
            <Link href={"#"} className="hover:underline">(123456)7890</Link>
            </div>
          </div>
  
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-auto" >English
                <div className="w-4 h-4 "><ArrowDown /></div>
                </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>USD</span>
            
            </div>
            <Link href={"#"} className="hover:underline">
              Login
            </Link>
            <div><Heart/>WishList</div>
        <div>  <Link href={"#"}><ShoppingCart /></Link></div>
          </div>
        </div>
      </div>
    );
  }