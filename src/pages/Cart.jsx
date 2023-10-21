import { useSelector } from "react-redux";
import { CartItemList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
const Cart = () => {
  const user = null;

  const numItems = useSelector((state) => state.cartState.numItemsInCart);
  if (numItems === 0) {
    return <SectionTitle text="Your Cart Is Empty!" />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
