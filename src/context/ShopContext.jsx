import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate=useNavigate()

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    setCartItems(prev => {
      const updated = { ...prev };
      if (!updated[itemId]) {
        updated[itemId] = {};
      }
      if (!updated[itemId][size]) {
        updated[itemId][size] = 0;
      }
      updated[itemId][size] += 1;
      return updated;
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, sizes) => {
      return total + Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0);
    }, 0);
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems(prev => {
      const updated = { ...prev };
      if (!updated[itemId]) {
        updated[itemId] = {};
      }
      if (quantity === 0) {
        delete updated[itemId][size];
        if (Object.keys(updated[itemId]).length === 0) {
          delete updated[itemId];
        }
      } else {
        updated[itemId][size] = quantity;
      }
      return updated;
    });
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find(p => p._id === itemId);
      if (!product) return total;
      
      return total + Object.values(sizes).reduce((sum, quantity) => {
        return sum + (product.price * quantity);
      }, 0);
    }, 0);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;