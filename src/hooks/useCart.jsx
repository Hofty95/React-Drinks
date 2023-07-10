import { useContext } from "react";
import { cartContext } from "../context/CartProvider";

const useCart = () => useContext(cartContext)

export default useCart