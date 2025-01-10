import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2=" ORDERS" />
      </div>
      <div>
        {products?.length ? (
          products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Order Details */}
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">{item.description}</p>
                  <p className="font-medium text-green-600">Ready to Ship</p>
                </div>
              </div>
              {/* Order Actions */}
              <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                <p className="font-medium">
                  {currency}
                  {item.price}
                </p>
                <button
                  className="mt-2 text-sm text-blue-600 hover:underline"
                  onClick={() => alert(`Tracking order for ${item.name}`)}
                >
                  Track My Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
