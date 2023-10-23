import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { formatPrice, instance } from "../utils";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();

    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      address,
      cartItems,
      name,
      chargeTotal: orderTotal,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };
    try {
      const response = await instance.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("Your order has been placed successfully");

      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your orders";
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
