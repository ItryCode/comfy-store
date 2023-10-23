import React from "react";

import { CartTotals, SectionTitle, CheckoutForm } from "../components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  console.log(store.getState());
  const user = store.getState().userState.user;
  if (!user) {
    toast.warning("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your oder" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
