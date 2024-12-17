import Image from "next/image";
export default function HeroSec() {
    return (
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
          <div className="flex-1 text-center lg:text-left px-4">
            <p className="text-pink-500 font-semibold">Best Furniture For Your Castle..</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 my-4">New Furniture Collection <p className="break-normal">Trends in 2020</p></h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna inest adipiscing in phasellus non in juste</p>
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">Shop Now</button>
          </div>
          <div className="flex-1 relative px-4">
               <Image
               src={"/sofa.png"} 
               alt={"Picture"}
               width={629}
               height={629}
                />
            <div className="absolute top-10 right-10 bg-blue-500 text-white rounded-full px-6 py-3 text-lg shadow-lg"> 50% </div>
          </div>
        </div>
      </div>
    );
  }