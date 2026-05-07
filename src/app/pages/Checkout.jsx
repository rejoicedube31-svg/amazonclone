import {useCartContext} from "../../features/cart/cartContext";
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";


const Checkout = () => {

    const {cart, totalPrice} = useCartContext();

    return (
        <>
            <NavBar />
            {
                cart.map((item) => {
                    return <div key={item.id}>{item.title}</div>
                })
            }
            <p> Total: R {totalPrice.toFixed(2)}</p>


            <Footer />

        </>
    )

}

export default Checkout;