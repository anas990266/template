export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-600 py-8 px-4">
   
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6"><div>
          <h1 className="text-2xl font-bold text-black mb-3">Hekto</h1>
          <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-2/3 p-2 border border-gray-300 rounded-l-md"
              />
          <button className="w-1/3 bg-pink-500 text-white p-2 rounded-r-md hover:bg-pink-600"> Sign Up</button>
          </div>
          <p className="text-sm text-gray-500">17 Princess Road, London, Greater London NW1 8JR, UK</p>
    </div>
  
          <div>
           <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-sm">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Customer Care</h2>
            <ul className="space-y-2 text-sm">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
         
          <div>
            <h2 className="text-lg font-semibold mb-3">Pages</h2>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
       </ul > 
      </div>
      </div>
      </footer>
    );
  }