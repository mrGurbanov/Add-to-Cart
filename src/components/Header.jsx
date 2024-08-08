import { Link } from "react-router-dom";
import Flex from "./Flex";
import { FaCartShopping } from "react-icons/fa6";
import CartMenu from "./CartMenu";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);  
  const { cart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <header className="h-[56px] py-2 border-b border-[#bbb]">
      <div className="mx-5">
        <Flex justifyContent={"space-between"}>
          <Link to={"#"} className="text-[20px]">Start Bootstrap</Link>
          <Flex className='grow'>
            <Flex justifyContent="flex-start" className='grow px-4 [&>a]:p-2 [&>a]:text-[16px] [&>a]:text-[#0000008c]'>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>About</Link>
              <Link to={"/"}>Shop</Link>
            </Flex>
            <button onClick={toggleCart} className="flex items-center py-[6px] px-[12px] border border-[#212529] rounded-lg cursor-pointer hover:bg-[black] duration-[200ms] hover:text-white" >
              <FaCartShopping className="mr-1"/>
              <Link to={"/"} >Cart</Link>
              <span className="badge bg-black text-white rounded-full ms-1 px-2 text-[16px]">{cart.length}</span>
            </button>
            <CartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
          </Flex>
        </Flex>
      </div>
    </header>
  );
}
