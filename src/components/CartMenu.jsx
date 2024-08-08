import { useCart } from "./CartContext";
import Flex from "./Flex";
import { MdDeleteForever } from "react-icons/md";

export default function CartMenu({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-lg text-white border border-[black] bg-black rounded-full px-2">
            &times;
          </button>

        </div>
          {cart.map((item) => (
            <Flex key={item.id}  className="w-11/12 mx-auto">
            <img src={item.image} alt="" className="h-16 w-auto mr-4"/>
            <span className="text-ellipsis w-52" key={item.id}>{item.title}</span>
            <span className="px-4">{item.price}$</span>
            <span className="px-4">{item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)} ><MdDeleteForever className="w-8 h-8"/></button>
            </Flex>
          ))}
      </div>
    </>
  );
}
