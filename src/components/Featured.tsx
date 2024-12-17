import Link from "next/link"
import Image from "next/image"
export default function Featured(){
    return(
        <div>
            <div className="flex justify-center font-bold text-blue-950 pt-16 text-5xl ">Featured Products</div>
              <div className="flex justify-center pt-20 space-x-4 columns-4 ">    
             
                 <Image 
        src="/image 1.png"
        alt="Picture"
        width={205}
        height={256}
        />
      
        <Image 
        src="/image 2.png"
        alt="Picture"
        width={205}
        height={256}
        />
        
        <Image 
        src="/image 15.png"
        alt="Picture"
        width={205}
        height={256}
        />
        
        <Image className="pl-7" 
        src="/image 4.png"
        alt="Picture"
        width={205}
        height={256}
        />
                    
        </div>
        <div className="flex justify-center space-x-4 column-4 "> 
        <div className="box-content h-14 w-48 p-4  hover:bg-pink-400 hover:text-white text-center text-pink-500"> Cantiliver chair 
        <p className="break-normal text-sky-800 hover:text-white">Code Y523201</p>
        <p className="break-normal text-sky-800 hover:text-white">$42.00</p>
        </div>
        <div className="box-content h-14 w-48 p-4  hover:bg-pink-400 hover:text-white text-center text-pink-500"> Cantiliver chair 
        <p className="break-normal text-sky-800 hover:text-white">Code Y523201</p>
        <p className="break-normal text-sky-800 hover:text-white">$42.00</p>
        </div>
        <div className="box-content h-14 w-48 p-4  hover:bg-pink-400 hover:text-white text-center text-pink-500"> Cantiliver chair 
        <p className="break-normal text-sky-800 hover:text-white">Code Y523201</p>
        <p className="break-normal text-sky-800 hover:text-white">$42.00</p>
        </div>
        <div className="box-content h-14 w-48 p-4  hover:bg-pink-400 hover:text-white text-center text-pink-500"> Cantiliver chair 
        <p className="break-normal text-sky-800 hover:text-white">Code Y523201</p>
        <p className="break-normal text-sky-800 hover:text-white">$42.00</p>

        </div>
       </div>
           <div>
           <div className="flex justify-center font-bold text-blue-950 pt-20 text-4xl">Leatest Products</div>
           <div className="flex justify-center space-x-10  text-2xl mt-6 text-blue-900">
           <div className="hover:text-pink-600">New Arrival</div>
           <div className="hover:text-pink-600">Best Seller</div>
           <div className="hover:text-pink-600">Featured</div>
           <div className="hover:text-pink-600">Special Offer
        </div>
  
        </div>
        <div>
        <div className="flex justify-center pt-20 space-x-4 columns-4 ">    
             
             <Image className="bg-gray-50"
    src="/1.png"
    alt="Picture"
    width={360}
    height={270}
    />
    
    <Image className="bg-gray-50"
    src="/image 15.png"
    alt="Picture"
    width={360}
    height={270}
    /> 
    
    <Image 
    src="/image 4.png"
    alt="Picture"
    width={360}
    height={270}
    />
   </div>
   <div className="flex items-stretch  order-last">
       <div className="ml-32 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       </div>
     </div>   
   </div>
   <section>
   <div>
        <div className="flex justify-center pt-20 space-x-4 columns-4 ">    
             
             <Image className="bg-gray-50"
    src="/w3.png"
    alt="Picture"
    width={360}
    height={270}
    />
    
    <Image className="bg-gray-50"
    src="/w2.png"
    alt="Picture"
    width={360}
    height={270}
    /> 
    
    <Image 
    src="/w1.png"
    alt="Picture"
    width={360}
    height={270}
    />
   </div>
   <div className="flex items-stretch  order-last">
       <div className="ml-32 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       </div>
     </div>   
  
   </section>

   <section>
   <div className="flex justify-center font-bold text-blue-950 pt-20 text-5xl">Trending Products</div>
   <div>
        <div className="flex justify-center  pt-20 space-x-4 columns-4 ">    
             
             <Image className="bg-gray-50 "
    src="/t1.png"
    alt="Picture"
    width={360}
    height={270}
    />

<Image className="bg-gray-50"
    src="/t2.png"
    alt="Picture"
    width={360}
    height={270}
    />
    
    <Image className="bg-gray-50"
    src="/t 3.png"
    alt="Picture"
    width={360}
    height={270}
    /> 
    
    <Image 
    src="/w2.png"
    alt="Picture"
    width={360}
    height={270}
    />
   </div>
   <div className="flex items-stretch  order-last">
       <div className="ml-20 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-60 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       <div className="ml-64 text-sky-900">Comfort Handy Craft <p>$42.00</p> </div>
       </div>
     </div>   
  
   </section>

     <div> 
     <div className="flex justify-center font-bold text-blue-950 pt-16 text-5xl">Discount Item </div>
     <div className="flex justify-center space-x-10  text-2xl mt-10 font-semibold text-blue-900 text-bold ">
           <div className="hover:text-pink-600">Wood Chair </div>
           <div className="hover:text-pink-600">Plastic Chair</div>
           <div className="hover:text-pink-600">Sofa Colletion</div>
     </div>      
      
     <div className="flex-1 text-center mt-28 lg:text-left px-28">
            <p className="text-blue-900 font-semibold text-4xl lg:text-4xl">20% Discount Of All Products</p>
            <h1 className="font-bold text-pink-600 my-4">Eams Sofa Compact </h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in juste</p>
            
            <div className="text-sky-900 pt-7"> Material expose like metals </div>
            <div className="text-sky-900">  Clear lines and geomatric figures </div>
            <div className="text-sky-900">  Simple neutral colours.t  </div>
            <div className="text-sky-900">  Material expose like metals </div>
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">Shop Now</button>
           
      </div>
         <div className="pt-16">
          <Image
          src="/as.png"
          alt=""
          width={1920}
          height={462}
          />
         </div>
         
         <div className="ml-72 pt-16 ">
          <Image
          src="/L.png"
          alt=""
          width={904}
          height={93}
          />
         </div>

         <div>
         <div className="flex justify-center font-bold text-blue-950 pt-44 text-5xl">Leatest Blogs </div>
         <div className="flex justify-center pt-20 space-x-32 columns-4 ">    
             
             <Image className="bg-gray-50 rounded-lg"
    src="/F1.png"
    alt="Picture"
    width={327}
    height={177}
    />
    
    <Image className="bg-gray-50"
    src="/F2.png"
    alt="Picture"
    width={327}
    height={177}
    /> 
    
    <Image className="bg-gray-50"
    src="/F3.png"
    alt="Picture"
    width={327}
    height={177}
    />
   </div>
          <main className="flex justify-center  pt-1 space-x-4 columns-4">
         <div>
         <div className="p-4">
            <h2 className="text-lg font-bold mt-2">Top essential Trends in 2021</h2>
            <p className="text-gray-600 mt-2">
              More off this less hello samlande lied much over tightly.
            </p>
            <Link href="#" className="text-blue-500 font-semibold mt-3 block">Read More</Link>
          </div>
        </div>

       <div>
          <div className="p-4">
          
            <h2 className="text-lg font-bold mt-2">Top essential Trends in 2021</h2>
            <p className="text-gray-600 mt-2">
              More off this less hello samlande lied much over tightly.
            </p>
            <Link href="#" className="text-blue-500 font-semibold mt-3 block">Read More</Link>
          </div>
        </div>

          <div className="p-4">
           
            <h2 className="text-lg font-bold mt-2">Top essential Trends in 2021</h2>
            <p className="text-gray-600 mt-2">
              More off this less hello samlande lied much over tightly.
            </p>
            <Link href="#" className="text-blue-500 font-semibold mt-3 block">Read More</Link>
            </div>
            </main>  
          </div>
        </div>
          
         </div>
          
    )
}

