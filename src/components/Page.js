import React, { useState, useEffect } from 'react';
import Cart from './cart.png';


function Page() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products?limit=21');
      const data = await response.json();
      if (data && Array.isArray(data.products)) {
        setProducts(data.products);
      } 
      else {
        console.error('API response does not contain products:', data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div className="bg-slate-500 content-between sm:content-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        <img src={Cart} alt="cart" className="ml-0 h-56" />
        <p className="mt-16 text-5xl text-gray-900 dark:text-black font-bold">My Cart</p>
        <p className="mt-16 text-3xl text-gray-700 dark:text-black font-semibold">Total : ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
        <div id="add-cart">
          {cartItems.map(cartItem => (
    
            <div className="bg-white rounded-lg shadow-md flex content-between  p-4 mt-4 w-auto" key={cartItem.id}>
              <h3 className="text-lg font-semibold mb-1">{cartItem.title}</h3>
              <p className="text-gray-600 mt-1 ml-7 ">${cartItem.price}</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded max-w-xl ml-auto" onClick={() => removeFromCart(cartItem)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map(item => (
            <div className="bg-white rounded-lg shadow-md p-4" key={item.id}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 mb-2">${item.price}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
              <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
