import React from "react";
import { formatPrice, generateAmount } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  console.log(item);
  const { cartID, title, price, image, amount, company, productColor } = item;
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = () => {
    dispatch(handleAmount({ cartID, amount }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm ">{company}</h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24 ">
        <div className="form-control w-full max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
          >
            {generateAmount(amount + 5)}
          </select>
        </div>
        <button className="mt-2 link link-primary link-hover text-sm">
          Remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
