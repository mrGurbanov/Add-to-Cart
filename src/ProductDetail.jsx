import Flex from "./components/Flex";
import Container from "./components/Container";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./components/CartContext";

export default function ProductDetail() {

  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    const res = await axios.get("https://fakestoreapi.com/products/14");
    return res;
  }
  useEffect(() => {
    getProducts().then((r) => setProducts(r.data));
  }, [])

  
    const { addToCart } = useCart();
    
    const handleAddToCart = (inputQuantity) => {
      addToCart(products, inputQuantity);
      alert(`Səbətə əlavə edildi`);
    }
  

    return (
    <Flex as="section" className={"py-5"}>
      <Container>
        <div className="grid grid-cols-2 py-5">
          <Flex justifyContent={"center"}>
            <img className="w-[500px] overflow-hidden px-6" src={products.image} alt="" />
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems="flex-start"
            className="w-[636px] px-6">
            <div className="mb-1">SKU: BST-498</div>
            <h1 className="text-5xl mb-2 font-bold">{products.title}</h1>
            <div className="price text-xl mb-12">
              <span className="line-through mr-2">$45.00</span>
              <span>{products.price}</span>
            </div>
            <p className="mb-4 text-xl font-light ">{products.description}</p>
            <Input handleAddToCart={handleAddToCart} />
          </Flex>
        </div>
      </Container>
    </Flex>
  );
}
