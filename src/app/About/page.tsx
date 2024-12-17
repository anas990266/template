import Image from "next/image"
export default function About (){
    return(
 <div>    
         <div className="bg-gray-100 min-h-10 flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-500">
          <span className="text-gray-700">Home  </span> 
          <span className="text-gray-700">Pages  </span>
          <span className="text-pink-500">Contact </span>
        </p>
      </div>
      </div>
        <div className="bg-white py-10 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">

      <div className="p-4">
        <Image
          src="/Group 73.png" 
          alt="Picture"
          className="w-full rounded-lg shadow-lg"
          width={555}
          height={390}
        />
      </div>


        <div className="w-full md:w-1/2 p-4 text-left">
         <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Know About Our Ecommerce Businessn History</div>
         <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque
          ultricies mattis aliquam, malesuada diam est. Mauris odio sem tristique
          amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
          quis bibendum quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"> Contact us</button>
          </div>
         </div>

         <span>
         <div className="flex justify-center font-bold text-blue-950 pt-44 text-5xl ">Our Features</div>

         <div className="grid grid-cols-4 gap-3 place-items-start">
         <div>
          <Image
            src="/free.png"
            alt="#"
            width={65}
            height={65}
            className="ml-32"
            />
            <h3 className="text-2xl font-semibold text-sky-900 ml-20 mt-11">Free Delivery <p className="text-gray-300 text-left text-sm mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p> </h3>
         </div>
         <div>
         <Image
            src="/cashback.png"
            alt="#"
            width={65}
            height={65}
             className="ml-32"
            />
         <h3 className="text-2xl font-semibold text-sky-900 ml-20 mt-11">100% Cash Back <p className="text-gray-300 text-left text-sm mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p> </h3>
         </div>
         <div>
         <Image
            src="/quality.png"
            alt="#"
            width={65}
            height={65}
             className="ml-32"
            />
         <h3 className="text-2xl font-semibold text-sky-900 ml-20 mt-11">Quality Products<p className="text-gray-300 text-left text-sm mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p> </h3>
         </div>
         <div>
         <Image
            src="/24h.png"
            alt="#"
            width={65}
            height={65}
             className="ml-32"
            />
         <h3 className="text-2xl font-semibold text-sky-900 ml-20 mt-11">24/7 Support <p className="text-gray-300 text-left text-sm mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p> </h3>
         </div>
         </div>
         </span>
 </div>

    )
}