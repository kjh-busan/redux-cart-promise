import { Fragement, useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
          status: 'pendings', title: 'sending', message: 'sending cart data!',
        })
      )}
      const response = await fetch(
        "https://mysecondproject-1d7a0-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      // if (!response.ok) {
      //   throw new Error("sending cart data failed.")
      // }
      // const responseData = await response.json();
      sendCartData().catch(error => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message: "Sending cart data failed"
          })
        )
      })
  }, [cart, dispatch]);

  return (
    <>
    {notification && (<Notification status={notification.status} title={notification.title} message={notification.message}/>)}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
