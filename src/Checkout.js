import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
            <div className="checkout__left">
                {/* <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
          alt=""
        /> */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                        <p>
                            You have no items in your basket. To buy one or more click on "Add
                            to Basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;